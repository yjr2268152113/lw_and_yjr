- https
  http 不安全
  req(用户 proxy 浏览器) 传输过程
  res(从服务端返回)

1. 怕我们的内容被别人读 
2. 内容被篡改
3. 过期了不可以被仿造使用

- GET From  password  日志
 上网供应商等中间人，http传输是不安全的

 - https
   加密 
   对称加密
    加密加
  非对称加密
   公钥
   私钥

   先非对称  之后都是对称

   签证书

   - 去重

   - 垃圾回收 
    - js垃圾回收是自动的
    - 回收内存
      function  局部变量
      跨页面时  
      1. 可达性 做为评判的依据的
      显而易见 因为一些原因不可被删除
       - 全局变量  //不会销毁
       - 当前嵌套调用链上的其他函数的变量和参数
       
       这些值称作为根
      2. 如果引用或者引用链可以从根访问其他任何值，则认为该值可以访问

    let user={
      name:'a'
    }

    user 全局变量   =  引用式赋值对象
    name 基本属性  -》 字符串类型的josn
    user=null   触发一次垃圾回收
    let admin=user
         global
    user        admin