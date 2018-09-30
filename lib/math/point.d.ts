import Coordinate from './coordinate';
export default class Point extends Coordinate {
    constructor(x: number, y: number);
}
export declare type Polyline = Point[];
export declare type Polygon = Polyline[];
