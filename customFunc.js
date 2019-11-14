const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const customFilter = function(collection, callback) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i])) result.push(collection[i]);
  }
  return result;
};

//console.log(customFilter(words, word => word.length > 6));
const array1 = [1, 30, 39, 29, 10, 13];

const customEvery = function(collection, callback) {
  let result = true;
  for (let i = 0; result === true && i < collection.length; i++) {
    if (!callback(collection[i])) result = false;
  }
  return result;
};

//console.log(customEvery(array1, currentValue => currentValue < 40));
//console.log(customEvery([], currentValue => currentValue < 40));
const array = [1, 2, 3, 4, 5];

const customSome = function(collection, callback) {
  let result = false;
  for (let i = 0; result === false && i < collection.length; i++) {
    if (callback(collection[i])) result = true;
  }
  return result;
};
console.log(customSome(array, currentValue => currentValue % 2 === 0));
console.log(customSome([], currentValue => currentValue % 2 === 0));

const array2 = [1, 2, 3];

const customForEach = function(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i]);
  }
};

const copy = [];

customForEach(array2, elem => {
  if (elem % 2 === 0) copy.push(elem);
});
console.log(copy);

var array3 = [1, 4, 9, 16];
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

const customMap = function(collection, callback) {
  const newArr = [];
  for (let i = 0; i < collection.length; i++) {
    newArr.push(callback(collection[i]));
  }
  return newArr;
};

const newarray3 = customMap(array3, x => x % 2);
console.log(newarray3);

var reformattedArray = customMap(kvArray, function(obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
