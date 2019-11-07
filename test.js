function assert(exception) {
  if (!exception) throw "\033[31m실패\033[0m";
  return "\033[32m통과\033[0m";
}
function expect(value, answer) {
  if (typeof value === "object") {
    if (Array.isArray(value) && Array.isArray(answer)) {
      assert(value.length === answer.length);
      answer.forEach((ans, index) => expect(value[index], ans));
    } else if (value instanceof Object && answer instanceof Object) {
      assert(Object.keys(value).length === Object.keys(answer).length);
      Object.keys(answer).forEach(key => expect(value[key], answer[key]));
    }
  } else {
    assert(value === answer);
  }
}

function deepCopy(original) {
  let copy;
  if (typeof original !== "object") {
    copy = original;
  } else {
    if (Array.isArray(original)) {
      copy = [];
      for (const v of original) {
        copy.push(deepCopy(v));
      }
    } else {
      copy = {};
      const keys = Object.keys(original);
      const values = Object.values(original);
      const length = keys.length;
      for (let i = 0; i < length; i++) {
        copy[keys[i]] = deepCopy(values[i]);
      }
    }
  }
  return copy;
}

const a = { a: 1, b: 2, c: 3 };
const b = { ...a };
b.d = 4;
console.log(a);
console.log(b);
const c = [1, 2, { a: 3, b: [1, 2, { d: 3 }] }, [1, 2, 3], 5];

try {
  expect(c, [1, 2, { a: 3, b: [1, 2, { d: 3 }] }, [1, 2, 3], 5]);
} catch (error) {
  console.log(error);
}
const d = deepCopy(c);
d.push(6);
d[2].c = 5;
console.log(c);
console.log(d);
