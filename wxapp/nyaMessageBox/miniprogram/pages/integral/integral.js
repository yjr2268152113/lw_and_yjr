// pages/integral/integral.js
const db = wx.cloud.database();
const questions = db.collection('questions');
const shareFunc = getApp().globalData.shareFunc;
const {
  getOpenid
} = require('../../api/nayAPI.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    askscore: 0,
    questionscore: 0,
    data: false
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
    let that = this;
    wx
      .cloud
      .callFunction({
        name: 'getOpenId'
      })
      .then(cloudRes => new Promise((resolve, reject) => {
        try {
          resolve(cloudRes.result.openid);
        } catch (err) {
          reject(err);
        }
      }))
      .then((_openid) => new Promise((resolve, reject) => {
        try {
          let askscore = 0;
          let questionscore = 0;
          questions
            .where({
              _openid
            })
            .count()
            .then(res => {
              askscore += (res.total) * 10;
              questions
                .where({
                  answer_openid: _openid,
                  answer: db.command.neq('')
                })
                .count()
                .then(res => {
                  questionscore += (res.total) * 10;
                  resolve({
                    questionscore,
                    askscore
                  })
                })
            })
        } catch (err) {
          reject(err)
        }
      }))
      .then(({
        questionscore,
        askscore
      }) => {
        that.setData({
          askscore,
          questionscore
        });
        that.addscore();
      })
  },
  addscore() {
    let that = this;
    if (that.data.askscore > 0 || that.data.questionscore > 0) {
      that.data.score = that.data.askscore + that.data.questionscore
      that.setData({
        score: that.data.score,
        data: true
      })
    }
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
    getOpenid()
      .then(_openid => {
        return shareFunc(_openid)
      })
  }
})