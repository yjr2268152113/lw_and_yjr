##  
以前 async node   现在 concurrent mode
目的 让react整体渲染有一个优先级的排比
1. js是单线程
2. 浏览器  多线程
   1. UI  渲染线程 
   2. js 解析
   3. http 
3. js线程和UI是互斥的  不能同时工作 原因 js可以操作dom
4. 卡顿的产生  js执行占据了很大的空间  导致UI得不到响应s