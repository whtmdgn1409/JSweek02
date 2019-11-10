function assert(expect, equal){
    if((typeof expect())=="object"){
        let res= expect();
        for(let i=0;i<res.length;i++){
            if(res[i]!=equal[i]){
                return console.log("실패");
            }
        } return console.log("성공");
    }
    if(expect()!=equal) return console.log('실패');
    console.log("성공");
}

assert(function(){
    return 1+0;
},2);

assert(function(){
    return [1,0,0];
},[1,0,0]);