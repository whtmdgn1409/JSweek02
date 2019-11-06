function customFilter(callbackfn, thisArg) {
  const array = this;
  const length = array.length;
  if (thisArg) {
    callbackfn = callbackfn.bind(thisArg);
  }
  const result = [];
  for (let index = 0; index < length; index++) {
    const element = array[index];
    callbackfn(element, index, array) && result.push(element);
  }
  return result;
}

function customEvery(callbackfn, thisArg) {
  const array = this;
  const length = array.length;
  if (thisArg) {
    callbackfn = callbackfn.bind(thisArg);
  }
  let result = true;
  for (let index = 0; index < length; index++) {
    const currentValue = array[index];
    result = result && callbackfn(currentValue, index, array);
  }
  return result;
}

function customSome(callbackfn, thisArg) {
  const array = this;
  const length = array.length;
  if (thisArg) {
    callbackfn = callbackfn.bind(thisArg);
  }
  let result = false;
  for (let index = 0; index < length; index++) {
    const currentValue = array[index];
    result = result || callbackfn(currentValue, index, array);
  }
  return result;
}

function customForEach(callbackfn, thisArg) {
  const array = this;
  const length = array.length;
  if (thisArg) {
    callbackfn = callbackfn.bind(thisArg);
  }
  for (let index = 0; index < length; index++) {
    const currentValue = array[index];
    callbackfn(currentValue, index, array);
  }
}

Array.prototype.customFilter = customFilter;
Array.prototype.customEvery = customEvery;
Array.prototype.customSome = customSome;
Array.prototype.customForEach = customForEach;

console.log([1, 2, 3, 4, 5].customFilter(v => v > 2));
console.log([1, 2, 3, 4, 5].customEvery(v => v > 0));
console.log([1, 2, 3, 4, 5].customSome(v => v == 1));
[1, 2, 3, 4, 5].customForEach(v => console.log(v));
