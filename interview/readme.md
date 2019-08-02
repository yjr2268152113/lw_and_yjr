
基于vue 2.0 +vue+vueRouter 全家桶实现方案来模仿 网易云webapp项目
css预编译工具使用sass，音乐滚动加载用的是berrterscore，全面采用ES6代码风格
- 解决了哪些问题
 - 图片懒加载  Vue-lazyload
 - 前后端分离
   node.js 使用NeteaseCloudMusicApi Proxy
   8080 + 3000
 - fastclick 
 - 设计store 
  songs index song
 - iconfont
 - eslint

 - 上班 vue项目 分析目录结构
  1. components/  g跟路由挂钩  工作的路口
  2. store/ 全局共享 分模块 了解关键状态
  3. common公共的组件 不用写
  4. api/  前后端的协作方式
  5. 