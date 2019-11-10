//step01
function assert(exception){
  if(exception) return true;
  else throw 'ERROR';
}

//step02
function expect(value, equal) {
  assert(value === equal);
}

try{
  expect(((a,b) => a+b)(2,4), 5);
  expect(((a,b) => a+b)(2,4), 6);
} catch(e) {
  console.log(e);
}
