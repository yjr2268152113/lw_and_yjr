const getOpenid = () => {
  return new Promise((resolve, reject) => {
    try {
      wx
        .cloud
        .callFunction({
          name: 'getOpenId'
        })
        .then(cloudRes => {
          resolve(cloudRes.result.openid)
        })
    } catch (err) {
      reject(err)
    }
  })
}

const getNoticeByOpenid = (_openid) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  let addText = '';
  return new Promise((resolve, reject) => {
    try {
      userinfos
        .where({
          _openid
        })
        .get()
        .then(res => {
          addText = res.data[0].notice;
          resolve(addText);
        })
        .catch((e) => {
          reject(e)
        })
    } catch (err) {
      reject(err)
    }
  })
}

const getQuestionsByOpenid = ({
  _openid,
  page
}) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  const questions = db.collection('questions');
  const getQuestionUserInfo = (questions_data, i) => {
    return new Promise((resolve, reject) => {
      try {
        if (i < questions_data.length) {
          userinfos
            .where({
              _openid: questions_data[i]._openid
            })
            .get()
            .then(function(userinfo_res) {
              questions_data[i].imgUrl = userinfo_res.data[0].avatarUrl;
              questions_data[i].nickName = userinfo_res.data[0].nickName;
              resolve(getQuestionUserInfo(questions_data, ++i));
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(questions_data);
      } catch (err) {
        reject(err);
      }
    })
  }
  return new Promise((resolve, reject) => {
    try {
      questions
        .orderBy('questionDate', 'desc')
        .where({
          answer_openid: _openid
        })
        .skip(new Number(page * 10))
        .limit(new Number(10))
        .get()
        .then(res => {
          return new Promise((resolve, reject) => {
            if (res.data.length != 0) {
              let questions_data = res.data.map(item => {
                item.questionDate = (+item.questionDate.getFullYear()) + ('-' + item.questionDate.getMonth()) + ('-' + item.questionDate.getDate())
                return item;
              });
              resolve(getQuestionUserInfo(questions_data, 0));
            } else {
              reject('还没人留言哦');
            }
          })
        })
        .then(questions_data => {
          resolve(questions_data);
        })
        .catch(e => {
          reject(e)
        })
    } catch (err) {
      reject(err)
    }
  })

}

const updateNotice = (addText) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  wx
    .cloud
    .callFunction({
      name: 'getOpenId'
    })
    .then(cloudRes => {
      userinfos
        .where({
          _openid: cloudRes.result.openid
        })
        .get()
        .then(res => {
          return new Promise((resolve, reject) => {
            try {
              let _id = res.data[0]._id
              resolve(_id);
            } catch (err) {
              reject(err);
            }
          })
        })
        .then(_id => {
          userinfos
            .doc(_id)
            .update({
              data: {
                notice: addText
              }
            })
        })
        .catch(e => {})
    })
}

const deleteQuestionById = (_id) => {
  const db = wx.cloud.database();
  const questions = db.collection('questions');
  wx.cloud.callFunction({
    name: 'deleteQuestionById',
    data: {
      _id
    }
  })
}

const getQuestionsByOpenidForOthers = ({
  _openid,
  page
}) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  const questions = db.collection('questions');
  const getQuestionUserInfo = (questions_data, i) => {
    return new Promise((resolve, reject) => {
      try {
        if (i < questions_data.length) {
          userinfos
            .where({
              _openid: questions_data[i]._openid
            })
            .get()
            .then(function(userinfo_res) {
              questions_data[i].imgUrl = userinfo_res.data[0].avatarUrl;
              questions_data[i].nickName = userinfo_res.data[0].nickName;
              resolve(getQuestionUserInfo(questions_data, ++i));
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(questions_data);
      } catch (err) {
        reject(err);
      }
    })
  }
  return new Promise((resolve, reject) => {
    try {
      questions
        .orderBy('answerDate', 'desc')
        .where({
          answer_openid: _openid,
          answer: db.command.neq('')
        })
        .skip(new Number(page * 10))
        .limit(new Number(10))
        .get()
        .then(res => {
          return new Promise((resolve, reject) => {
            if (res.data.length != 0) {
              let questions_data = res.data.map(item => {
                item.questionDate = (+item.questionDate.getFullYear()) + ('-' + item.questionDate.getMonth()) + ('-' + item.questionDate.getDate())
                return item;
              });
              resolve(getQuestionUserInfo(questions_data, 0));
            } else {
              reject('还没人留言哦');
            }
          })
        })
        .then(questions_data => {
          resolve(questions_data);
        })
        .catch(e => {
          reject(e)
        })
    } catch (err) {
      reject(err)
    }
  })
}

const sendQuestionAPI = ({
  question,
  answer_openid
}) => {
  const db = wx.cloud.database();
  const questions = db.collection('questions');
  return questions
    .add({
      data: {
        question,
        answer: "",
        answer_openid,
        questionDate: db.serverDate(),
        answerDate: db.serverDate()
      }
    })
}

const addUser = ({
  avatarUrl,
  gender,
  nickName,
  _openid
}) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  return new Promise((resolve, reject) => {
    try {
      userinfos.where({
        _openid
      }).get().then(res => {
        if (res.data.length === 0) {
          userinfos
            .add({
              data: {
                avatarUrl,
                gender,
                nickName,
                notice: "这个人很懒，什么都没留下",
                followed: [],
                follower: [],
                mark: [],
                score: 0
              }
            })
            .then(() => {
              resolve('OK')
            })
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}

const getMarkedQuestionsByOpenid = ({
  _openid,
  page,
  askInformation
}) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  const questions = db.collection('questions');
  const getQuestionUserInfo = (questions_data, i) => {
    return new Promise((resolve, reject) => {
      try {
        if (i < questions_data.length) {
          userinfos
            .where({
              _openid: questions_data[i]._openid
            })
            .get()
            .then(function(userinfo_res) {
              questions_data[i].imgUrl = userinfo_res.data[0].avatarUrl;
              questions_data[i].nickName = userinfo_res.data[0].nickName;
              resolve(getQuestionUserInfo(questions_data, ++i));
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(questions_data);
      } catch (err) {
        reject(err);
      }
    })
  }
  const getQuestionsByIds = (mark, questionInformations, i, times) => {
    return new Promise((resolve, reject) => {
      try {
        if (i < mark.length && times < 10) {
          questions
            .doc(mark[i])
            .get()
            .then(function(res) {
                resolve(getQuestionsByIds(mark, [...questionInformations, res.data], ++i, ++times));
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(questionInformations);
      } catch (err) {
        reject(err);
      }
    })
  }
  var mark = []
  var questionInformations = [...askInformation]
  return new Promise((resolve, reject) => {
    try {
      userinfos
        .where({
          _openid
        })
        .get()
        .then((res) => {
          mark = res.data[0].mark
          return new Promise((resolve, reject) => {
            try {
              let times = 0
              getQuestionsByIds(mark, questionInformations, new Number(page * 10), times)
                .then((questionInformations) => {
                  resolve(questionInformations);
                })
            } catch (err) {
              reject(err)
            }
          })
        })
        .then(res => {
          return new Promise((resolve, reject) => {
            if (res.length != 0) {
              let questions_data = res.map(item => {
                if (typeof(item.questionDate) != 'string') {
                  item.questionDate = (+item.questionDate.getFullYear()) + ('-' + item.questionDate.getMonth()) + ('-' + item.questionDate.getDate())
                }
                return item;
              });
              getQuestionUserInfo(questions_data, new Number(page * 10))
                .then(questions_data => {
                  resolve(questions_data);
                })
            } else {
              reject('还没收藏哦');
            }
          })
        })
        .then(questions_data => {
          resolve(questions_data);
        })
        .catch(e => {
          reject(e)
        })
    } catch (err) {
      reject(err)
    }
  })
}

const getQuestionsByQuestionOpenid = ({
  _openid,
  page
}) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  const questions = db.collection('questions');
  const getQuestionUserInfo = (questions_data, i) => {
    return new Promise((resolve, reject) => {
      try {
        if (i < questions_data.length) {
          userinfos
            .where({
              _openid: questions_data[i]._openid
            })
            .get()
            .then(function (userinfo_res) {
              questions_data[i].imgUrl = userinfo_res.data[0].avatarUrl;
              questions_data[i].nickName = userinfo_res.data[0].nickName;
              resolve(getQuestionUserInfo(questions_data, ++i));
            })
            .catch(e => {
              reject(e)
            })
        } else
          resolve(questions_data);
      } catch (err) {
        reject(err);
      }
    })
  }
  return new Promise((resolve, reject) => {
    try {
      questions
        .orderBy('questionDate', 'desc')
        .where({
          _openid
        })
        .skip(new Number(page * 10))
        .limit(new Number(10))
        .get()
        .then(res => {
          return new Promise((resolve, reject) => {
            if (res.data.length != 0) {
              let questions_data = res.data.map(item => {
                item.questionDate = (+item.questionDate.getFullYear()) + ('-' + item.questionDate.getMonth()) + ('-' + item.questionDate.getDate())
                return item;
              });
              resolve(getQuestionUserInfo(questions_data, 0));
            } else {
              reject('还没人留言哦');
            }
          })
        })
        .then(questions_data => {
          resolve(questions_data);
        })
        .catch(e => {
          reject(e)
        })
    } catch (err) {
      reject(err)
    }
  })

}

const getUserByOpenid = (_openid) => {
  const db = wx.cloud.database();
  const userinfos = db.collection('userinfos');
  return new Promise((resolve, reject) => {
    try {
      userinfos
        .where({
          _openid
        })
        .get()
        .then((res) => {
          resolve(res.data[0])
        })
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  getOpenid,
  getNoticeByOpenid,
  getQuestionsByOpenid,
  updateNotice,
  deleteQuestionById,
  getQuestionsByOpenidForOthers,
  sendQuestionAPI,
  addUser,
  getMarkedQuestionsByOpenid,
  getQuestionsByQuestionOpenid,
  getUserByOpenid
}