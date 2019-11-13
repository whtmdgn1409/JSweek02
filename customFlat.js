/*
    flat>customFlat
 */

//중첩배열 펼치기,배열 구멍제거

let arr1 =[1,[2,3],4,,5,6,7];


Array.prototype.customFlat =function() {
    for(i=0;i<this.length;i++) {
        //배열구멍 제거
        if (this[i] !== 'undefined') {
            this.pop(i);
        }
    }
    console.log(this);
    for(i=0;i<this.length;i++){
        //배열 펼치기
        if(typeof this[i]=='object'){
            let arr2=new Array();
            arr2 = this[i];
            console.log(arr2);
            for(k=0;k<arr2.length;k++) {
                this.pop(i);
                this.splice(i,0,arr2[k]);
            }
        }
    }

};

arr1.customFlat();
console.log(arr1);
