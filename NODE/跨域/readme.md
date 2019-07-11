## 跨域
 是浏览器的安全策略
 同源策略：
 同协议 域名 端口
 不同源 存在跨域
# CORS 
 规定了一组HTTP的头部字段作用是：
 允许哪些网站通过浏览器有访问的权限
 1. access-x
 2. cookie
 3. 浏览器会先以 OPTIONS请求方法 发起一个预检(preflight) 请求,
    获取一下允不允许当前的域请求，服务器允许之后才会发起正式的请求
## 代理

1. nginx

反向代理：http://localhost/9999/api
http://localhost/8888/api
不知道请求的是哪个服务器
正向代理：
google
A -> proxy->google.com

## iframe +postMessage
1. 前端页面 通过iframe 引入一个后端目录下面的html 
    iframe 不受同源策略的限制的
2. postMessage 用于在两个窗口传递数据
3. 前端页面 通过postMessage向后端目录下的html 传递接口所需要的请求参数
4. 后端页面 通过 postMessage 向前端页面 传递 接口结果


# iframe + window.name
iframe 共享 window.name  没有postMessage 
 只能借助中间的页面通知前端页面（需要获取数据的页面）
 window.parent.callback(window.names)
 
## jsonp
1. 定义一个回调
2. 将回调函数的名字  告诉后端  后端会返回  js
   回调（res)
3. script标签 加载过后 执行 返回内容

写一个jsonp的函数 ,以Promise的方式调用
jsonp(url)
.then(res=>{
    
})
 缺点:只能发起get请求
