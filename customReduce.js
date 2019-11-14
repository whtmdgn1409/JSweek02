const reducer = (accumulator, currentValue) => accumulator * currentValue;
Array.prototype.customReduce = function(myFunc, ...begin){
    let newValue;
    if(begin[0]) newValue=myFunc(begin[0], this[0]);
    else newValue = this[0];
    for(let i=1; i<this.length; ++i){
        newValue = myFunc(newValue, this[i]);
    }
    return newValue;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customReduce(reducer));
console.log(arr.customReduce(reducer, 2));