/*
    map > customMap
*/

let arr1 = [1,2,3,4,5,6,7];

Array.prototype.customMap =function(func){
    let arr=new Array();
    for(i=0;i<this.length;i++){
        arr.push(func(this[i]));
    }
    return arr;
};

console.log(arr1.customMap(nums => nums*2));
