//index.js
//获取应用实例

const myaudio = wx.createInnerAudioContext();
const app = getApp()

Page({
  data: {
    isplay: true,
    animationData: {},
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
    animationData5: {},
    animationData6: {},
    animationData7: {},
    animationData8: {},
    animationData9: {},
    animationData10: {},
    animationData11: {},
    animationData12: {},
    animationData13: {},
    animationData14: {},
    lay: {},
    lay1: {},
    lay2: {},
    lay3: {},
    message:1000,
    money:'',
    inputValue:'',
  },
  

  onLoad: function (e) {
    wx.request({
      url: 'http://172.16.15.9:8080/anchor/user/login.action',
      method: 'post',
      data: {
        id: 0
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

      }
    })



    myaudio.src = 'http://lxcdn.rabbitpre.com/805f8f8c-50e1-4b77-afdf-8987ace582d7'
    myaudio.play();
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation1 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation2 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation3 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation4 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation5 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation6 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation7 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation8 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation9 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation10 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation11 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation12 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation13 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var animation14 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var lay = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var lay1 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var lay2 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    var lay3 = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation1 = animation1
    this.animation2 = animation2
    this.animation3 = animation3
    this.animation4 = animation4
    this.animation5 = animation5
    this.animation6 = animation6
    this.animation7 = animation7
    this.animation8 = animation8
    this.animation9 = animation9
    this.animation10 = animation10
    this.animation11 = animation11
    this.animation12 = animation12
    this.animation13 = animation13
    this.animation14 = animation14
    this.lay = lay
    this.lay1 = lay1
    this.lay2 = lay2
    this.lay3 = lay3
    // animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export(),
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      animationData4: animation4.export(),
      animationData5: animation5.export(),
      animationData6: animation6.export(),
      animationData7: animation7.export(),
      animationData8: animation8.export(),
      animationData9: animation9.export(),
      animationData10: animation10.export(),
      animationData11: animation11.export(),
      animationData12: animation12.export(),
      animationData13: animation13.export(),
      animationData14: animation14.export(),
      lay: lay.export(),
      lay1: lay1.export(),
      lay2: lay2.export(),
      lay3: lay3.export(),
    })
   
    var n = 0;
    var n1=0;
    //连续动画需要添加定时器,所传参数每次+1就行
    setInterval(function () {
      // animation.translateY(-60).step()
      n = n + 1;
      n1=n1+1;
      this.animation.rotate(180 * (n)).step()
      this.animation1.bottom(32+'%').step();
     
      if (n1 == 3) {
        
        this.animation5.bottom(n1 + '%').step();
        this.animation5.opacity(0).step();
        n1 = 0;
      }else{
        this.animation5.bottom(n1 + '%').step();
        this.animation5.opacity(1).step();
      }
      
      this.setData({
        animationData: this.animation.export(),
        animationData1: this.animation1.export(),
        animationData5: this.animation5.export()
      })
     
     
    
     
    }.bind(this),700)
    setTimeout(function () {
      this.animation2.bottom(26+'%').step();
      this.setData({
        animationData2: this.animation2.export()
      })
    }.bind(this),1500)
    setTimeout(function () {
      this.animation3.left(-15+'%').step();
      this.setData({
        animationData3: this.animation3.export()
      })
    }.bind(this), 1600)
    setTimeout(function () {
      this.animation4.top(31 + '%').step();
      this.setData({
        animationData4: this.animation4.export()
      })
    }.bind(this), 1550)
   
   
    

    
  },
  //播放
  play: function () {
    myaudio.pause();
    console.log(myaudio.duration);
    this.setData({ isplay: false });
  },
  // 停止
  stop: function () {
    myaudio.play();
    this.setData({ isplay: true });
  },

  swiperChange(e) {
    const that = this;
    var myid=e.detail.current;
    if(myid==1){
      setTimeout(function () {
        this.animation6.top(14 + '%').step();
        this.setData({
          animationData6: this.animation6.export()
        })
      }.bind(this), 800)
      setTimeout(function () {
        this.animation7.top(17 + '%').step();
        this.setData({
          animationData7: this.animation7.export()
        })
      }.bind(this), 900)
      setTimeout(function () {
        this.animation8.opacity(1).step();
        this.setData({
          animationData8: this.animation8.export()
        })
      }.bind(this), 1200)
    }else if(myid==2){
      setTimeout(function () {
        this.animation12.bottom(6 + '%').step();
        this.animation9.top(12 + '%').step();
        this.setData({
          animationData9: this.animation9.export(),
          animationData12: this.animation12.export(),
          
        })
      }.bind(this), 800)
      setTimeout(function () {
        this.animation10.top(16 + '%').step();
       
        this.setData({
          animationData10: this.animation10.export(),
         
        })
      }.bind(this), 900)
      setTimeout(function () {
        this.animation13.top(25 + '%').step();
        this.setData({
          animationData13: this.animation13.export()
        })
      }.bind(this), 1200)
      setTimeout(function () {
        this.animation11.opacity(1).step();
        this.animation14.left(7+'%').step();
        this.setData({
          animationData11: this.animation11.export(),
          animationData14: this.animation14.export()
        })
      }.bind(this), 1500)
    }else if(myid==3){
      setTimeout(function () {
        this.lay.left(0+'%').step();
        this.setData({
          lay: this.lay.export()
        })
      }.bind(this), 500)
      setTimeout(function () {
        this.lay1.top(22 + '%').step();
        this.setData({
          lay1: this.lay1.export()
        })
      }.bind(this), 800)
      setTimeout(function () {
        this.lay2.top(27 + '%').step();
        this.setData({
          lay2: this.lay2.export()
        })
      }.bind(this), 1000)
      setTimeout(function () {
        this.lay3.opacity(1).step();
        this.setData({
          lay3: this.lay3.export()
        })
      }.bind(this), 1600)
    }


  },
  dianzi:function(e){
    var that=this;
    var money=this.data.money;
    var message=this.data.message;
    var deg =/^[0-9]+(.[0-9]{2})?$/;
    if (money > message||!deg.test(money)){
      wx.showModal({
        title: '提示',
        content: '请输入正确金额',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            that.setData({
              inputValue: '',
              money:'',

            })
          }
         
        }
      })
    }else{
      wx.showModal({
        title: '提现',
        content: '是否确认提现'+money+'元',
        success: function (res) {
          if (res.confirm) {
             // wx.request({
      //   url: 'http://172.16.15.9:8080/anchor/user/login.action',
      //   method: 'post',
      //   data: {
      //     id: 0
      //   },
      //   header: {
      //     'Content-Type': 'application/json'
      //   },
      //   success: function (res) {

      //   }
      // })
          }
          if (res.cancel){
            that.setData({
              inputValue: '',
              money: '',
            })
          }

        }
      })
     

    }
    
    

  },
  money: function (e) {
    console.log(e)
    var mymoney=e.detail.value;
    this.setData({
      money: mymoney
    })
  }

})
