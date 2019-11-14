Array.prototype.customSome = function(myFunc){
    for(let i=0; i<this.length; ++i){
        if(myFunc(this[i])) return true;
    }
    return false;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customSome(i => i<7));