const data = require('./data');
//// const custom = require('./customFunction');
var _ = require('lodash');



// [2. lodash]
// Lodash - 1. making movieList
var list = _.map(data, i=>_.pick(i, 'title', 'year', 'rating', 'genres'));
console.log(list);



// Lodash - 2. return Over rating MOVIE LIST
// var input = 3.3;
// var choiceRateList = _.map(data, i => _.filter(i, 'rating'));


// // if rating > input ; 
// console.log(choiceRateList.length);
// console.log(typeof(choiceRateList[0].rating)); 
// console.log(choiceRateList);





// Lodash - 3. NOT overlap GENRE LIST
var genreUniqList = _.uniq(_.flatten(_.map(data, 'genres')));
// console.log(genreUniqList);







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

// console.log(movieList);
// console.log(typeof(data));
// console.log(data.length);


// 2. return Over rating MOVIE LIST
// 3. NOT overlap GENRE LIST