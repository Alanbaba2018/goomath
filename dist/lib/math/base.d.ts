import { XY } from '../typedef/geometry_type';
export default class Base {
    static isZero(n: number): boolean;
    static isSamePoint(pt1: XY | number[], pt2: XY | number[]): boolean;
    static getDistance(pt1: XY | number[], pt2: XY | number[]): number;
    static transformPointToArray(pt: XY | number[]): number[];
    static isLeftOfLine(pt: number[], v1: number[], v2: number[]): boolean;
}
