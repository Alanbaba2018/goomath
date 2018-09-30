import { Vec2 } from '../typedef/vec2';
export default class Coordinate implements Vec2 {
    x: number;
    y: number;
    /**
    * Class for representing coordinates and positions.
    * @param {number=} x, defaults to 0.
    * @param {number=} y, defaults to 0.
    * @struct
    * @constructor
    */
    constructor(x?: number, y?: number);
    /**
     * Returns the sum of two coordinates as a new goomath.Coordinate.
     * @param {!goomath.Coordinate} a A Coordinate.
     * @param {!goomath.Coordinate} b A Coordinate.
     * @return {!goomath.Coordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    static sum(a: Vec2, b: Vec2): Coordinate;
    /**
     * Return scaled goomath.Coordinate
     * @param {number=} s, defaults to 1.
     * @returns {!goomath.Coordinate} this
     */
    scale(s?: number): this;
}
