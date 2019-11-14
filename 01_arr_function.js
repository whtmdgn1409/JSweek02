const _ = require('lodash');

Array.prototype.customFilter = function customFilter(cb){
  var newArr = new Array();
  for(var i=0; i < this.length; i++){
    if(cb(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

Array.prototype.customEvery = function customEvery(cb){
  if(this.length===0) return true;
  for(var i=0; i < this.length; i++){
    if(!cb(this[i])) return false;
  }
  return true;
}

Array.prototype.customSome = function customSome(cb){
  if(this.length===0) return false;
  for(var i=0; i < this.length; i++){
    if(cb(this[i])) return true;
  }
  return false;
}

Array.prototype.customForEach = function customForEach(cb){
  for(var i=0; i < this.length; i++){
    cb(this[i]);
  }
}

Array.prototype.customMap = function customMap(cb){
  var newArr = new Array();
  for(var i=0; i<this.length; i++){
    newArr.push(cb(this[i]));
  }
  return newArr;
}

Array.prototype.customReduce = function customReduce(cb){
  var acc = 0;
  for(var i=0; i< this.length; i++){
    acc = cb(acc, this[i]);
  }
  return acc;
}

Array.prototype.customFlat = function customFlat(cb){
  var newArr = new Array();
  for(var i=0; i < this.length; i++){
    if(Array.isArray(this[i])){
      for(var j=0; j < this[i].length; j++){
        newArr.push(this[i][j]);
      }
    }
    else newArr.push(this[i]);
  }
  return newArr;
}

console.log([2,3,14,45,56].customFilter(e=>e>46));
console.log([].customEvery(e=>e<2));
console.log([2,3,14,45,56].customEvery(e=>e>=2));
console.log([2,3,14,45,56].customSome(e=>e<2));
console.log([].customSome(e=>e>2));
[2,3,14,45,56].customForEach(e => console.log(e));
console.log([2,3,14,45,56].customMap(e => e * 2));
console.log([2,3,14,45,56].customReduce((acc, cur) => acc + cur));
console.log([2,[3,[14,45]],56].customFlat(1));


const movieData = require('./data');

// ---------------------step1

// custom함수사용
const newList = movieData.customMap(e =>{
  return {
    id: e.id,
    title: e.title,
    year: e.year,
    rating: e.rating,
    genres: e.genres,
  }
});

// lodash사용
const _newList = _.map(movieData, e => {
  return {
    id: e.id,
    title: e.title,
    year: e.year,
    rating: e.rating,
    genres: e.genres,
  }
})


// ---------------------step2

// custom함수사용
const ratingList = newList.customFilter(e => e.rating > 7);

// lodash 사용
const _ratingList = _.filter(_newList, e => e.rating > 7);


// ---------------------step3

// custom 함수 사용
const genresList = newList.customMap(e => {
  return e.genres;
})
const newGenreList = [];
genresList.customFlat().customForEach(e=> {
  if(newGenreList.indexOf(e) === -1) {
    newGenreList.push(e);
  }
})
console.log(newGenreList);

// lodash 사용
const _genresList = _.flatMap(_newList, e => e.genres);
const _newGenreList = [];
_.forEach(_genresList, e => {
  if(_newGenreList.indexOf(e) === -1) {
    _newGenreList.push(e);
  }
})
console.log(_newGenreList);