对es6 的理解
  es6 相对于es5  ECMAScript 的第六次修订
  ES2015 随着 babel webpack 构建工具的成熟

  es6 已经成为 js编程 的事实标准，
  我认为es6 比 es6更加简洁，提高了开发效率，让js 代码更优雅

  - 新增的特性 
    let 和const  常量声明  具有var 没有的块级作用域，
    比如循环事件监听时闭包就不需要了，让代码更好理解 
    var 有变量提升 的能力， let const 不会到顶级对象去 ，
    使用的变量或常量升级
  - 箭头函数
    简化了函数的表达形式  
    1. 不用function 关键字 ()=>{}
    2. 只有一个参数 () 也可以省
    3. 代码直接返回值  {}也可以省
    4.  有效的规避了this 丢失的问题  指向上一级
  - 模板字符串
    增强版的字符串 用``云括号 它的多行表达式，
    特别适合react jsx template的书写
    dom 或html模板的构建更加优雅

  - 解构赋值 
    可解，spread可合 reset从对象或数组中提取值 对变量进行赋值，提高开发的效率
  - for of 循环
     类数组 以及字符串都可以遍历
  - SET  es6 新增的数据结构 类似数组，唯一的，没有重复的值
  - import export es6 的模块化  es6原生支持的modle，将js代码分割成不同的小块独立开发，一个文件一个类，一个独立的模块 比容 api utils
  - ... 展开运算符   
   方便对数组进行展开
  -  es6 终于支持原生的class关键字  js有了传统面向对象的写法 extends 只是语法堂，
  底层还是基于原型的面向对象

  - Promise 为js提供了异步解决方案, 规避了回调地狱 （.then)
   代码的书写和执行是一样的
  - 更棒的异步解决方案 es7 的async await
    koa  基于 async await 快速取代了 express的江湖地位
  - vue react 响应式编程 依赖的proxy defineProperty  监听对象的改变 做一些事情
  -  es6 提供的数据的类型 symbol
