const cloud = require('wx-server-sdk')
const env = 'questionbox-54u46'
cloud.init()
const db = cloud.database({
  env
})

// 云函数入口函数
exports.main = async(event, context) => {
  let {
    _openid,
    follower
  } = event
  try {
    return await db.collection('userinfos')
      .where({
        _openid
      })
      .update({
        data: {
          follower
        }
      })
  } catch (e) {
    console.error(e)
  }
}