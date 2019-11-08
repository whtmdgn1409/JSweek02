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
  for(var i=0; i < this.length; i++){
    if(!cb(this[i])) return false;
  }
  return true;
}

Array.prototype.customSome = function customSome(cb){
  for(var i=0; i < this.length; i++){
    if(cb(this[i])) return true;
  }
  return false;
}

console.log([2,3,14,45,56].customFilter(e=>e>46));
console.log([2,3,14,45,56].customEvery(e=>e>=2));
console.log([2,3,14,45,56].customSome(e=>e<2));