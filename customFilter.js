Array.prototype.customFilter = function(myFunc){
    let newarr=[];
    for(let i=0; i<this.length; ++i){
        if(myFunc(this[i])) newarr.push(this[i]);
    }
    return newarr;
}
let arr = [10, 18, 19, 22, 8];
console.log(arr.customFilter(i => i>18));