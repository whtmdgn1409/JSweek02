Array.prototype.customFilter = function customFilter(cb){
  var newArr = new Array();
  for(var i=0; i < this.length; i++){
    if(cb(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

Array.prototype.customEvery = function customEvery(cb){
  if(this.length===0) return true;
  for(var i=0; i < this.length; i++){
    if(!cb(this[i])) return false;
  }
  return true;
}

Array.prototype.customSome = function customSome(cb){
  if(this.length===0) return false;
  for(var i=0; i < this.length; i++){
    if(cb(this[i])) return true;
  }
  return false;
}

Array.prototype.customForEach = function customForEach(cb){
  for(var i=0; i < this.length; i++){
    cb(this[i]);
  }
}

console.log([2,3,14,45,56].customFilter(e=>e>46));
console.log([].customEvery(e=>e<2));
console.log([2,3,14,45,56].customEvery(e=>e>=2));
console.log([2,3,14,45,56].customSome(e=>e<2));
console.log([].customSome(e=>e>2));
[2,3,14,45,56].customForEach(e => console.log(e));
