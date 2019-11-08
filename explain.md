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

