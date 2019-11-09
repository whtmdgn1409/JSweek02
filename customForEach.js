Array.prototype.customForEach = function(myFunc){
    for(let i=0; i<this.length; ++i){
        myFunc(this[i]);
    }
}
let arr = [10, 18, 19, 22, 8];
arr.customForEach(function(element){console.log(element)});