/* FILTER*/
Array.prototype.customFilter = function(func){
    let newArr=new Array();
    for(let i=0;i<this.length;i++){
        if(func(this[i])==true) newArr.push(this[i]);
    }
    return newArr; // 배열 반환
};

/* EVERY */
Array.prototype.customEvery=function(func){
    for(let i=0;i<this.length;i++){
        if(func(this[i])==false) return false;
        else if(i==this.length-1) return true;
    }
};

/* SOME */
Array.prototype.customSome=function(func){
    for(let i=0;i<this.length;i++){
        if(func(this[i])==true) return true;
    }
    return false;
};

/* FOREACH */
Array.prototype.customForEach=function(func){
    for(let i=0;i<this.length;i++){
        func(this[i]);
    }
    return 0;
};

/* MAP */
Array.prototype.customMap = function(func){
    let newArr=new Array();
    for(let i=0;i<this.length;i++){
        newArr.push(func(this[i]));
    }
    return newArr; // 배열 반환
};

/* REDUCE */
Array.prototype.customReduce = function(func,first){
    if(first==undefined) first=0;
    let total = first;
    for(let i=0;i<this.length;i++){
        total=func(total,this[i]);
    }
    return total; // 배열 반환
};


