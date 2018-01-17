var app=getApp()
Page({
  data: {
    swiper: "",
    welfareLists:"",  
    welfareId:"",  
    show:'none'
   },
  onLoad: function (options){
    let that = this;
    let mobile = app.globalData.mobile;
    wx.request({   //获取banner图片
      url: "http://ifuli.didaobest.com/mywelfare/getIndexBannerList",
      data: {
        mobile:"18846079360"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        let c = res && res.data && res.data.data.data;
        let d = []
        for (var i = 0; i < c.length; i++) {
          d.push("http://ifuli.didaobest.com/" + c[i].indexBannerListUrl)
        }
        that.setData({
          swiper: {
            imgUrls: d,
            autoplay: true,
            interval: 5000,
            duration: 500,
            indicatorDots: true,
            indicatorActiveColor: '#fff',
          },
        })
      }
    })
    wx.request({   //获取福利列表
      url: "http://ifuli.didaobest.com/mywelfare/getWelfareList",
      data: {
        mobile: "18846079360"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        let a = res.data.data.data;
        let b=[];
        let c=[];
        for(var i in a){
          b.push(a[i])
          c.push(a[i].welfareId)
        }
        that.setData({
          welfareId:c
        })
        that.setData({
          welfareLists: b
        })        
      }
    })
   },
  //  welfareDetails:function(){  //福利详情跳转
  //     wx.navigateTo({
  //       url: '../details/details?' + welfareId,
  //     })
  //  }
})
