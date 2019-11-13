/*
    reduce > customReduce
 */

let array1=[1,2,3,4,5,6,7];
Array.prototype.customeReduce=function(func,i=0){
    let var1=0;
    for(i;i<this.length;i++){
        var1 = arguments[1]+arguments[0]
    }
    return var1;
};

//array1.customeReduce(1,2,0);
