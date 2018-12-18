declare enum Geometry_Type {
    VECTOR = 0,
    LINE = 1,
    BOX = 2
}
interface XY {
    x: number;
    y: number;
}
export { Geometry_Type, XY };
