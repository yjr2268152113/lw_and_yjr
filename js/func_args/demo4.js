function sum(a=err('第一个参数为空'),b=err('第二个参数为空')){
    return a+b
}
function err(msg){
    throw new Error(msg)
}
console.log(1,2)   //3
console.log(undefined,10)   //报错  第一个参数为空
console.log(sum(10)) // 报错  第二个参数为空
// 不允许改写函数体
