
无状态

## cookie

本地存储
怎么来：
1. js document.cookie  可读可写
2. 服务端 通过Set-Cookie  响应头设置  cookie




#内容：
name:   
value:   
path: cookie 在那个路径下生效  
/所有路径   
/user  user 以及user下面的  
/user/abc    user/abc user/abc下面的
domain:
httpOnly:  true/false 如果设置为true, 就不能通过JS 获取cookie的值
maxAge: 在几秒后cookie  被删除   koa:ms      js:s
secure:  安全  只会在https协议下传输

#作用范围：
domain+path
在什么域名什么路径下面生效
浏览器检查浏览器的cookie 会发送给服务端的
而且  http 传输报文的大小
放在  cookie请求头里面发送

用途:
状态管理 t
 用户个性化设置  f 
 规定死  几项内容

#session
会话    靠后台语言自己实现的
很多的用户  产生很多的session
userId
 sessionId 用户会话的时候 通过自己的session 查询自己的状态
 cookie: sessionId=id
