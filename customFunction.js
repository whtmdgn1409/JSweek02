/// 1. filter

// original
// var filtered = [12, 5, 8, 130, 44].filter(value => value>=10);  

// custom
Array.prototype.customFilter = function(func) {
    var result = [];
    var j = 0;
    for(i = 0 ; i<this.length; i++){
        if(func(this[i]) == true) result[j++] = this[i];
    }
    return result; 
}

var filtered = [12, 5, 8, 130, 45].customFilter( value => value>10 );
console.log(filtered);



/// 2. every

//original
var ages = [32, 33, 16, 40];
// console.log(ages.every(age => age>=13));

//custom
Array.prototype.customEvery = function(func) {
    var result = []; 
    var cnt = 0;
    var len = this.length;
    for (i = 0; i<len; i++){
        if(func(this[i]) == true) { cnt ++; }
    }
    return (cnt == len ? true : false);
}
console.log(ages.customEvery( age => age>=13 ));


/// 3. some