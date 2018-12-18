import { XY } from "../..";

export default class Bound {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  constructor(x: number, y: number, width: number = 0, height: number = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  /**
   * 获取Bound的中心点
   */
  public getCenter(): XY {
    return {x: this.x + this.width / 2, y: this.y + this.height / 2};
  }
  /**
   * 判断与另一个Bound是否相交
   * @param bound Bound
   */
  public isOverlaped(bound: Bound): boolean {
    const center0 = this.getCenter();
    const center1 = bound.getCenter();
    return Math.abs(center1.x - center0.x) < (this.width + bound.width) / 2 &&
      Math.abs(center1.y - center0.y) < (this.height + bound.height) / 2;
  }
  /**
   * 点是否在Bound内
   * @param pt Number[]
   */
  public contain(pt: number[]): boolean {
    return pt[0] > this.x && pt[1] > this.y && pt[0] < (this.x + this.width) && pt[1] < (this.y + this.height);
  }
  /**
   * 判断两个Bound是否相交
   * @param bound1 Bound
   * @param bound2 Bound
   */
  public static isOverlaped(bound1: Bound, bound2: Bound): boolean {
    return bound1.isOverlaped(bound2);
  }
}
