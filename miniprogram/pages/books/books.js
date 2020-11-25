// miniprogram/pages/user/user.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "../../asset/banner/1.jpg"
    }, {
      "url": "../../asset/banner/2.jpg"
    }, {
      "url": "../../asset/banner/3.jpg"
    }, {
      "url": "../../asset/banner/4.jpg"
    }, {
      "url": "../../asset/banner/5.jpg"
    }],
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goto: function (e) {
    wx.navigateTo({
      url: "../details/details?bookId="+e.currentTarget.id+"",
    })
    console.log(e.currentTarget.id);
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    db.collection("storylist").doc({}).get().then(res => {
      this.setData({
        books: res.data.novelList
      })
      // console.log(res.data.novelList);
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
  onShareAppMessage() {

  },


})