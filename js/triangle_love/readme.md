三角恋
构造函数  Constructor
prototype 原型 
实例 instance


js没有类只有对象  都是通过原型来拿到的
通过构造函数Person 生成了person这个实例
同时我们在PERSON的原型 Person.prototype定义了getName
构造函数运行的的new person()  this->新的实例   空对象Person{}.name
实例怎么拿到原型对象的方法或属性？
1.任何对象都有_photo_私有属性  这个对象的出处在哪？
实例化和类之间没有血缘关系 
2.构造函数有prototype属性
3.原型对象上有constructor属性指向构造函数


js 面向对象基于原型的
 原型链