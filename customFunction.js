/// 1. filter
// original
// var filtered = [12, 5, 8, 130, 44].filter(value => value>=10);  

// custom
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






/// 2. every
// original
var ages = [32, 33, 16, 40];
// console.log(ages.every(age => age>=13));

// custom
Array.prototype.customEvery = function(func) {
    var cnt = 0;
    var len = this.length;
    for (i = 0; i<len; i++){
        if(func(this[i]) == true) { cnt ++; }
    }
    return (cnt == len ? true : false);
}
console.log(ages.customEvery( age => age>=13 ));





/// 3. some
// original
var ages = [32, 33, 16, 40];
// console.log(ages.some( age => age>=18 ));

//custom
Array.prototype.customSome = function(func) {
    var cnt = 0; 
    var len = this.length;
    for( i = 0 ; i<len; i++) if(func(this[i]) == true) cnt++;
    return ( cnt!=0 ? true : false);
}
console.log(ages.customSome( age => age>=35)); 





/// 4. forEach
//original
var testArray = ["aaa", "bbb", "ccc", "ddd"];
function plusEDIT(element, index, array) {
    array[index] = element + "EDIT";
}
// testArray.forEach(plusEDIT);

//custom
Array.prototype.customForEach = function(func) {
    for( i = 0; i<this.length ; i++) func(this[i], i, this);
}

testArray.customForEach(plusEDIT);
console.log(testArray);





/// 5. map
// original
var array = [1, 4, 9, 16];
// const map = array.map(x => x * 2);

// custom
Array.prototype.customMap = function(func) {
    var result = [];
    for( i=0 ; i<this.length; i++) result[i] = func(this[i]);
    return result;
}

const map = array.customMap( x => x*2 );
console.log(map)


/// 6. reduce

// original : reduce를 이용하여 다양한 기능의 함수를 구현가능
// // map과 동일한 기능을 하는 reduce
// result = number.reduce((acc, cur) => {
//     acc.push(cur % 2 ? '홀수' : '짝수');
//     return acc;
//   }, []);
// console.log(result); //[ '홀수', '짝수', '홀수' ]

// // filter와 동일한 기능을 하는 reduce
// result = number.reduce((acc, cur) => {
//     if(cur%2) acc.push(cur);
//     return acc;
// }, []);
// console.log(result); //[1,3]


//custom
const reducer = (accumulator, value) => accumulator + value;

Array.prototype.customReduce = function customReduce(func) {
    var accumulator = 0; // 누적 값
    for( i=0 ; i<this.length; i++) {
        accumulator = func(accumulator, this[i]);
    }
    return accumulator;
}
var data = [1, 2, 3, 4, 5];
console.log(data.customReduce(reducer));








/// 7. Flat

Array.prototype.customFlat = function customFlat() {
    const stack = [...this];
    const result = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next); // 남은것들 push 
      } else {
        result.push(next);
      }
    }
    return result.reverse();
}

var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
console.log(arr1.customFlat());



console.log('-----------------------------------');
/////////////////////////////////////////

