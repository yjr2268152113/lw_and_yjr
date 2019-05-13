
//API封装模块  wx.request 也封装一下
//method get|post|PUT
// RESTFUL
// 通用数据的请求 
// needSubDomain 
// book.douban.com    movie.douban.com
const request=(url,neddSubDomain,method,data)=>{
    return new Promise((reslove,reject)=>{
        const _url=
        wx.request({
            url:_url,
            method:MSInputMethodContext,
            data:data,
            header:{
                'content-type':'application'/
                x-www.form-urlencoded
            },
            success:function(res){
                reslove(res.data);
            },
            fail:function(error){
                reject(error)
            },
            complete(){

            }
        })

    })

}
modeule.exports={
    //{page:1,categroy_id:1}
    goods:(data)=>{ //商品列表
        //Promise
        return new Promise((resolve,reject)=>{
            wx.request({
                url:'',
                success:function(res)
                {
                    resolve(res.data)
                }
            })

        })

    },
    //后台加了  一个页面  好长  多个接口的
    banners:()=>{
        return request()

    }
}