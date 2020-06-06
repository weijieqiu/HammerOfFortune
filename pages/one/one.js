// pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verifyBtnText: '点我',
    storageData: '',
    //验证码倒计时
    verifyBtnDisable: false,
    member: '',
    oneMember: '',
    i: 0

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
        that.setData({
          storageData: newStorageData,
        })
      }
    })
    let num = 2;
    let member1 = this.data.storageData;
    function randomArrByOut(arr) {
      for (var i = arr.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
      }
      return arr;
    }
    /**
     * 由于randomArrByOut随机的不太明显内部让他先随机五次显得明显
     */
    let randomMember = randomArrByOut(member1);
    this.setData({
      member: randomMember
    })
    // let interval = setInterval(e => {
    //   if (num <= 0) {
    //     clearInterval(interval);
    //     this.setData({
    //       verifyBtnText: "锤我",
    //       verifyBtnDisable: false,
    //       member: randomMember
    //     });

    //   } else {

    //     num--;

    //     this.setData({
    //       verifyBtnText: num + 's',
    //       verifyBtnDisable: true,
    //       member:""

    //     });

    //   }

    // }, 500)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'user',
      success(res) {
        console.log(res.data)
        let newStorageData = res.data;
        let num = 2;
        let member1 = newStorageData;
        function randomArrByOut(arr) {
          for (var i = arr.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
          }
          return arr;
        }
        /**
         * 由于randomArrByOut随机的不太明显内部让他先随机五次显得明显
         */
        let randomMember = randomArrByOut(member1);
        that.setData({
          storageData: newStorageData,
          member: randomMember
        })
        console.log(that.data.member)
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

  },
  countDown: function () {
    console.log(this.data.member)
    let that = this;
    if (that.data.i < this.data.member.length) {
      this.setData({
        oneMember: that.data.member[that.data.i]
      })
    } else {
      this.setData({
        oneMember: '数据已取完,可重新进入'
      })
    }
    this.data.i++;
  },
  gotoOpeartion: function () {
    wx.navigateTo({
      url: '../../pages/operation/operation',
    })
  }
})