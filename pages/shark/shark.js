// pages/shark/shark.js
Page({

  isShow: false,
  /**
   * 页面的初始数据
   */
  data: {
    member: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
      if (!that.isShow) {
        return
      }
      console.log(e.x)
      console.log(e.y)
      console.log(e.z)
      if (e.x > 0.5 && e.y > 0.5) {
        wx.showToast({
          title: '摇一摇成功!',
          icon: 'success',
          duration: 2000
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.isShow = false;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})