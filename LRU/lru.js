// 不用每次都去硬盘里面找  在内存中
缓存 
var LRUCache=function(capacity){
    this.capacity=capacity;
    this.obj={};
    this.arr=[];
}
LRUCache.prototype.get=function(key){

}
LRUCache.prototype.set=function(key,value){
    if(this.obj[key]){
        this.obj[key]=value;//更新
        // 最近使用   数组的[0]
               //之前的删除
      
        var index=
        this.arr.indexOf(key);
        this.arr.splice(index,1);
        //开头添加
        this.arr.unshift(key);
    }
//    如果有key,返回


//    没有的话   两个可能 
//内存满了  arr.pop() 

//    存进去  arr
}