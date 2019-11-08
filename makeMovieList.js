const data = require('./data');
// const custom = require('./customFunction');

var _ = require('lodash');



// [2. lodash]
// Lodash - 1. making movieList
var list = _.map(data, i=>_.pick(i, 'title', 'year', 'rating', 'genres'));
// console.log(list);









// [1. customFunction]
// 1. making movie list
let movieList = {};
for(i = 0; i<data.length; i++){
    movieList[i] = {
        'title': data[i].title,
        'year' : data[i].year,
        'rating' : data[i].rating,
        'genres' : data[i].genres};
}

console.log(movieList);
console.log(typeof(data));
console.log(data.length);
