var _ = require('lodash');
var data= require('../data.js');
/////// make lists ///////
var idList = new Array();
var titleList = new Array();
var yearList = new Array();
var ratingList = new Array();

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
idList=_.pluck(data,'id');
console.log(idList);
