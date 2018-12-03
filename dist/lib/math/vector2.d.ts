export default class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(vector2: Vector2): Vector2;
    substract(vector2: Vector2): Vector2;
    normalize(): Vector2;
    clone(): Vector2;
    rotate(angle: number): Vector2;
    scale(multiple: number): Vector2;
    getModelLength(): number;
}
