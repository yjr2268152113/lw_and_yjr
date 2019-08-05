// miniprogram/pages/news/news.js
const {
  getOpenid,
  getQuestionsByQuestionOpenid,
  deleteQuestionById
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
  deleteQuestion(e) {
    let _id = this.data.askInformation[e.currentTarget.dataset.id]._id;
    deleteQuestionById(_id);
    let askInformation = this.data.askInformation;
    askInformation.splice(Number(e.currentTarget.dataset.id), 1)
    if (askInformation.length == 0) {
      this.setData({
        askInformation,
        hasInformation: false
      })
    } else {
      this.setData({
        askInformation
      })
    }
  },
  loadMessages(page = this.data.page) {
    let that = this
    var askInformation = []
    return new Promise((resolve, reject) => {
      getOpenid()
        .then((_openid) => {
          return new Promise((resolve, reject) => {
            try {
              resolve({
                _openid,
                page
              })
            } catch (err) {
              reject(err)
            }
          })
        })
        .then(getQuestionsByQuestionOpenid)
        .then(questions_data => {
          askInformation = [...that.data.askInformation, ...questions_data]
          that.setData({
            askInformation,
            hasInformation: true
          })
        })
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
    this.loadMessages();
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
    let page = new Number(0)
    this.setData({
      page,
      hasInformation: false,
      askInformation: []
    })
    this.loadMessages()
      .then(() => {
        wx.stopPullDownRefresh();
      })
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