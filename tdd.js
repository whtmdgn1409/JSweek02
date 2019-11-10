// 😢낫 이지... 

const assert = require('assert');

// error.error 를 발생시킴
assert.throws(
    function(){
        throw new Error("wrong value");
    }, Error //생성자를 이용하여 검사
);

assert.throws( // custom error 검사하기 
    function() { throw new Error("wrong  value");},
    function(err) {
        if((err instanceof Error) && /value/.test(err)) {
        return true;
        }
    }, "unexpected error"
);



function add(a,b) {return a+b};

var expected = add(1,2);
var message = 'one plus two is three';

// 아래 3가지 경우는 모두 같은 경우
assert(expected === 3, message);
assert.ok(expected === 3, message);
assert.equal(3, expected, message);


////////////////////////////////////////////////////////

var list1 = [1,2,3,4,5];
var list2 = [1,2,3,4,5];
// deepEqual : 내용이 같으면 통과, 다르면 에러
assert.deepEqual(list1, list2, "deepEqual check failed");
// notDeepEqual : 내용이 다르면 통과, 같으면 에러
// assert.notDeepEqual(list1, list2, "notDeepEqual check failed");


////////////////////////////////////////////////////////

function sayHello(name, callback){
    var error = false; 
    var str = "hello " + name;
    callback(error, str);
}

// sayHello('world', function(err, value){
//     assert.ifError(err);
//     assert.equal(value, 'hello world');
// })


console.log('finished succsss!');