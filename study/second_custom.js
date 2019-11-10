var data= require('../data.js');
/////// make lists ///////
var idList = new Array();
var titleList = new Array();
var yearList = new Array();
var ratingList = new Array();

// for(let i=0;i<data.length;i++){
//     ids.push(data[i]['id']);
//     titles.push(data[i]['title']);
//     years.push(data[i]['year']);
//     ratings.push(data[i]['rating']);
// }
////////////////////////////////////////
//////// using custom function /////////
Array.prototype.customMap = function(func){
    let newArr=new Array();
    for(let i=0;i<this.length;i++){
        newArr.push(func(this[i]));
    }
    return newArr; // 배열 반환
};
Array.prototype.customFilter = function(func){
    let newArr=new Array();
    for(let i=0;i<this.length;i++){
        if(func(this[i])==true) newArr.push(this[i]);
    }
    return newArr; // 배열 반환
};
Array.prototype.customForEach=function(func){
    for(let i=0;i<this.length;i++){
        func(this[i]);
    }
    return 0;
};
Array.prototype.customReduce = function(func,first){
    if(first==undefined) first=0;
    let total = first;
    for(let i=0;i<this.length;i++){
        total=func(total,this[i]);
    }
    return total; // 배열 반환
};
/* NO.1 */
function takeID(value){
    return value['id'];
}
function takeTitle(value){
    return value['title'];
}
function takeYear(value){
    return value['year'];
}
function takeRating(value){
    return value['rating'];
}
idList=data.customMap(takeID);
titleList=data.customMap(takeTitle);
yearList=data.customMap(takeYear);
ratingList=data.customMap(takeRating);
/* NO.2 */
function over5(value){
    return value>=5;
}
var star5 = ratingList.customFilter(over5);
console.log(star5);
/* NO.3 */
function takeGenre(value){
    return value['genres'];
}
var genreLists = data.customFilter(takeGenre);