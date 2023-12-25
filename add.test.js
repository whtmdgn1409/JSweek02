function Add(a, b) {
  return a + b;
}

test("확인", () => {
  const res = Add(2, 4);
  expect(res).toBe(6);
});
