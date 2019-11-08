const data = require('./data');
// const custom = require('./customFunction');

var _ = require('lodash');



// 2. lodash

console.log(_.filter([4,5,6], n=>n%2==0));
var list = _.map(data, 'title');
console.log(list);

// let movieList = [];
// for(i = 0; i<data.length; i++){
//     movieList[i] = _.filter(data, 'title');
// }

// console.log(movieList);








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
// year, rating, genres