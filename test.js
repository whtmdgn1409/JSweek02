test('1 is 1', () => {
    expect(1).toBe(1);
})
function f(b,c){
    return b.concat(c);
}
test('배열 비교', () => {
    expect(f([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
})

