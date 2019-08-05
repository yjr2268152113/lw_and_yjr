const {
  getOpenid,
  getNoticeByOpenid,
  getQuestionsByOpenid,
  updateNotice,
  deleteQuestionById
} = require('../../api/nayAPI.js');
const shareFunc = getApp().globalData.shareFunc;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    focus: false,
    addText: '',
    editting: false,
    hasInformation: false,
    todisappear: false,
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
  toClear() {
    this.setData({
      addText: ''
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
  addInputHide() {
    this.setData({
      addText: "即将跳转最近一次的编辑"
    })
    wx.showToast({
      title: '输入框为空的话，将保持您上次的编辑',
      duration: 2000,
      icon: "none"
    })
    wx.startPullDownRefresh({
      success: (res) => {
        this.loadMessages();
      }
    })
    this.setData({
      isShow: false,
      editting: false,
    })
  },
  addInput() {
    let that = this;
    if (!this.data.addText.trim()) {
      wx.showToast({
        title: '说点什么吧^_^',
        duration: 1000,
        icon: 'none'
      })
      return;
    }
    this.setData({
      isShow: false,
      focus: false,
      editting: false
    })
    updateNotice(that.data.addText)
  },
  setInput(e) {
    this.setData({
      addText: e.detail.value
    })

  },
  switchToInput() {
    wx.showToast({
      title: '公告栏字数限制35以内，更多心里的话放到留言箱里吧QAQ',
      duration: 2000,
      icon: 'none'
    })
    this.setData({
      isShow: true,
      editting: true,
      focus: true
    })
  },
  loadMessages(page = this.data.page) {
    let that = this
    var openid = ''
    var addText = ''
    var askInformation = []
    return new Promise((resolve, reject) => {
      getOpenid()
        .then((_openid) => {
          openid = _openid
          return new Promise((resolve, reject) => {
            try {
              resolve(openid)
            } catch (err) {
              reject(err)
            }
          })
        })
        .then(getNoticeByOpenid)
        .then((notice) => {
          addText = notice
          that.setData({
            addText
          })
          return new Promise((resolve, reject) => {
            try {
              let _openid = openid
              resolve({
                _openid,
                page
              })
            } catch (err) {
              reject(err)
            }
          })
        })
        .then(getQuestionsByOpenid)
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
      addText: '',
      editting: false,
      hasInformation: false,
      todisappear: false,
      askInformation: []
    })
    this.loadMessages();
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