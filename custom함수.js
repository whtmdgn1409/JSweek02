//Filter 함수 커스텀
const customFilter = (array, conditionFunction) => {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (conditionFunction(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  //filteredArray에 조건에 부합하는 인자를 넣어두고 반환
  return filteredArray;
};
// Every 함수 커스텀
const customEvery = (array, conditionFunction) => {
  for (let i = 0; i < array.length; i++) {
    if (!conditionFunction(array[i], i, array)) {
      return false;
    }
  }
  return true;
};
// Some 함수 커스텀
const customSome = (array, conditionFunction) => {
  for (let i = 0; i < array.length; i++) {
    if (conditionFunction(array[i], i, array)) {
      return true;
    }
  }
  return false;
};
// forEach 함수 커스텀
const customforEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
// Map 함수 커스텀
const customMap = (array, conditionFunction) => {
  let mappingArray = [];
  for (let i = 0; i < array.length; i++) {
    mappingArray.push(conditionFunction(array[i], i, array));
  }
  return mappingArray;
};
// reduce 함수 커스텀
const customReduce = (array, callback, initialValue) => {
  let accumulator = initialValue === undefined ? undefined : initialValue;

  for (let i = 0; i < array.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, array[i], i, array);
    } else {
      accumulator = array[i];
    }
  }
  return accumulator;
};
// flat 함수 커스텀
const customFlat = (array, depth = 1) => {
  const flatten = (arr, currentDepth) => {
    return arr.reduce((result, item) => {
      //reduce 메서드를 통해 각 요소에 대해 평탄화 작업을 수행
      //result는 누적된 배열, item은 현재 배열의 요소
      if (Array.isArray(item) && currentDepth < depth) {
        result = result.concat(flatten(item, currentDepth + 1));
      }
      //재귀적으로 flatten함수를 호출해 result 배열과 하나로 합침.
      else {
        result.push(item);
      }
      //현재 요소가 배열이 아니거나 최대 깊이일 경우엔 그냥 현재 요소를 result배열에 추가함
      return result;
    }, []);
  };
  return flatten(array, 0);
  //customFlat함수는 최초 호출 시에 flatten함수를 호출하고, 초기 깊이를 0으로 전달하여 배열의 평탄화를 시작함.
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 조건이 되는 함수는 boolean값을 반환한다
function isEven(number) {
  return number % 2 === 0;
}
function isBigEnough(number) {
  return number < 11;
}
function isSmallEnough(number) {
  return number < 0;
}
function printElement(element, index) {
  console.log(`숫자 ${element}는 ${index}번째 수입니다.`);
}
function copyMachine(element) {
  return element * 2;
}
function sumReducer(accumulator, currentNumber) {
  return accumulator + currentNumber;
}
console.log(customFilter(numbers, isEven)); //조건에 맞는 요소만 반환
console.log(customEvery(numbers, isBigEnough)); //요소들이 모두 조건에 맞으면 true, 아니면 false 반환
console.log(customSome(numbers, isSmallEnough)); //요소 중에 하나라도 조건에 맞으면 true, 아니면 false
customforEach(numbers, printElement);
console.log(customMap(numbers, copyMachine));
/*
map함수와 forEach함수의 차이점
- 1. 반환값 : map함수는 각 배열 요소에 대한 변환된 값을 가진 새로운 배열을 반환.
    forEach함수는 반환 값이 없음. 기본적으로 undefined를 반환하며, side effect를 위해 사용됨.
- 2. 변형 여부 : map 함수는 원본 배열을 변경하지 않고, 각 요소에 대한 변환 값을 포함하는 새로운 배열을 생성함.
    forEach함수는 배열을 변경하지 않고 단순히 배열의 각 요소에 대해 주어진 함수를 실행함.
*/

console.log(customReduce(numbers, sumReducer, 0)); //요소들을 주어진 콜백 함수로 실행하면서 하나의 누적된 결과값 반환

//flat함수 전용
const nestedArray = [1, [2, [3, 4], 5]];
console.log(customFlat(nestedArray));
console.log(customFlat(nestedArray, 2));

//flat함수는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성함.
//근데 처리속도가 느린 문제가 있음.
//flat 대신 쓸 수 있는 대안 .concat()
//flat보다는 1.5~ 2배 빠르다. 하지만 depth를 1로밖에 설정할 수 없는 단점 존재
//2번째 대안 reduce + concat + isArray
//.concat()의 단점인 depth 제한은 없으나 속도는 당연 .concat()만 쓴 것보단 느림

//이유 -> V8 브라우저 엔진에 .flat()에 대한 최적화는 아직 되지 않았고, .concat()에는 최적화되었다.
//Conclusion ->간편하게 쓸 수 있는 flat()은 브라우저에 최적화되지 않은 상태이므로 [].concat()을 사용하는 것이 속도 면에서 유리하다.
