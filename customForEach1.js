/*
    forEach > customForEach
*/

let arr1 =[1,2,3,4,5,6,7];

Array.prototype.customForEach=function(func){
    for(i=0;i<this.length;i++){
        func(this[i]);
    }
};

arr1.customForEach(nums=>console.log(nums));