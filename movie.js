const data = require("./data");
const { linkArray, funcs } = require("./array");
linkArray(funcs);

const movieList = data.customMap(({ id, title, year, rating }) => ({
  id,
  title,
  year,
  rating
}));

function leastRatingList(rate) {
  return movieList.customFilter(({ rating }) => rating >= rate);
}

console.log(leastRatingList(5));
