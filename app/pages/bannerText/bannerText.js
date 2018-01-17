// pages/bannerText/bannerText.js
var WxParse= require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text:"",
      index:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    let i=options.index
    wx.request({   //获取banner图片
      url: "http://ifuli.didaobest.com/mywelfare/getIndexBannerList",
      data: {
        mobile: "18846079360"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        let c = res && res.data && res.data.data.data;
        let text = c[i].indexBannerListContent        
        WxParse.wxParse('text', 'html', text, that, 5)
      }
    })
    
    
    
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
  
  }
})