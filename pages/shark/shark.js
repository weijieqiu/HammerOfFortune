// pages/shark/shark.js
Page({

  isShow: false,
  /**
   * 页面的初始数据
   */
  data: {
    member: "",
    isShark: false,
    storageData: []
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
    var that = this;
    wx.getStorage({
      key: 'user',
      success(res) {
        console.log(res.data)
        let newStorageData = res.data;
        console.log(newStorageData)
        that.setData({
          storageData: newStorageData,
        })
        console.log(that.data.storageData)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that = this;
    wx.getStorage({
      key: 'user',
      success(res) {
        let newStorageData = res.data;
        that.setData({
          storageData: newStorageData,
        })
      }
    })
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
      if (!that.isShow) {
        return
      }
      console.log(e.x)
      console.log(e.y)
      console.log(e.z)
      if (e.x > 0.3 && e.y > 0.3 || e.y > 0.3 &&  e.z > 0.3) {
        wx.showToast({
          title: '摇一摇成功!',
          icon: 'success',
          duration: 1000,
          success() {
            wx.vibrateLong({
              success: (res) => {}
            })
          }
        })
        let member1 = that.data.storageData;

        function randomArrByOut(arr) {
          for (var i = arr.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
          }
          return arr;
        }
        let randomMember = randomArrByOut(member1)
        that.setData({
          isShark:true,
          member: randomMember
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
    var that = this;
        wx.getStorage({
            key: 'user',
            success(res) {
                let newStorageData = res.data;
                that.setData({
                    storageData: newStorageData,
                })
            }
        })
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

  },
  gotoOpeartion: function () {
    wx.navigateTo({
      url: '../../pages/operation/operation',
    })
  }
})