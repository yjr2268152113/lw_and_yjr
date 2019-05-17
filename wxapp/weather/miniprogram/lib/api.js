const QQ_MAP_KEY='LSPBZ-2FL3X-RUF4C-ZY5VE-FQ5DF-OVB3Y';
wx.cloud.init({
    env:'yjr-6c55t'  //环境变量
})
const db=wx.cloud.database()
//添加心情
export const addEmotion=(openid,emotion)=>{
    return db.collection('diary').add({
        data:{openid,
        emotion,
        tsModified:Date.now()}
    })
}
//获取位置
export const geocoder=(lat,lon,success=()=>{},fail=()=>{})=>{
    return wx.request({
        url:'https://apis.map.qq.com/ws/geocoder/v1/',
        data:{
            location:`${lat},${lon}`,
            key:QQ_MAP_KEY,
            get_poi:0
        },
        success,
        fail
    })
}
//获取天气
 export const getWeather=(lat,lon)=>{
     return wx.cloud.callFunction({
         name:'he-weather',
         data:{
             lat,
             lon
         }
     })
 }