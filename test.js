test('2+4는 6인가', () => {
  expect(((a, b) => a+b)(2,4)).toBe(6);
});