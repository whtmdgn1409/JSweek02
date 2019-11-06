function customFilter(callbackfn, thisArg) {
  const length = this.length;
  if (thisArg) {
    callbackfn = callbackfn.bind(thisArg);
  }
  const result = [];
  for (let index = 0; index < length; index++) {
    const element = this[index];
    callbackfn(element, index, this) && result.push(element);
  }
  return result;
}

Array.prototype.customFilter = customFilter;

console.log([1, 2, 3, 4, 5].customFilter(v => v > 2));
