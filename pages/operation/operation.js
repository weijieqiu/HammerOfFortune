// pages/operation/operation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        value: '',
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
                let newStorageData = res.data;
                that.setData({
                    storageData: newStorageData,
                })
            }
        })
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
    bindKeyInput: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    getSmallSystemMember: function (e) {
        let storageData = ["曾晓铃", "谢明裔", "谭凤兰", "陈喜华", "伍子涛", "邱伟杰", "梁玉琴","覃华盈"]
        wx.setStorage({
            key: "user",
            data: storageData,
            success: function (res) {
                wx.showToast({
                    title: '一键添加成功',
                    icon: '',
                    duration: 2000
                });
            }
        })
        this.setData({
            value: '',
            storageData: storageData
        })
    },
    clearSmallSystemMember: function (e) {
        let that = this;
        wx.getStorage({
            key: 'user',
            success: function () {
                wx.setStorage({
                    data: [],
                    key: 'user'
                })
                wx.showToast({
                    title: '一键清除成功',
                    icon: '',
                    duration: 2000,
                    success: function () {
                        that.setData({
                            value: '',
                            storageData: ''
                        })
                    }
                });

            }
        })
    },
    deleteOneMember: function () {
        var that = this;
        console.log(that.data)
        let newStorageData;
        Array.prototype.indexOf = function (val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        };
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
                return 1;
            }
        };
        wx.getStorage({
            key: 'user',
            success(res) {
                let newStorageData = res.data;
                if(newStorageData.remove(that.data.name)){
                    wx.setStorage({
                        key: "user",
                        data: newStorageData,
                        success: function (res) {
                            wx.showToast({
                                title: '删除成功',
                                icon: '',
                                duration: 2000
                            });
                            that.setData({
                                name: '',
                                storageData: newStorageData
                            })
    
                        }
                    })
                }else{
                    wx.showToast({
                        title: '输入信息不能为空',
                        icon: 'none',
                        duration: 2000,
                        success: function(){
                            that.setData({
                                name: ''
                            })
                        }
                    });
                }
               
            }
        })

    },
    formSubmit: function () {
        var that = this;
        console.log(that.data)
        if(this.data.name!=""&&(this.data.name).trim()!=""){
            wx.getStorage({
                key: 'user',
                success(res) {
                    let newStorageData = res.data;
                    newStorageData.push(that.data.name)
                    wx.setStorage({
                        key: "user",
                        data: newStorageData,
                        success: function (res) {
                            wx.showToast({
                                title: '添加成功',
                                icon: '',
                                duration: 2000
                            });
                            that.setData({
                                name: '',
                                storageData: newStorageData
                            })
    
                        }
                    })
                }
            })
        }else{
            wx.showToast({
                title: '输入信息不能为空',
                icon: 'none',
                duration: 2000,
                success: function(){
                    that.setData({
                        name: ''
                    })
                }
            });
        }
       

    }
})