# customFilter.js

조건에 맞는 배열의 원소들만 걸러내는 함수다.

배열의 타임, Array에 Prototype을 추가한다. 내장 함수로 사용할 수 있다.
Swift의 Extension처럼 Array타입으로 이루어진 모든 곳에서 사용 가능하다.
```javascript
Array.prototype.customFilter = function(myFunc){
    let newarr=[];
    for(let i=0; i<=this.length; ++i){
        if(myFunc(this[i])) newarr.push(this[i]);
    }
    return newarr;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customFilter(i => i>18));
```
Array타입의 프로토 타입에 customFilter라는 함수를 추가했다.
함수 안에서 주어진 배열을 사용할때는 this를 사용한다.
this를 그냥 출력하면 [10, 18, 19, 22, 8]를 출력하지만
for(i in this){}에서 i를 출력하면 0, 1, 2, 3, 4, customFilter를 순서대로 뱉는다.

암튼 newarr를 선언해서 조건을 만족하는 원소들을 넣어서 리턴해준다.

# customEvery

모든 원소가 조건을 만족하는지 판별하는 함수다.
```javascript
Array.prototype.customEvery = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(!myFunc(this[i])) return false
    }
    return true;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customEvery(i => i>7));
```
순서대로 조건에 i를 넣어보다가 만족하지 못하는게 있으면 바로 return false를 한다.
모두 만족하면 true를 리턴한다.

# customSome

어떠한 하나의 원소라도 조건을 만족하는지 판별하는 함수다.
```javascript
Array.prototype.customSome = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(myFunc(this[i])) return true
    }
    return false;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customSome(i => i<7));
```
어떠한 원소 하나라도 조건을 만족하면 true, 끝까지 만족하지 못하면 false를 리턴한다.

# customForEach

모든 원소에 대해 해당 함수를 실행하는 함수다.
```javascript
Array.prototype.customSome = function(myFunc){
    for(let i=0; i<this.length; ++i){
        myFunc(this[i]);
    }
}
let arr = [10, 18, 19, 22, 8];
arr.customSome(function(element){console.log(element)});
```
입력받은 myFunc에 인자를 하나하나 넣어서 실행한다.

# customMap

모든 원소에 대해 해당 함수를 실행한 배열을 리턴하는 함수다.

```javascript
Array.prototype.customMap = function(myFunc){
    let newArr = [];
    for(let i=0; i<this.length; ++i){
        newArr.push(myFunc(this[i]));
    }
    return newArr;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customMap(i => i+7));
```
새로운 배열 newArr을 선언하고 각각의 원소에 대한 결과값을 push해준 후 리턴한다.

# customReduce

배열에서 인접한 두 원소를 이용해 하나의 새로운 값을 도출하도록 reducer함수를 만든다.
그 reducer함수를 배열 전체에 적용한다.
인자가 두개이면, 두번째 인자를 초기값으로 사용한다.(원래는 배열의 0번째 인덱스가 초기값)
```javascript
const reducer = (accumulator, currentValue) => accumulator * currentValue;
Array.prototype.customReduce = function(myFunc, ...begin){
    let newValue;
    if(begin[0]) newValue=myFunc(begin[0], this[0]);
    else newValue = this[0];
    for(let i=1; i<this.length; ++i){
        newValue = myFunc(newValue, this[i]);
    }
    return newValue;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customReduce(reducer));
console.log(arr.customReduce(reducer, 2));
```
새로운 값 newValue(최초엔 초기값이 들어있음)와 주어진 배열의 다음 원소를 myFunc에 대입해 하나의 값을 얻는다.
그 값을 다시 newValue에 넣어 모두 소진될때까지 반복한다.

# customFlat

배열 안에 배열이 있을 때 차원을 하나씩 푸는(해제하는) 함수다.
예를 들면, 
```
[10, [23, [24, 23]], 13]
```
이라는 배열이 있을 때 하나의 차원을 풀면
```
[10, 23, [24, 23], 13]
```
이 배열이 되며, 여기서 하나의 차원을 더 풀면
```
[10, 23, 24, 23, 13]
```
이 배열이 된다.

```javascript
Array.prototype.customFlat = function(...depth){
    
    const reducer = (acc, val) => acc.concat(val);
    let newArr=this;
    if(depth[0]){
        for(let i=0; i<depth[0]; ++i){
            newArr=newArr.reduce(reducer, []);
        }
    }
    else newArr=this.reduce(reducer, []);
    return newArr;
}
let arr = [10, [18, [19, 22], 8]];
let arr2 = [10, , 19, 29, , 9];
console.log(arr.customFlat());
console.log(arr.customFlat(2));
console.log(arr2.customFlat());
```

공식 홈페이지에 나온대로, reduce와 concat을 적절히 활용했다.
reducer의 val에 배열 자체가 오면 acc 뒤에 val 배열 내용을 쭉 붙이는 함수로 reduce함수를 진행한다.
중간에 공백이 있으면 붙지 않는다.

