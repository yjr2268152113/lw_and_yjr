// pages/collection/collection.js
const {
  getOpenid,
  getMarkedQuestionsByOpenid
} = require('../../api/nayAPI.js');
const shareFunc = getApp().globalData.shareFunc;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasInformation: false,
    askInformation: [],
    page: new Number(0)
  },
  loadMessages(page = this.data.page) {
    let that = this
    var askInformation = that.data.askInformation
    return new Promise((resolve, reject) => {
      try {
        getOpenid()
          .then((_openid) => {
            return new Promise((resolve, reject) => {
              try {
                resolve({
                  _openid,
                  page,
                  askInformation
                })
              } catch (err) {
                reject(err)
              }
            })
          })
          .then(getMarkedQuestionsByOpenid)
          .then((askInformation)=>{
            let oldpage = that.data.page
            that.setData({
              askInformation,
              hasInformation: true
            })
          })
      } catch (err) {
        reject(err)
      }
    })
  },
  next() {
    let that = this
    return new Promise((resolve, reject) => {
      try {
        let oldpage = that.data.page
        let page = new Number(1 + oldpage)
        that.setData({
          page
        })
        resolve(page)
      } catch (err) {
        reject(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      page: new Number(0)
    })
    this.loadMessages()
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
      hasInformation: false,
      askInformation: [],
      page: new Number(0)
    })
    this.loadMessages()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let that = this;
    that.next()
      .then(that.loadMessages)
  },

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