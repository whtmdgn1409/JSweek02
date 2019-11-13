const movieData = require('./data');
//
Array.prototype.customMap =function(func){
    let arr=new Array();
    for(i=0;i<this.length;i++){
        arr.push(func(this[i]));
    }
    return arr;
};

Array.prototype.customFilter = function(func) {
    let arr =new Array();
    for(i=0;i<this.length;i++){
        if(func(this[i])){
            arr.unshift(this[i]);
        }
    }
    return arr;
};
// 모듈화해주지않아서 출력해주는게 안됨


const movieList = movieData.customMap(mapping=>{
    let obj= {
        id: mapping.id,
        title: mapping.title,
        year: mapping.year,
        rating: mapping.rating,
        genre: mapping.genres,
    };
    return obj;
});

let inputRate =6.5;
const  leastRate= movieList.customFilter(mapped=>mapped.rating>inputRate);

console.log(leastRate);

//위 까지가 1,2번문제
//3번은 customReduce를 코딩하지못해서 배열 내장함수 reduce를 이용해서 짜겠다.






