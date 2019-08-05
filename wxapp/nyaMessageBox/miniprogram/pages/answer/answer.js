// miniprogram/pages/answer/answer.js
const db = wx.cloud.database()
const questions = db.collection('questions')
const userinfos = db.collection('userinfos')
var _id = ''
var _user = {}
const shareFunc = getApp().globalData.shareFunc;
const {
  getOpenid
} = require('../../api/nayAPI.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAnswer: false,
    question: {},
    isCollection: false,
    focus: false,
    addText: '',
    isReply: false,
    isSend: false,
    isChange: false,
    canReply: false,
    isFollowQ: false,
    isFollowA: false
  },
  toSend() {
    if (this.data.addText === '') {
      this.setData({
        isAnswer: false,
        isReply: false,
        isSend: false
      })
      wx.showToast({
        title: '亲，回复不能为空哦',
        image: '../../images/smile.png'
      })
    } else {
      questions
        .doc(_id)
        .update({
          data: {
            answer: this.data.addText.split(" ").join(""),
            answerDate: db.serverDate()
          }
        })
      this.setData({
        isSend: true,
        isAnswer: false,
        isChange: false,
        isReply: true
      })
      wx.showToast({
        title: '已发送',
      })
    }
  },
  toInput(e) {
    this.setData({
      addText: e.detail.value.split("").join(" "),
      isReply: true,
      isChange: true,
      isSend: false
    })
  },
  hideInput() {
    if (this.data.question.answer === '') {
      this.setData({
        isAnswer: false,
        isReply: false,
        isChange: false
      })
    } else {
      this.setData({
        isAnswer: false,
        isReply: true,
        isChange: false,
        isSend: true,
        addText: this.data.question.answer.split("").join(" ")
      })
    }
  },
  toAnswer() {
    this.setData({
      focus: true
    })
  },
  notCollection() {
    let that = this;
    let index = _user.mark.findIndex((e) => {
      if (e == _id) return e
    })
    _user.mark.splice(Number(index), 1)
    userinfos
      .doc(_user._id)
      .update({
        data: {
          mark: _user.mark
        }
      })
      .then(() => {
        wx.showToast({
          title: '已取消收藏',
          image: "../../images/false.png"
        })
        that.setData({
          isCollection: false
        })
      })
  },
  toCollection() {
    let that = this;
    _user.mark = [_id, ..._user.mark]
    userinfos
      .doc(_user._id)
      .update({
        data: {
          mark: _user.mark
        }
      })
      .then(() => {
        wx.showToast({
          title: '已收藏',
        })
        that.setData({
          isCollection: true
        })
      })
  },
  followQuestion(){
    let that = this;
    _user.followed = [that.data.question._openid, ..._user.followed]
    userinfos
      .doc(_user._id)
      .update({
        data: {
          followed: _user.followed
        }
      })
      .then(() => new Promise((resolve, reject)=>{
        try {
          userinfos
            .where({
              _openid: that.data.question._openid
            })
            .get()
            .then(res => {
              resolve(res.data[0].follower)
            })
        }
        catch(err) {
          reject(err)
        }
      }))
      .then((follower) => {
        wx.cloud.callFunction({
          name: 'updateFollowed',
          data: {
            _openid: that.data.question._openid,
            follower: [_user._openid, ...follower]
          }
        })
        .then(()=>{
          wx.showToast({
            title: '已关注',
          })
          that.setData({
            isFollowQ: true
          })
        })
      })
  },
  notFollowQuestion(){
    let that = this;
    let index = _user.followed.findIndex((e) => {
      if (e == that.data.question._openid) return e
    })
    _user.followed.splice(Number(index), 1)
    userinfos
      .doc(_user._id)
      .update({
        data: {
          followed: _user.followed
        }
      })
      .then(() => new Promise((resolve, reject) => {
        try {
          userinfos
            .where({
              _openid: that.data.question._openid
            })
            .get()
            .then(res => {
              let follower = res.data[0].follower
              let index = follower.findIndex((e) => {
                if (e == _user._openid) return e
              })
              follower.splice(Number(index), 1)
              resolve(follower)
            })
        }
        catch (err) {
          reject(err)
        }
      }))
      .then((follower) => {
        wx.cloud.callFunction({
          name: 'updateFollowed',
          data: {
            _openid: that.data.question._openid,
            follower
          }
        })
        .then(()=>{
          wx.showToast({
            title: '已取消关注',
            image: "../../images/false.png"
          })
          that.setData({
            isFollowQ: false
          })
        })
      })
  },
  followAnswer(){
    let that = this;
    _user.followed = [that.data.question.answer_openid, ..._user.followed]
    userinfos
      .doc(_user._id)
      .update({
        data: {
          followed: _user.followed
        }
      })
      .then(() => new Promise((resolve, reject) => {
        try {
          userinfos
            .where({
              _openid: that.data.question.answer_openid
            })
            .get()
            .then(res => {
              resolve(res.data[0].follower)
            })
        }
        catch (err) {
          reject(err)
        }
      }))
      .then((follower) => {
        wx.cloud.callFunction({
          name: 'updateFollowed',
          data: {
            _openid: that.data.question.answer_openid,
            follower: [_user._openid, ...follower]
          }
        })
          .then(() => {
            wx.showToast({
              title: '已关注',
            })
            that.setData({
              isFollowA: true
            })
          })
      })
  },
  notFollowAnswer(){
    let that = this;
    let index = _user.followed.findIndex((e) => {
      if (e == that.data.question.answer_openid) return e
    })
    _user.followed.splice(Number(index), 1)
    userinfos
      .doc(_user._id)
      .update({
        data: {
          followed: _user.followed
        }
      })
      .then(() => new Promise((resolve, reject) => {
        try {
          userinfos
            .where({
              _openid: that.data.question.answer_openid
            })
            .get()
            .then(res => {
              let follower = res.data[0].follower
              let index = follower.findIndex((e) => {
                if (e == _user._openid) return e
              })
              follower.splice(Number(index), 1)
              resolve(follower)
            })
        }
        catch (err) {
          reject(err)
        }
      }))
      .then((follower) => {
        wx.cloud.callFunction({
          name: 'updateFollowed',
          data: {
            _openid: that.data.question.answer_openid,
            follower
          }
        })
          .then(() => {
            wx.showToast({
              title: '已取消关注',
              image: "../../images/false.png"
            })
            that.setData({
              isFollowA: false
            })
          })
      })
  },
  toReply() {
    if (this.data.question.answer.length != 0) {
      wx.showToast({
        title: '修改你的回复',
        image: '../../images/smile.png'
      })
      this.setData({
        isSend: false
      })
    }
    this.setData({
      isAnswer: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    _id = options._id;
    questions
      .where({
        _id
      })
      .get()
      .then(res => {
        let question = res.data[0];
        question.question = question.question.split("").join(" ")
        question.questionDate = question.questionDate.toTimeString().substr(0, 8);
        question.answerTime = question.answerDate.toTimeString().substr(0, 5);
        question.answerDate = ('' + question.answerDate.getFullYear()).substr(2, 3) + ('-' + question.answerDate.getMonth()) + ('-' + question.answerDate.getDate());
        wx
          .cloud
          .callFunction({
            name: 'getOpenId'
          })
          .then(cloudRes => {
            if (cloudRes.result.openid == question.answer_openid) {
              this.setData({
                canReply: true
              })
            }
            userinfos
              .where({
                _openid: cloudRes.result.openid
              })
              .get()
              .then(res => {
                _user = res.data[0];
                if (res.data[0].followed.find((e) => {
                  if (e == question._openid) return e
                }) != undefined) {
                  that.setData({
                    isFollowQ: true
                  })
                }
                if (res.data[0].followed.find((e) => {
                  if (e == question.answer_openid) return e
                }) != undefined) {
                  that.setData({
                    isFollowA: true
                  })
                }
                if (res.data[0] != undefined) {
                  if (res.data[0].mark.find((e) => {
                      if (e == _id) return e
                    }) != undefined) {
                    that.setData({
                      isCollection: true,
                      question: question,
                      addText: question.answer.split("").join(" ")
                    })
                  } else {
                    that.setData({
                      question: question,
                      addText: question.answer.split("").join(" ")
                    })
                  }
                  userinfos
                    .where({
                      _openid: question._openid
                    })
                    .get()
                    .then(res => {
                      let question = that.data.question;
                      that.setData({
                        question: {
                          questionNickName: res.data[0].nickName,
                          questionImgUrl: res.data[0].avatarUrl,
                          ...question
                        }
                      })
                    })
                  userinfos
                    .where({
                      _openid: question.answer_openid
                    })
                    .get()
                    .then(res => {
                      let question = that.data.question;
                      that.setData({
                        question: {
                          answerNickName: res.data[0].nickName,
                          answerImgUrl: res.data[0].avatarUrl,
                          ...question
                        }
                      })
                    })
                  if (that.data.addText.length != 0) {
                    that.setData({
                      isReply: true,
                      isSend: true,
                      isChange: false,
                    })
                  }
                }
              })
          })
      })
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
    getOpenid()
      .then(_openid => {
        return shareFunc(_openid)
      })
  }
})