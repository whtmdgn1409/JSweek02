/// 1.

// var filtered2 = [12, 5, 8, 130, 44].filter(value => value>=10);  
Array.prototype.customFilter = function(v) {
    var result = [];
    var j = 0;
    for(i = 0 ; i<this.length; i++){
        this[i] > v ? result[j++] = this[i] : null;
    }
    console.log(result);
    return result; 
}


var filtered = [12, 5, 8, 130, 45];
filtered.customFilter(13);
