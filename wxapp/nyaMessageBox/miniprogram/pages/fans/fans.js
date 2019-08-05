const {
  getOpenid,
  getUserByOpenid
} = require('../../api/nayAPI.js');
const app = getApp();
const shareFunc = getApp().globalData.shareFunc;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: [],
    hasInfomation: false
  },
  getAllUser(follower, i) {
    let that = this
    return new Promise((resolve, reject) => {
      try {
        if (i < follower.length) {
          getUserByOpenid(follower[i])
            .then(_user => {
              let user = [...that.data.user, _user]
              that.setData({
                user
              })
              resolve(that.getAllUser(follower, ++i))
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(follower);
      } catch (err) {
        reject(err);
      }
    })
  },
  loadMessage() {
    let that = this
    getOpenid()
      .then(getUserByOpenid)
      .then(({
        follower
      }) => {
        that.getAllUser(follower, 0)
      })
      .then(() => {
        that.setData({
          hasInfomation: true
        })
      })
  },
  switchTo(e) {
    let _openid = e.currentTarget.dataset.openid
    app.globalData.toOpenid = _openid
    wx.switchTab({
      url: '../others/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadMessage()
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
    this.setData({
      user: [],
      hasInfomation: false
    })
    this.loadMessage()
      .then(() => {
        wx.stopPullDownRefresh();
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    getOpenid()
      .then(_openid => {
        return shareFunc(_openid)
      })
  }
})