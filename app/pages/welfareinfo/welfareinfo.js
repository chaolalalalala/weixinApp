// pages/welfareinfo/welfareinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welfareAddress:'东部软件园科技大厦B303前台',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    //let welfareId = e.id;
    let welfareId = '14';
    let account = '15672660530';
    let password = 'asdasd';
    console.log(welfareId);
        wx.request({
          url: "http://ifuli.didaobest.com/mywelfare/getUserWelfareInfo",
          data: {
            welfareId,
          },
          header: {
            'content-type': 'application/json', // 默认值
          },
          success: function (res) {
            console.log(res.data)
          },
        })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  gettip: (e)=>{
    let that = this;
    let welfareAddress = e.currentTarget.dataset.name;
    console.log(this);
    wx.showModal({
      title: '提示',  
      content:  welfareAddress,
      showCancel: false,
    });
  },
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
  
  }
})