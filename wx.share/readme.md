保持传统的 MVC后端开发

MVVM 
model  Page{{data:{}}}
view  Template wxml
VM {{}}  wx:for


MVC  Model  数据库
V  View  静态页面
C  Controller  控制器

web HTTP服务器

端口 ？ 8080
Mysql   3306
webServer  80

用户   Request 通过IP+端口
web Server Response

http
.createServer(function(request,response){
    request  用户 N  
    response 

})
.listen(8080)