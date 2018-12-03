import Operation from './operation';
export default class Vector2 {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(vector2: Vector2): Vector2 {
    this.x += Number(vector2.x);
    this.y += Number(vector2.y);
    return this;
  }
  substract(vector2: Vector2): Vector2 {
    this.x -= Number(vector2.x);
    this.y -= Number(vector2.y);
    return this;
  }
  normalize(): Vector2 {
    const dis = this.getModelLength();
    if (dis === 0) {
      return new Vector2(0, 0);
    }
    return new Vector2(this.x / dis, this.y / dis);
  }
  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
  rotate(angle: number): Vector2 {
    const rotatedRad: number = Operation.degreeToRadius(angle);
    const x = this.x * Math.cos(rotatedRad) - this.y * Math.sin(rotatedRad);
    const y = this.x * Math.sin(rotatedRad) + this.y * Math.cos(rotatedRad);
    this.x = x;
    this.y = y;
    return this;
  }
  scale(multiple: number): Vector2 {
    this.x *= multiple;
    this.y *= multiple;
    return this;
  }
  getModelLength(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}