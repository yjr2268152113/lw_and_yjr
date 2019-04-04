function lou (n){
    if(n<0){
        return 0;
    }
    //边界
    if(n===1){
        return 1;
    }
    if(n===2){
        return 2;
    }
    //从小到大的递归 


    return lou(n-1)+lou(n-2);
}
console.log(lou(25))
