const {
  getOpenid,
  getNoticeByOpenid,
  getQuestionsByOpenidForOthers,
  sendQuestionAPI
} = require('../../api/nayAPI.js');
const app = getApp();
const shareFunc = getApp().globalData.shareFunc;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    focus: false,
    addText: '这个人很懒什么都没写',
    hasInformation: false,
    todisappear: false,
    askInformation: [],
    has_openid: true,
    userOpenId: '',
    newQuestion: '',
    page: new Number(0)
  },
  toAnswer(_id) {
    wx.navigateTo({
      url: '/pages/answer/answer?_id=' + _id,
    })
  },
  toAppear() {
    this.setData({
      todisappear: false
    })
  },
  toDisappear() {
    this.setData({
      todisappear: true
    })
  },
  sendQuestion(e) {
    let that = this;
    if (e.detail.value.input != '') {
      let question = e.detail.value.input
      let answer_openid = that.data.userOpenId
      sendQuestionAPI({ question, answer_openid})
        .then(() => {
          wx.showToast({
            title: '发送成功',
            icon: 'success',
            success: function(res) {
              that.setData({
                newQuestion: ''
              })
            }
          })
        })
    } else {
      wx.showToast({
        title: '问题不能为空',
        image: '../../images/false.png'
      })
    }
  },
  loadMessages(page = this.data.page) {
    let that = this
    var openid = 'ooUoR5f9XgP67FNXMhcwtA1z07NY'//app.globalData.toOpenid
    var addText = ''
    var askInformation = []
    if (openid != '') {
      return new Promise((resolve, reject) => {
        getNoticeByOpenid(openid)
          .then((notice) => {
            addText = notice
            return new Promise((resolve, reject) => {
              try {
                let _openid = openid
                that.setData({
                  addText,
                  userOpenId: openid,
                  has_openid: true
                })
                resolve({
                  _openid,
                  page
                })
              } catch (err) {
                reject(err)
              }
            })
          })
          .then(getQuestionsByOpenidForOthers)
          .then(questions_data => {
            askInformation = [...that.data.askInformation, ...questions_data]
            that.setData({
              askInformation,
              hasInformation: true
            })
          })
      })
    } else {
      that.setData({
        has_openid: false
      })
    }
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
    this.setData({
      page: new Number(0),
      isShow: false,
      focus: false,
      hasInformation: false,
      todisappear: false,
      askInformation: [],
      has_openid: true,
      userOpenId: '',
      newQuestion: ''
    })
    this.loadMessages()
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
      askInformation: [],
      has_openid: false
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
      .then(_openid=>{
        return shareFunc(_openid)
      })
  }
})