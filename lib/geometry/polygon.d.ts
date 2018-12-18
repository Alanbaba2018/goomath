import Polyline from './polyline';
import { XY } from '../typedef/geometry_type';
export default class Polygon extends Polyline {
    constructor(coordinates: Array<XY | number[]>);
    contain(pt: XY | number[]): boolean;
    private _cleanData;
    private _isWithInTrapezoid;
}
