- json 格式 是标准的数据交换
- 前后端开发  /api  json 格式进行交流
- 全栈 fullstack 

- restful  一切皆资源
  暴露资源 
  - 设计良好的URL
  /posts
  /posts/:id 
  /comments
  /comments/:id
  /post/1/comments
 HTTP 动词
  GET  查询
  加一条评论  增加一个资源
  POST 新增  /comments
DELETE动词  /posts/2
修改   PUT / PATCH
PUT 把全新的所有的内容， 去替换掉旧的内容 全部
PATCH  只要传一个要更新的字段 ，局部
/comments/2   body   

- restful 考点
 认为一切皆资源 URL是唯一定位资源的符号
 它有一定的设计原则
 HTTP动词是web资源的状态转换动词


 操作       SQL方法     HTTP动词
CREATE      INSERT     POST
READ        SELECT    GET 
UPDATE      UPDATE    PUT/PATCH
DELETE      DELETE    DELETE
- 设计URL
