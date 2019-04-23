LRU  缓存   最近最少使用原则
Least Recently Used
操作系统

node fs 硬盘，内存
内存金贵   
硬盘用不完
内存  是代码运行的空间   有限   2
存放变量  2个
第三个来了？ 

[]  内存    length 2
     原则最近最少使用

1   put(1,1)
2   put(2,2)
3   get(1)  返回1   1最近使用了   2最近最少使用？
4   put(3,3) 3进去了  2就要丢掉
5   get(2)拿不到
6   put(4,4) 4 3   1丢掉
7   get(1)   拿不到     返回-1
8    get(3)  3


- cache   LRUCache
get 
set
-  对象字面量有利于  get set 方法实现
-  最近最少使用,  JSON 搞不定
    数组可以  [0][length-1]
    在一头进行操作
    一般的工作交给数组   一半的工作交给对象字面量
    让他们成为LRUCache两个属性
