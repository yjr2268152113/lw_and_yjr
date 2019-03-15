// 函数表达式
const hongbao=(total,num)=>{
    const arr=[];  //待分配金额的数组
    let restAmount=total,
    restNum=num;
    for(let i=0;i<num-1;i++){

        let amount=parseFloat(Math.random()*((restAmount/restNum)*2-0)+0).toFixed(2);
        restAmount-=amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));

    return arr;
    


}
console.log(hongbao(20,40));