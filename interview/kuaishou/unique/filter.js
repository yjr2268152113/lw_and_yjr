function unique(arr){
    var res=arr.filter((item,index,self)=>{
        return self.indexOf(item)===index
    })
    return res
}
var array=[1,1,2,1]
console.log(unique(array))