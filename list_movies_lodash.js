//<---1번 문제--->
let movieData = require('./data.js');
var _ = require('underscore');
let filteredData = [];
_.forEach(movieData, function(i){
    filteredData.push(_.pick(i, ['id', 'title', 'year', 'rating', 'genres']));
})
console.log(filteredData);
// https://lodash.com/docs/4.17.15#pick
// https://lodash.com/docs/4.17.15#forEach


//<---2번 문제--->
let input = 6.0;
let doubleFilteredData = [];
doubleFilteredData = _.filter(filteredData, i=>i.rating>=input);
console.log(doubleFilteredData);
// https://lodash.com/docs/4.17.15#filter

//<---3번 문제--->
let newSet = new Set();
_.forEach(filteredData, function(i){
    _.forEach(i.genres, function(j){
        newSet.add(j);
    })
})
console.log(newSet);