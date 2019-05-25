npm run script里的  各种工作流脚本
一定要在根目录
 1. dev 开发时运行大的脚本
 2. start  启动服务器的脚本
 类似 live server
 3. build 开发完成后  一键 build  生成上线文件
  压缩过后的
  webpack bundle打包工具  一切皆可打包
  1. webpack src/index.js  dist/main.js  默认
  2. webpack-cli 命令行工具
  3. wenpack-dev-server 运行webpack编译的同时,启动8080端口
  web-server 


- html template
1. css 
2. js

resolve 里 extensions加后缀
module 加 rules:[
    规则
    js->babel-loader->preset-env
    css->style-loader,stylus,css-loader->stylus,stylus-loader
]

- 一切皆可打包  打包运行成js
生成的文件  最好js  css文件  http请求
现在浏览器并发多个请求
拆成少数几个文件  这是必须做的

- 样式的抽离

