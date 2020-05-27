// pages/hammer/hammer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: "",
    //验证码倒计时
    verifyBtnDisable: false,
    verifyBtnText: '锤我'
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
  hammer: function() {
    // let member1 = ['曾晓铃','谢明裔','谭凤兰','陈喜华','余永辉','伍子涛','邱伟杰']
    // let i = Math.floor(Math.random() * 7);
    // console.log(i);
    // let onlyMember = member1[i];
    // this.setData({ member: onlyMember })
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
    this.countDown(randomMember);
    
  },
  //验证码倒计时

  countDown: function () {
    
   

    let num = 2;
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
    let interval = setInterval(e => {
      if (num <= 0) {
        clearInterval(interval);
        
        // let i = Math.floor(Math.random() * 7);
        // console.log(i);
        // let onlyMember = randomMemberTemp[i];

        this.setData({
          verifyBtnText: "锤我",
          verifyBtnDisable: false,
          member: randomMember
        });

      } else {

        num--;

        this.setData({
          verifyBtnText: num + 's',
          verifyBtnDisable: true,
          member:""

        });

      }

    }, 500)
  }
})