// pages/shark/shark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: "111"
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
    let member1 = ['曾晓铃', '谢明裔', '谭凤兰', '陈喜华', '余永辉', '伍子涛', '邱伟杰']
    function randomArrByOut(arr) {
      let result = [];
      let arrTemp = [...arr]; // splice会影响原数组，复制一个新的数组，防止影响原数组
      while (arrTemp.length) {
        let index = Math.floor(Math.random() * arrTemp.length);
        result.push(arrTemp[index]);
        arrTemp.splice(index, 1);
      }
      return result;
    }
    /**
     * 由于randomArrByOut随机的不太明显内部让他先随机五次显得明显
     */
    let randomMember = randomArrByOut(randomArrByOut(randomArrByOut(randomArrByOut(randomArrByOut(member1)))));
    wx.onAccelerometerChange(function (e) {
      console.log(e.x)
      console.log(e.y)
      console.log(e.z)
      console.log(randomMember)
      if (e.x > 0.5 && e.y > 0.5) {
        this.setData({
          member: randomMember
        })
        wx.showToast({
          title: '摇一摇成功',
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