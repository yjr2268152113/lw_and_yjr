// function Person(name){
//     this.name=name
//     return{}
// }
// let p=new Person('ND')
//构造函数不需要返回值的，使用NEW来创建对象时，如果return 的是非对象会忽略返回值
//反之 则返回该对象 若return null也会忽略返回值
// console.log(p)
//p.__proto__=Person.prototype
//Person.__proto__=Function.peototype
//实例的__proto__ 等于其构造函数的prototype
// var foo={},
//  F=function(){}
//  Object.prototype.a='A'
//  Function.prototype.b='B'
//  console.log(foo.a)
//  console.log(foo.b)
//  console.log(F.a)
//  console.log(F.b)
//  function Person(name){
//      this.name=name
//  }
//  function Student(){

//  }
//  Student.prototype=Person.prototype
//  Student.prototype.constructor=Student
//  let s=new Student('nd')
//  console.log(s instanceof Person)
//  console.log(s)
//  for(let  i=0;i<10;i++){
//       setTimeout(() => {
//          console.log(i)
//      }, 0);
//  }
//  for(var i=0;i<10;i++){
//   (
//       function(i){
//         setTimeout(() => {
//             console.log(i)
//         }, 0);
//       } )(i)
// }
 //let 每次 循环会生成一个封闭的作用域 和setTimeoout 绑定
 // var 每次循环  会覆盖掉上一次的作用域
Array.prototype.method=function(){
    console.log('nd')
}
 var myArray=[1,2,3,4]
 myArray.name='nd'
 for(let index of myArray){
     console.log(index)
 }
 // for in 
 //1. index 索引为字符串型的数字，不能进行几何运算
 //2. 遍历顺序 有可能不是按照实际数组的内部顺序进行的
 //3. 使用for in 会遍历数组所有可枚举属性 包括原型链 所以for in 更适合遍历对象

 // for of 
// for in 遍历的是数组的索引，for of遍历的是数组的元素
//for of 遍历的只是数组内的元素 不包括数组原型属性和索引


let garr=[1,2,[3,4],5,[2,7,[3,9]]]  //1,2,3,4,5,2,7,3,9
function outputArr(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(outputArr(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
console.log(outputArr(garr))
function  outputArr1(arr){
    return arr.reduce(function(pre,item){
        return pre.concat(Array.isArray(item)?outputArr(item):item)
    },[])
}
console.log(outputArr1(garr))