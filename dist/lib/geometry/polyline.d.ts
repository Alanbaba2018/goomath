import { XY } from "../typedef/geometry_type";
import Bound from "../math/bound";
export default class Polyline {
    readonly coordinates: number[][];
    constructor(coordinates: Array<XY | number[]>);
    getBound(): Bound;
    protected transformToArray(coordinates: Array<XY | number[]>): number[][];
}
