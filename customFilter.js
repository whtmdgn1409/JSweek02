/*
    filter > customFilter
*/
let words = ['apple','banana','cake','doughnut'];

Array.prototype.customFilter = function(func) {
    let arr =new Array();
    for(i=0;i<this.length;i++){
        if(func(this[i])){
            arr.unshift(this[i]);
        }
    }
    return arr;
};
console.log(words.customFilter(word => word.length>5));