import { XY } from '../typedef/geometry_type';
export default class Bound {
    /**
     * 判断两个Bound是否相交
     * @param bound1 Bound
     * @param bound2 Bound
     */
    static isOverlaped(bound1: Bound, bound2: Bound): boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width?: number, height?: number);
    /**
     * 获取Bound的中心点
     */
    getCenter(): XY;
    /**
     * 判断与另一个Bound是否相交
     * @param bound Bound
     */
    isOverlaped(bound: Bound): boolean;
    /**
     * 点是否在Bound内
     * @param pt Number[]
     */
    contain(pt: number[]): boolean;
}
