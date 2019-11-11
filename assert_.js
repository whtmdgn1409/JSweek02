//<---1번--->
console.log('1번');
function assert(exception){
    if(exception === false){
        throw "error message";
    }
}
try{
    assert(false);
}
catch(e) {
    console.error(e);
}
//<---2번--->
console.log('2번');
function expect(value, equal){
    try{
        if(value instanceof Array && equal instanceof Array){
            console.log('this is Array');
            assert(JSON.stringify(value) == JSON.stringify(equal));
        }
        else if(value instanceof Object && equal instanceof Object){
            console.log('this is Object');
            assert(Object.is(value, equal));
        }
        else{
            console.log('What is this?');
            assert(value == equal);
        }
    }
    catch(e){
        console.error(e);
    }
}

expect((function(a, b) { return a + b;})(2,4), 6);

//<---3번--->
console.log('3번');
let a = [1, 2, 3, 4];

function f(b, c){
    return b.concat(c);
}
console.log('배열');
expect(f([1, 2], [3, 4]), a);
console.log('객체');
let obj = { id: 1, name: "myName" };
expect(obj, obj);