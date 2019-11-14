const data = require("./data");
const { linkArray, funcs } = require("./array");
const _ = require("lodash");
linkArray(funcs);

const movieList = data.customMap(({ id, title, year, rating, genres }) => ({
  id,
  title,
  year,
  rating,
  genres
}));

function leastRatingList(list, rate) {
  return list.customFilter(({ rating }) => rating >= rate);
}

function genreList(list) {
  return [
    ...new Set(list.reduce((genres, movie) => [...genres, ...movie.genres], []))
  ];
}

// console.log(leastRatingList(movieList, 5));
console.log(genreList(movieList));

function lodashRating(list, rate) {
  return _.filter(list, e => e.rating > rate);
}

console.log(lodashRating(movieList, 5));
