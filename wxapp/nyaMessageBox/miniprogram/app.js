//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'questionbox-54u46'
      })
    }

    this.globalData = {
      toOpenid: '',
      shareFunc: (toOpenid) => {
        return {
          title: '转发给好友',
          desc: '给我留言吧',
          path: '/pages/login/index?toOpenid=' + toOpenid
        }
      }
    }
  }
})
