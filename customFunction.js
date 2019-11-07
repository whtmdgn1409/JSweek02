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
