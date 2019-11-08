Array.prototype.customEvery = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(!myFunc(this[i])) return false
    }
    return true;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customEvery(i => i>7));