import array from "./../array";

const { customMap } = array.funcs;
Array.prototype.customMap = customMap;

expect([1, 2, 3].customMap(v => v * v)).toEqual([1, 4, 9]);
