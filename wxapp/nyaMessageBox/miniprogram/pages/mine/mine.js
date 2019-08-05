// pages/mine/mine.js
const {
  getOpenid
} = require('../../api/nayAPI.js');
const shareFunc = getApp().globalData.shareFunc;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: '',
    nickname: '',
    orders: '',
    hasAddress: false,
    address: {},
    modalHidden:true,
    meImg: '../../images/loading.png',
    backgroundImage: '../../images/wodetu.png',
    loadStatus: '生成二维码中，请稍等...'
  },
  my(){
    let that = this;
    let weixin = wx;
    wx
      .cloud
      .callFunction({
        name: 'getMe'
      })
      .then(res => {
        const img = res.result.buffer;
        weixin.getFileSystemManager().writeFile({
          filePath: `${wx.env.USER_DATA_PATH}/meimg.jpg`,
          data: img,
          success(fileRes){
            that.setData({
              meImg: `${wx.env.USER_DATA_PATH}/meimg.jpg`,
              loadStatus: '我的名片'
            })
          },
          fail(err){
            console.log(err);
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
    this.setData({
      modalHidden:false
    })
  },
  modalConfirm() {
    this.setData({
      modalHidden: true
    })
  },
  modalCandel() {
    this.setData({
      modalHidden: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.getUserInfo({
      success: (res) => {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })

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
    getOpenid()
      .then(_openid => {
        return shareFunc(_openid)
      })
  }
})