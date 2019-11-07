function assert(expect, answer) {
  if (typeof expect === "object") {
    if (Array.isArray(expect) && Array.isArray(answer)) {
      if (expect.length === answer.length) {
        if (answer.every((ans, index) => ans == expect[index])) {
          console.log("\033[32m통과\033[0m");
        }
      }
    }
  } else if (expect === answer) {
    console.log("\033[32m통과\033[0m");
  } else {
    console.log("\033[31m실패\033[0m");
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
const d = deepCopy(c);
d.push(6);
d[2].c = 5;
console.log(c);
console.log(d);
