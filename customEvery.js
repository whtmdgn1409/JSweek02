/*
    every > customEvery
*/

//every는 모든요소가 판별함수를 통과하는지 보는것. 통과하면 true 아니면 false
let  array1 = [1, 30, 39, 29, 10, 13];

Array.prototype.customEvery = function(func){
    for(i=0;i<this.length;i++){
        if(!func(this[i])){
            return false;
        }
    }
    return true;
};

console.log(array1.customEvery(arr => arr<40));