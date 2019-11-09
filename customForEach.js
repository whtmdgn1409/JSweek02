Array.prototype.customSome = function(myFunc){
    for(let i=0; i<this.length; ++i){
        myFunc(this[i]);
    }
}
let arr = [10, 18, 19, 22, 8];
arr.customSome(function(element){console.log(element)});