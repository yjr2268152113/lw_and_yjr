const {
  getOpenid,
  addUser
} = require('../../api/nayAPI.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (options.scene != undefined) {
      let globalDataOpenid = decodeURIComponent(options.scene).split('%3D')[1];
      app.globalData.toOpenid = globalDataOpenid;
    } else if (options.toOpenid != undefined) {
      let globalDataOpenid = options.toOpenid;
      app.globalData.toOpenid = globalDataOpenid;
    }
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              wx.switchTab({
                url: '../index/index',
              })
            }
          })
        }
      }
    })
  },
  getUserInfo: function(e) {
    let _openid;
    let avatarUrl;
    let gender;
    let nickName;
    if (e.detail.userInfo) {
      getOpenid()
        .then(openid => {
          avatarUrl = e.detail.userInfo.avatarUrl
          gender = e.detail.userInfo.gender
          nickName = e.detail.userInfo.nickName
          _openid = openid
          addUser({
            avatarUrl,
            gender,
            nickName,
            _openid
          })
          .then(()=>{
            wx.switchTab({
              url: '../index/index'
            })
          })
        })
      //用户按了允许授权按钮
      //授权成功后，跳转进入小程序首页
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
  }
})