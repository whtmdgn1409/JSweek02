Array.prototype.customMap = function(myFunc){
    let newArr = [];
    for(let i=0; i<this.length; ++i){
        newArr.push(myFunc(this[i]));
    }
    return newArr;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customMap(i => i+7));