import Vector2 from '../math/vector2';
import { XY } from '../typedef/geometry_type';
export default class Line {
    /**
     * 求点到直线的垂足
     * @param pt 目标点
     * @param v0 直线起点
     * @param v1 直线终点
     */
    static getPedalPointOfLine(pt: XY, v0: XY, v1: XY): Vector2;
    /**
     * 求点到直线的距离
     * @param pt 目标点
     * @param v0 直线起点
     * @param v1 直线终点
     */
    static getDistanceOfPtToLine(pt: XY, v0: XY, v1: XY): number;
    /**
     * 判断点在直线上
     * @param {XY} pt
     * @param {Line} line
     */
    static isPointAtLine(pt: XY, line: Line): boolean;
    /**
     * 判断两条直线是否平行(包含共线)
     * @param {Line} line1
     * @param {Line} line2
     */
    static isParalled(line1: Line, line2: Line): boolean;
    /**
     * 判断两条直线是否共线
     * @param {Line} line1
     * @param {Line} line2
     */
    static isCollinear(line1: Line, line2: Line): boolean;
    /**
     * 判断两条直线是否相交 Reference
     * @param {Line} line1
     * @param {Line} line2
     */
    static isInsersect(line1: Line, line2: Line): boolean;
    /**
     * 计算两直线的交点 Reference https://blog.csdn.net/yan456jie/article/details/52469130
     * @param {Line} line1
     * @param {Line} line2
     */
    static getInsersectPt(line1: Line, line2: Line): Vector2 | undefined;
    /**
     * 判断两条线段是否相交
     * @param {Line} line1
     * @param {Line} line2
     */
    static isInsersectOfSegment(line1: Line, line2: Line): boolean;
    /**
     * 判断向量vec1、vec2是否在基准向量base的两侧
     * @param {Vector2} base
     * @param {Vector2} vec1
     * @param {Vector2} vec2
     */
    static isBothSide(base: Vector2, vec1: Vector2, vec2: Vector2): boolean;
    v0: Vector2;
    v1: Vector2;
    constructor(v0: XY | number[], v1: XY | number[]);
    /**
     * 获得直线的方向向量
     */
    getDirVector(): Vector2;
    /**
     * 获得直线方向向量的单位向量
     */
    getDirection(): Vector2;
    /**
     * 获得直线的长度
     */
    getLineLength(): number;
}
