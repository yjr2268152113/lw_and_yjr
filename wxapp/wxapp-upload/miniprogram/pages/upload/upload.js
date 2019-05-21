// miniprogram/pages/upload/upload.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files:[
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  chooseImage(e){
    let that= this
    wx.chooseImage({
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res){
        that.setData({
          files:that.data.files.concat(res.tempFilePaths)
        })
        for(let i=0;i<res.tempFilePaths.length;i++){
          const filePath=res.tempFilePaths[i]
          let a=filePath.lastIndexOf('.')
          let b=filePath.lastIndexOf('.',filePath.length-7)
          let c=filePath.substring(b+1,a)
          const cloudPath=c+filePath.match(/\.[^]+?$/)
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success(res) {
            console.log('上传成功')
        
        }
      })

        }
     
   
  }
})
  },
  previewImage(e){
    console.log(e)
    wx.previewImage({
      current:e.currentTarget.id,
      urls:this.data.files
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})