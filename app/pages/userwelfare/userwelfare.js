// pages/userwelfare/userwelfare.js
//  box-shadow:0px 0px  10px 0px #aaa;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'18846079360',
    //[{ welfareTitle: '好吃的:我是好吃的', welfareDescription: '超级好丑的11111', img: '../img/1.jpg', welfareType: '月度福利', welfareStatus: '已领取' ,id:'asdsadasd'}, { welfareTitle: '很好吃的:对的', welfareDescription: '超级好丑的的111111', img: '../img/1.jpg', welfareType: '年度福利',welfareStatus: '待领取' ,id:'asdasdasd22'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(that);
    let userwelfare =[];
    let mobile = that.data.mobile;

    wx.request({
      url: "http://ifuli.didaobest.com/mywelfare/getUserWelfareList",
      data: {
        mobile,
      },
      header: {
        'content-type': 'application/json', // 默认值，
      },
      success: function (res) {
        console.log(res.data);
        let data = res&&res.data&&res.data.data;
        console.log(data);
        if (data){
          for(let x in data){
          userwelfare.push({
            welfareTitle: data[x].welfareTitle||'暂无',
            welfareDescription: data[x].welfareDescription||'暂无',
            welfareStatus: data[x].welfareStatus || '暂无',
            welfareType: data[x].welfareType || '暂无',
            welfareImgUrl: ("http://ifuli.didaobest.com/"+data[x].welfareImgUrl) || '',
            welfareId: data[x].welfareId || '',
          })
          }
          that.setData({
            userwelfare
          })
        }
        
      },
    });

    let mobile_part1 = mobile.slice(0,3);
    let mobile_part2 = mobile.slice(7, 11);
    mobile = mobile_part1 +'****'+mobile_part2;
    console.log(mobile);
    that.setData({
      mobile,
    })
  },
  getid:function(e){
    console.log(e.currentTarget.id);//拿id
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../welfareinfo/welfareinfo?id='+id,
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