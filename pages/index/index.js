//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  onLoad: function () {
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotoHammerOfFortune: function (e) {
    wx.navigateTo({
      url: '/pages/hammer/hammer'
    })
  },
  gotoSharkOfFortune: function (e) {
    wx.navigateTo({
      url: '/pages/shark/shark'
    })
  },
  gotoOneOfFortune: function (e) {
    wx.navigateTo({
      url: '/pages/one/one'
    })
  },
  gotoKingOfFortune: function (e) {
    wx.navigateTo({
      url: '/pages/king/king'
    })
  },
})