# week 02
# 자바스크립트 기본 문법
## 배열의 내장함수
### filter();
: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
```
var filtered = [12, 5, 8, 130, 44].filter(value => value>=10);  

// [12, 130, 44]

```

**customFilter**
```
Array.prototype.customFilter = function(func) {
    var result = [];
    var j = 0;
    for(i = 0 ; i<this.length; i++){
        if(func(this[i]) == true) result[j++] = this[i];
    }
    return result; 
}

var filtered = [12, 5, 8, 130, 45].customFilter( value => value>10 );
console.log(filtered);

```

### every();
: 주어진 함수의 테스트를 모든 요소가 통과하면 `true`, 하나라도 통과하지 못하면 `false`  return
```
var ages = [32, 33, 16, 40];
console.log(ages.every(age => age>=13));

```

**customEvery**
```
Array.prototype.customEvery = function(func) {
    var result = []; 
    var cnt = 0;
    var len = this.length;
    for (i = 0; i<len; i++){
        if(func(this[i]) == true) { cnt ++; }
    }
    return (cnt == len ? true : false);
}
console.log(ages.customEvery( age => age>=13 ));

```


### some();
: 주어진 함수의 테스트를 하나라도 만족하는 요소가 존재하면 `true`, 하나도 없으면 `false` return
```
var ages = [32, 33, 16, 40];
console.log(ages.some( age => age>=18 ));
```

**customSome**
```
Array.prototype.customSome = function(func) {
    var cnt = 0; 
    var len = this.length;
    for( i = 0 ; i<len; i++) if(func(this[i]) == true) cnt++;
    return ( cnt!=0 ? true : false);
}
console.log(ages.customSome( age => age>=35)); 

```


### forEach
: 주어진 함수를 배열요소 각각에 대해실행
- 메서드 수행 후 리턴값은 undefined
- for문 대신 사용할 수 있음
```
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 수행이
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// 똑같다
items.forEach(function(item){
  copy.push(item);
});

```

**customForEach**
```
Array.prototype.customForEach = function(func) {
    for( i = 0; i<this.length ; i++) func(this[i], i, this);
}

testArray.customForEach(plusEDIT);
console.log(testArray);

```


### map
: 배열 전체를 돌며 그 값들로 새로운 배열을 만드는 데 용이함
```
var array = [1, 4, 9, 16];
const map = array.map(x => x * 2);
```

**customMap**
```
Array.prototype.customMap = function(func) {
    var result = [];
    for( i=0 ; i<this.length; i++) result[i] = func(this[i]);
    return result;
}
const map = array.customMap( x => x*2 );
console.log(map)


```



### reduce
`배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);` 으로 사용
: sort, every, some, find, findIndex, includes … 모두 reduce로 구현이 가능!! 
```
const number = [1,2,3];
// map과 동일한 기능을 하는 reduce
result = number.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
console.log(result); //[ '홀수', '짝수', '홀수' ]


// filter와 동일한 기능을 하는 reduce
result = number.reduce((acc, cur) => {
    if(cur%2) acc.push(cur);
    return acc;
}, []);
console.log(result); //[1,3] 

```

- 사용 : 비동기 프로그래밍
```
const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time); 
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
// 바로 1000
// 1초 후 2000
// 2초 후 3000
// 3초 후 4000
```

초기값을 Promise.resolve() -> return 된 Promise에 .then()을 붙여 다음 누적값으로 넘겨 순차적으로 실행된다. 





---

## lodash 란?
: 자바스크립트 유틸리티 라이브러리. 함수형 프로그래밍으로 구현되어있다고 한다.
그리고 개인적으로 라이브러리를 불러와서 사용하하는거라, 더 오래 걸리지 않나 하는 의문이 들었었는데 실제로 비교해보니 성능차이가 월등히 나는 것 같다. 

[image:77C1E1D6-FD95-4D85-B03F-00F2A579651D-3275-0000B796E8DA37FA/67975074-04B5-4414-AF1F-64C561AF160F.png]

- `_.fill(array(3), true)` : 특정 값으로 배열을 채울 때 사용 
- `_.pluck(array, ‘id’)` : 객체로 구성된 배열에서 객체의 특정 키에 대한 값을 추출할 때 사용 -> `map`으로 대체되었음 
- `_.every(array, function)` : 배열을 순회하면서 각 요소에대해 함수를 수행하고, 모든 결과가 `true`를 리턴할 때 동작하는 함수 














---

## 새로 알게된 것
1. Object도 함수다..
```
var obj = {}; //Object
vars obj = new Object(); //Object
```


2. 모듈
: 관련된 코드들을 하나의 코드 단위로 `캡슐화`하는 것
다른 파일에서 하나의 파일에 포함되어있는 함수를 사용하는 등에 사용

3. `module.exports` 와 `exports`의 관계
: exports 가 call by reference로 module.exports를 바라보고있고, 리턴값은 항상 module.exports 이다. 
`Exports` -> `module.exports` -> `{}` 
둘 다 동일하게 작동하며, `call by reference`방식을 사용하며, 최종 리턴값은 `module.exports`!

**commonJs** export
	1. 여러개의 객체를 export : `exports` 변수의 속성으로 할당
	2. 딱 하나의 객체를 export : `module.exports` 변수 자체에 할당

4. `require`와 `import`
- `require` : nodejs에서 사용되고있는 commonJs 키워드
- `import` : ES6에서 새롭게 도입된 키워드
	- 😊 : `import`, `from`, `export`, `default`같은 모듈 관리 전용 키워드를 사용하기 때문에 가독성이 좋고, Named Parameter같이 commonJS에서 지원하지 않는 기능들을 지원.(더 newest~) 
	- 한개의 객체 export : `export default {} `
	- 
```
// 둘다 Moment.js라는 라이브러리를 불러오는 동일한 작업 수행
const moment = require('moment');
import moment from 'moment';
```


###📎`CommonJS vs ES6`개념을 이해하는데 큰 도움이 되었던 글
[javascript require vs import (CommonJs와 ES6) | bono’s blog](https://blueshw.github.io/2017/05/16/ES-require-vs-import/)
