import { XY } from '../typedef/geometry_type';
import Bound from '../math/bound';
import Base from '../math/base';

export default class Polyline {
  public readonly coordinates: number[][];
  constructor(coordinates: Array<XY | number[]>) {
    this.coordinates = this.transformToArray(coordinates);
  }
  public getBound(): Bound {
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = -Number.MAX_VALUE;
    let maxY = -Number.MAX_VALUE;
    for (const coordinate of this.coordinates) {
      minX = Math.min(minX, coordinate[0]);
      minY = Math.min(minY, coordinate[1]);
      maxX = Math.max(maxX, coordinate[0]);
      maxY = Math.max(maxY, coordinate[1]);
    }
    return new Bound(minX, minY, maxX - minX, maxY - minY);
  }
  protected transformToArray(coordinates: Array<XY | number[]>): number[][] {
    return coordinates.map((coordinate) => {
      return Base.transformPointToArray(coordinate);
    });
  }
}
