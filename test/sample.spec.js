const { linkArray, funcs } = require("./../array");

linkArray(funcs);

test("custom array", () => {
  expect([1, 2, 3].customFilter(v => v == 2)).toEqual([2]);
  expect([1, 2, 3].customEvery(v => v > 0)).toEqual(true);
  expect([1, 2, 3].customSome(v => v > 2)).toEqual(true);
  expect([1, 2, 3].customMap(v => v * v)).toEqual([1, 4, 9]);
  expect([1, 2, 3].customReduce((acc, val) => acc + val)).toEqual(6);
  expect([1, 2, , 3, [4, 5], [6, [7]]].customFlat()).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    [7]
  ]);
});
