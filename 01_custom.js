Array.prototype.customFilter = function customFilter(cb){
  var newArr = new Array();
  for(var i=0; i < this.length; i++){
    if(cb(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

console.log([2,3,14,45,56].customFilter(e=>e>46));