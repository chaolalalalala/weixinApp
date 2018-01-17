
var app=getApp()
Page({
  data: {
    swiper:"",
    a:null,
    phone:"",
    VerificationNum:"",
    code:"",
    Prompt:"",
    phonePrompt:true,
    btnText:"获取验证码",
    wxCode:"",
    btnFun:"getVerificationNum"
  },



  phoneNum: function (e) {  //获取输入的手机号
    this.setData({
      phone: e.detail.value
    })
    this.setData({
      phonePrompt: true
    })
    getApp().globalData.mobile = e.detail.value;  //设置全部变量电话
  },




  VerificationNum:function(e){  //获取输入的验证码
    this.setData({
      code: e.detail.value
    })
    var a = e.detail.value;
    if (a==this.data.code){
      this.setData({
        a: "../index/index"
      })
    }
    this.setData({
      phonePrompt: true
    })
  },



  getVerificationNum:function(e){  //获取验证码
      let that=this;
      let num=10;
      that.setData({
        btnFun:""
      })
      var t=setInterval(function(){
        that.setData({
          btnText:num+'秒后重新获取'
        })
        num--;
        if(num==-1){
          clearInterval(t)
          num=120
          that.setData({
            btnText: '获取验证码',
            btnFun: "getVerificationNum"
          })
          
        }
      },1000)
      wx.request({
        url: "http://ifuli.didaobest.com/simple/getVerificationCode" ,
        data: {
          'mobile': this.data.phone
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {  //15167193250
          let a = res && res.data && res.data.status;
          let b = res && res.data && res.data.code;
          let c = res && res.data && res.data.msg;
          console.log(res.data)
          if(b){
            that.setData({
              code: b
            })
          }else{
            that.setData({
              phonePrompt:false
            })
            that.setData({
              Prompt:c
            })
          }
        }
      })
    },  




  login:function(){   //登录
    console.log(this.data.code)
    let that=this
    wx.request({
      url: "http://ifuli.didaobest.com/simple/loginToindex",
      data: {
        'mobile': this.data.phone,
        'verificationCode':this.data.code,
        'code':this.data.wxCode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        let a = res && res.data && res.data.status
        let b = res && res.data && res.data.msg
        let c = res && res.data && res.data.str
        console.log(res)
        if(a){
          wx.redirectTo({
            url:"../index/index"
          })
          wx.setStorage({
            key: 'str',
            data: c,
          })
        }else{
          that.setData({
            phonePrompt: false
          })
          that.setData({
            Prompt: b
          })
        }
      }
    })
  },

   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that= this;
      wx.request({   //获取banner图片
      url: "http://ifuli.didaobest.com/simple/getLoginBannerList",
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        
        let c = res && res.data && res.data.url;
        let d=[]
        for(var i=0;i<c.length;i++){
          d.push("http://ifuli.didaobest.com/"+c[i])
        }
        that.setData({
          swiper: {
            imgUrls: d,
            autoplay: true,
            interval: 5000,
            duration: 500,
            indicatorDots: true,
            indicatorActiveColor: '#fff'
          }
        })
      }
    })
      wx.login({
        success: res => {
          console.log(res.code)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          that.setData({
            wxCode: res.code
          })
        }
      })
  },
})
