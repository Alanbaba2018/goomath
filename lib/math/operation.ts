import Constant from './constant';
import {XY} from '../typedef/geometry_type';
export default class Operation {
  static degreeToRadius(angle: number): number {
    return Math.PI * angle / 180;
  }
  static radiusToDegree(rad: number): number {
    return rad / Math.PI * 180;
  }
  static getDotMultiply(v0: XY, v1: XY): number {
    return v0.x * v1.x + v0.y * v1.y;
  }
  static getCrossMultiply(v0: XY, v1: XY): number {
    return v0.x * v1.y - v0.y * v1.x;
  }
  static isZero(n: number): boolean {
    return Math.abs(n) <= Constant.Zero;
  }
}