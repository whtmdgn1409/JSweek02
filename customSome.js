/*
    some > customSome

 */

let array1 = [1, 30, 39, 29, 10, 13];

Array.prototype.customSome = function (func) {
    for(i=0;i<this.length;i++){
        if(func(this[i])){
            return true;
        }
    }
    return false;
}
console.log(array1.customSome(num => num>100));