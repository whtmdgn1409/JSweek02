// // 1. assert(exception) 함수를 작성합니다. input으로 들어온 값이 false라면 throw로 실패 메세지를 전달합니다.
// const assert = (exception) => {
//   if (!exception) {
//     throw new Error("Error");
//   }
// };

// // let val = 10;
// // assert(val === 20, "val should be 20");

// // 2.expect(value, equal) 함수를 작성합니다. 첫번째 인자로 특정 함수의 실행을, 두번째 인자로 해당 함수를 실행했을 때의 결과를 직접 입력해줍니다.
// // 두 값의 동치의 결과를 assert함수로 전달합니다. ex) expect((function(a, b) { return a + b;})(2,4), 6) // 예외가 발생하지않음
// const expect = (actual, expected) => {
//   assert(actual === expected);
// };
// // let res = (a, b) => a + b;
// // let val = expect(res(2, 4), 6);

// // 3.주어진 결과가 값이 아닌 객체 또는 배열인 경우에도 같은 동작을 하도록 합니다. 위의 영화리스트 문제와 복잡한 형태의 중첩된 객체들로 직접 테스트를 해봅니다.

// // 실제 함수
// function findElement(arr, condition) {
//   for (const element of arr) {
//     if (condition(element)) {
//       return element;
//     }
//   }
//   return null;
// }

// // 테스트 코드
// const movies = [
//   { title: "Movie 1", genre: "Action" },
//   { title: "Movie 2", genre: "Drama" },
//   { title: "Movie 3", genre: "Comedy" },
// ];

// const actionMovie = findElement(movies, (movie) => movie.genre === "Action");
// expect(actionMovie, { title: "Movie 1", genre: "Action" });
