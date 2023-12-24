const movies = require("./data");
const _ = require("lodash");

// 1. 영화의 id, 제목, 년도, 평점, 장르 데이터를 갖고있는 리스트를 생성한다.
const customMap = (array, conditionFunction) => {
  let mappingArray = [];
  for (let i = 0; i < array.length; i++) {
    mappingArray.push(conditionFunction(array[i], i, array));
  }
  return mappingArray;
};
const filteredMovie = customMap(movies, (movie) => ({
  id: movie.id,
  title: movie.title,
  year: movie.year,
  rating: movie.rating,
  genres: movie.genres,
}));
// console.log(filteredMovie);

//--------Lodash 라이브러리 사용-------------
const filteredMovie2 = _.map(movies, (movie) => ({
  id: movie.id,
  title: movie.title,
  year: movie.year,
  rating: movie.rating,
  genres: movie.genres,
}));
// console.log(filteredMovie2);

// 2. 평점을 input으로 받아 해당 평점 이상의 평점을 갖는 리스트를 반환한다.
const inputRating = 7.0;

const customFilter = (array, conditionFunction) => {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (conditionFunction(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  //filteredArray에 조건에 부합하는 인자를 넣어두고 반환
  return filteredArray;
};
const ratedMovie = customFilter(movies, (movie) => movie.rating >= inputRating);
// console.log(ratedMovie);

//--------Lodash 라이브러리 사용-------------

const ratedMovie2 = _.filter(movies, (movie) => movie.rating >= inputRating);
// console.log(ratedMovie2);

// 3. 갖고있는 영화리스트들의 모든 장르를 추출해 중복되지 않은 장르 리스트를 생성한다.

let genreList = customMap(movies, (movie) => movie.genres).reduce(
  (acc, genres) => acc.concat(genres),
  []
);
let List = [];
genreList.map((gen) => {
  if (!List.includes(gen)) {
    List.push(gen);
  }
});
// console.log(List);
let List2 = _.uniq(_.flatMap(movies, "genres"));
// lodash에서 uniq를 처음 알 수 있었다. 공식문서 상 설명은
//동일성 비교를 위해 SameValueZero를 사용하여 각 요소의 첫 번째 발생만 유지되는 중복이 없는 배열을 만듭니다.
// 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다.
// flatMap은 각 요소를 찾아 평탄화 배열을 만들어줌. 이는 다차원 배열일 때 한 단계만 평탄화함.
// 모든 중첩배열을 평탄화하기 위해선 flatMapDeep을 사용하면 좋음
// console.log(List2);
