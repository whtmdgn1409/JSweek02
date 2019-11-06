const data = require("./data");
const { linkArray, funcs } = require("./array");
linkArray(funcs);

const movieList = data.customMap(({ id, title, year, rating }) => ({
  id,
  title,
  year,
  rating
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
console.log(genreList(data));
