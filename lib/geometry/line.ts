import Vector2 from "../math/vector2";
import { XY } from "../typedef/geometry_type";
import Operation from '../math/operation';
import Base from '../math/base';

export default class Line {
  public v0: Vector2;
  public v1: Vector2;
  constructor(v0: XY | number[], v1: XY | number[]) {
    v0 = Base.transformPointToArray(v0);
    v1 = Base.transformPointToArray(v1);
    this.v0 = new Vector2(v0[0], v0[1]);
    this.v1 = new Vector2(v1[0], v1[1]);
  }
  /**
   * 获得直线的方向向量
   */
  public getDirVector(): Vector2 {
    const x: number = this.v1.x - this.v0.x;
    const y: number = this.v1.y - this.v0.y;
    const vec: Vector2 = new Vector2(x, y);
    return vec;
  }
  /**
   * 获得直线方向向量的单位向量
   */
  public getDirection(): Vector2 {
    const vec: Vector2 = this.getDirVector();
    return vec.normalize();
  }
  /**
   * 获得直线的长度
   */
  public getLineLength() {
    const vec: Vector2 = this.getDirVector();
    return vec.getModelLength();
  }
  /**
   * 求点到直线的垂足
   * @param pt 目标点
   * @param v0 直线起点
   * @param v1 直线终点
   */
  static getPedalPointOfLine(pt: XY, v0: XY, v1: XY): Vector2 {
    const vec0: Vector2 = new Vector2(pt.x - v0.x, pt.y - v0.y);
    const vec1: Vector2 = new Vector2(v1.x - v0.x, v1.y - v0.y);
    const dot: number = Operation.getDotMultiply(vec0, vec1);
    const dis: number = dot / vec1.getModelLength();
    return new Vector2(v0.x, v0.y).add(vec1.normalize().scale(dis));
  }
  /**
   * 求点到直线的距离
   * @param pt 目标点
   * @param v0 直线起点
   * @param v1 直线终点
   */
  static getDistanceOfPtToLine(pt: XY, v0: XY, v1: XY) {
    const vec0: Vector2 = new Vector2(pt.x - v0.x, pt.y - v0.y);
    const vec1: Vector2 = new Vector2(v1.x - v0.x, v1.y - v0.y);
    const cross: number = Operation.getCrossMultiply(vec0, vec1);
    return Math.abs(cross / vec1.getModelLength());
  }
  /**
   * 判断点在直线上
   * @param {XY} pt
   * @param {Line} line
   */
  static isPointAtLine(pt: XY, line: Line) {
  }
  /**
   * 判断两条直线是否平行(包含共线)
   * @param {Line} line1
   * @param {Line} line2
   */
  static isParalled(line1: Line, line2: Line): boolean {
      const dir1: Vector2 = line1.getDirection();
      const dir2: Vector2 = line2.getDirection();
      const cross: number = Operation.getCrossMultiply(dir1, dir2);
      return Operation.isZero(cross);
  }
  /**
   * 判断两条直线是否共线
   * @param {Line} line1
   * @param {Line} line2
   */
  static isCollinear(line1: Line, line2: Line): boolean {
      const dir1: Vector2 = line1.getDirection();
      const line: Line = new Line(line1.v0, line2.v0);
      const dir2: Vector2 = line.getDirection();
      const cross = Operation.getCrossMultiply(dir1, dir2);
      return this.isParalled(line1, line2) && Operation.isZero(cross);
  }
  /**
   * 判断两条直线是否相交 Reference
   * @param {Line} line1
   * @param {Line} line2
   */
  static isInsersect(line1: Line, line2: Line): boolean {
    return !this.isParalled(line1, line2);
  }
  /**
   * 计算两直线的交点 Reference https://blog.csdn.net/yan456jie/article/details/52469130
   * @param {Line} line1
   * @param {Line} line2
   */
  static getInsersectPt(line1: Line, line2: Line) {
    if (this.isParalled(line1, line2)) {
      if (this.isCollinear(line1, line2)) {
        console.warn('These lines is collinear');
        return;
      }
      console.warn('These lines is paralled');
      return;
    }
    const vec1: Vector2 = line1.getDirVector();
    const vec2: Vector2 = line2.getDirVector();
    const vec3: Vector2 = new Vector2(line2.v0.x - line1.v0.x, line2.v0.y - line1.v0.y);
    const vec4: Vector2 = new Vector2(line2.v1.x - line1.v0.x, line2.v1.y - line1.v0.y);
    const l1: number = Math.abs(Operation.getCrossMultiply(vec1, vec3));
    const l2: number = Math.abs(Operation.getCrossMultiply(vec1, vec4));
    let ratio = 0;
    // 线段相交的情况
    if (this.isInsersectOfSegment(line1, line2)) {
      ratio = l1 / (l1 + l2);
    } else {
      ratio = l1 / (l1 - l2);
    }
    return line2.v0.clone().add(vec2.clone().scale(ratio));
  }
  /**
   * 判断两条线段是否相交
   * @param {Line} line1
   * @param {Line} line2
   */
  static isInsersectOfSegment(line1: Line, line2: Line): boolean {
    const base1: Vector2 = line1.getDirVector();
    const base2: Vector2 = line2.getDirVector();
    const vec1: Vector2 = new Vector2(line2.v0.x - line1.v0.x, line2.v0.y - line1.v0.y);
    const vec2: Vector2 = new Vector2(line2.v1.x - line1.v0.x, line2.v1.y - line1.v0.y);
    const vec3: Vector2 = new Vector2(line1.v0.x - line2.v0.x, line1.v0.y - line2.v0.y);
    const vec4: Vector2 = new Vector2(line1.v1.x - line2.v0.x, line1.v1.y - line2.v0.y);
    return this.isBothSide(base1, vec1, vec2) && this.isBothSide(base2, vec3, vec4);
  }
  /**
   * 判断向量vec1、vec2是否在基准向量base的两侧
   * @param {Vector2} base
   * @param {Vector2} vec1
   * @param {Vector2} vec2
   */
  static isBothSide(base: Vector2, vec1: Vector2, vec2: Vector2): boolean {
    return (Operation.getCrossMultiply(base, vec1) * Operation.getCrossMultiply(base, vec2)) <= 0;
  }
}