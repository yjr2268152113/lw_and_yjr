// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'questionbox-54u46'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async(event, context) => {
  let {
    _id
  } = event
  try {
    return await db.collection('questions').where({
      _id
    }).remove()
  } catch (e) {
    console.error(e)
  }
}