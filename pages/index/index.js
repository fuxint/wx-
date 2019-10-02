//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img:'',
    show:false,
    bgcolor:false
    
  },
  //事件处理函数
  hideFloat(){
    this.setData({
      show: false,
      bgcolor: false
    })
    wx.showTabBar({
      
    })
  },
 
  // 保存电话
  KeepPhone(){
    this.setData({
      show:true,
      bgcolor:true
    })
    wx.hideTabBar({
    })
  },
  // 创建新的联系人
  CreateNumber(){
    wx.addPhoneContact({
      firstName:"付欣彤",
      mobilePhoneNumber:15043145679
    })
  },
  // 添加现有联系人
  AddContact(){
   
    // wx.addPhoneContact({
   
    // })
  },
  // 分享
  shareCart(){
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })
  },
  // 获取本地图片
  ClickPhone(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        this.setData({
          img:res.tempFilePaths
        })
      }
    })
  },


// 复制邮箱
  ClickCopy(){
      wx.setClipboardData({
        data: '3090597803@qq.com'
        // success:function(res){
        // }
      })
  },
    // 拨打电话
  ClickCall(){
    wx.makePhoneCall({
      phoneNumber: '15043145679',
    })
  },
  // 复制职业
  ClickJob(){
    wx.setClipboardData({
      data: 'web前端工程师'
    })
  },
  onLoad: function () {
    console.log(app)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
