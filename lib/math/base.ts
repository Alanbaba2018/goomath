import Constant from '../math/constant';
import {XY} from '../typedef/geometry_type';
import Vector2 from '../math/vector2';
import Operation from './operation';

export default class Base {
  public static isZero(n: number): boolean {
    return Math.abs(n) <= Constant.Zero;
  }
  public static isSamePoint(pt1: XY | number[], pt2: XY | number[]): boolean {
    const p1: number[] = Array.isArray(pt1) ? pt1 : [pt1.x, pt1.y];
    const p2: number[] = Array.isArray(pt2) ? pt2 : [pt2.x, pt2.y];
    return this.isZero(p1[0] - p2[0]) && this.isZero(p1[1] - p2[1]);
  }
  public static getDistance(pt1: XY | number[], pt2: XY | number[]): number {
    const p1: number[] = Array.isArray(pt1) ? pt1 : [pt1.x, pt1.y];
    const p2: number[] = Array.isArray(pt2) ? pt2 : [pt2.x, pt2.y];
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
  }
  public static transformPointToArray(pt: XY | number[]): number[] {
    return Array.isArray(pt) ? pt : [pt.x, pt.y];
  }
  public static isLeftOfLine(pt: number[], v1: number[], v2: number[]): boolean {
    let [bottomPt, topPt] = [new Vector2(v1), new Vector2(v2)];
    if (bottomPt.y > topPt.y) {
      [bottomPt, topPt] = [topPt, bottomPt];
    }
    const base: Vector2 = new Vector2(topPt.x - bottomPt.x, topPt.y - bottomPt.y);
    const comVec: Vector2 = new Vector2(pt[0] - base.x, pt[1] - base.y);
    return Operation.getCrossMultiply(base, comVec) > 0;
  }
}
