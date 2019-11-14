
//<---Custom 함수들--->
Array.prototype.customEvery = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(!myFunc(this[i])) return false
    }
    return true;
}

Array.prototype.customFilter = function(myFunc){
    let newarr=[];
    for(let i=0; i<this.length; ++i){
        if(myFunc(this[i])) newarr.push(this[i]);
    }
    return newarr;
}

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

Array.prototype.customForEach = function(myFunc){
    for(let i=0; i<this.length; ++i){
        myFunc(this[i]);
    }
}

Array.prototype.customMap = function(myFunc){
    let newArr = [];
    for(let i=0; i<this.length; ++i){
        newArr.push(myFunc(this[i]));
    }
    return newArr;
}

Array.prototype.customReduce = function(myFunc, ...begin){ // myFunc에 reducer넣어야함
    let newValue;
    if(begin[0]) newValue=myFunc(begin[0], this[0]);
    else newValue = this[0];
    for(let i=1; i<this.length; ++i){
        newValue = myFunc(newValue, this[i]);
    }
    return newValue;
}

Array.prototype.customSome = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(myFunc(this[i])) return true;
    }
    return false;
}
/*
기록용 : nodejs 입출력
let fs = require('fs') // 참고) https://ourcstory.tistory.com/64
let data = fs.readFileSync('data.js', 'utf8');
*/

//<---1번 문제--->

let movieData = require('./data.js');
let filteredData = [];
for(let i=0; i<movieData.length; ++i){
    let newArr = [];
    newArr.push(movieData[i].id);
    newArr.push(movieData[i].title);
    newArr.push(movieData[i].year);
    newArr.push(movieData[i].rating);
    newArr.push(movieData[i].genres);
    filteredData.push(newArr);
}
console.log(filteredData);

//<---2번 문제--->
let input = 6.0;
let doubleFilteredData = [];

doubleFilteredData = filteredData.customFilter(i => i[3]>=input);
console.log(doubleFilteredData);


//<---3번 문제--->
let newSet = new Set();
filteredData.customForEach(function(i){
    i[4].customForEach(function(j){
        newSet.add(j);
    })
})
console.log(newSet);
