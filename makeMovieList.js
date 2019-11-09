const data = require('./data');
//// const custom = require('./customFunction');
var _ = require('lodash');



// [2. lodash]
// Lodash - 1. making movieList
var list = _.map(data, i=>_.pick(i, 'title', 'year', 'rating', 'genres'));
// console.log(list);



// Lodash - 2. return Over rating MOVIE LIST
var inputRate = 6.9;
var a = [];
var filtered = _.map(_.forEach(_.map(data, i => _.pick(i, 'title', 'rating')), function(value){
    if(value.rating > inputRate ) {
    a.push(value.title); // 여기서 리스트를 각각 생성하고싶어요.. 
}}));

// console.log(filtered);
// console.log(a);




// Lodash - 3. NOT overlap GENRE LIST
var genreUniqList = _.uniq(_.flatten(_.map(data, 'genres')));
// console.log(genreUniqList);







// [1. customFunction]
// 1. making movie list
var movieList = {};
for(i = 0; i<data.length; i++){
    movieList[i] = {
        'title': data[i].title,
        'year' : data[i].year,
        'rating' : data[i].rating,
        'genres' : data[i].genres};
}
// console.log(movieList);


// 2. return Over rating MOVIE LIST
var movieList = {};
var input = 6.9;
for(i=0 ; i<data.length; i++) {
    if(data[i].rating > input){
        movieList[i] = {'title':data[i].title};
    }
}
// console.log(movieList);



// 3. NOT overlap GENRE LIST
var movieList = [];
for( i = 0 ; i<data.length ; i++) { movieList[i] = data[i].genres};
console.log(movieList);