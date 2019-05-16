//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:['你是男的吗','2'],
    
  },
  
  onLoad: function () {
    
  },
  details(){
    wx.navigateTo({
      url:'../logs/logs'
    })
  }
})
