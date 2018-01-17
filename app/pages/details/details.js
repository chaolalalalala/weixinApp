// pages/details/details.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welfareTitle:'公司12月份月度福利 (2选1)',
    welfareTime: '2017-12-22',
    welfareDetails:'啊u树放吧计算办法能静安寺佛那是放那首叫那是你覅噢那是菲尼克斯您付款拉上你放假啊库房回话如爸爸奥斯妇科那时快asdas阿基诺工具',
    vote:{
        voteTitle:"快快投票选取喜欢的福利~~",
        voteDetailsTitle:"已结束",
        voteDetailsCon:[
          {
            voteConTitle:"福利一:冬日稻香",
            voteConUrl:'../../images/u1.png',
            voteConText:'五常大米稻花香(5kg)',
            votePercentage:'57',
            voteSum:"30"
          },
          {
            voteConTitle: "福利二:有机生活",
            voteConUrl: '../../images/u1.png',
            voteConText: '五常大米稻花香(5kg)+艾丝凡你急啊搜',
            votePercentage: '43',
            voteSum: "23"
          }
        ]        
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.welfareId
    wx.getStorage({
      key: 'str',
      success: function(res) {
       
        wx.request({   //获取福利列表
          url: "http://ifuli.didaobest.com/mywelfare/getWelfareDetails",
          data: {
            welfareId: id,
            str:res.data,
            mobile: app.globalData.mobile
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res)

          }
        })
        console.log(res.data,app.globalData.mobile)
      },
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