App({
  onLaunch: function () {
    var that=this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var openId = (wx.getStorageSync('openId'));
    if (openId) {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
          })
        }
      })
    } else {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              withCredentials: true,
              success: function (res_user) {
                console.log(res_user)
                wx.login({
                  success: function (res) {
                    // wx.request({
                    //   url: 'https://api.weixin.qq.com/sns/jscode2session',
                    //   data: {
                    //     js_code: res.code,
                    //   },
                    //   method: 'GET',
                    //   success: function (res) {
                    //     var openid = res.data.openid;//获取到的openid
                     
                    //   }
                    // })
                  }
                })
              }
            })
          }
        }
      })
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {

  },

})
