function customFilter(arr, filterFunction){
  var newArr = new Array();
  for(var i=0; i < arr.length; i++){
    if(filterFunction(arr[i])){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

function filter(value) {
  if(value >= 10 ) return true;
  else return false;
}

var arr=[2,3,14,45,56];
customFilter(arr,filter);