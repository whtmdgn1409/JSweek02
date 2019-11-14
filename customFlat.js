Array.prototype.customFlat = function(...depth){
    
    const reducer = (acc, val) => acc.concat(val);
    let newArr=this;
    if(depth[0]){
        for(let i=0; i<depth[0]; ++i){
            newArr=newArr.reduce(reducer, []);
        }
    }
    else newArr=this.reduce(reducer, []);
    return newArr;
}
let arr = [10, [18, [19, 22], 8]];
let arr2 = [10, , 19, 29, , 9];
console.log(arr.customFlat());
console.log(arr.customFlat(2));
console.log(arr2.customFlat());