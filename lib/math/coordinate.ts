import {Vec2} from '../typedef/vec2';
export default class Coordinate implements Vec2{
  public x: number;
  public y: number;
   /**
   * Class for representing coordinates and positions.
   * @param {number=} x, defaults to 0.
   * @param {number=} y, defaults to 0.
   * @struct
   * @constructor
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  /**
     * Returns the sum of two coordinates as a new goomath.Coordinate.
     * @param {!goomath.Coordinate} a A Coordinate.
     * @param {!goomath.Coordinate} b A Coordinate.
     * @return {!goomath.Coordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    public static sum(a: Vec2, b: Vec2): Coordinate {
      return new Coordinate(a.x + b.x, a.y + b.y);
  }
}