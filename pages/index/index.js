//index.js
//获取应用实例
const app = getApp()

//数字数组
var board = new Array();
//分数
var score = 0;
var hasConflicted = new Array();

var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;

Page({
  data: {
    motto: 'Hello World',
    cell_i: [0, 1, 2, 3],
    cell_j: [0, 1, 2, 3],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function (e) {
    console.log(e.target.id);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //触摸移动事件
  bindMove: function (e) {
    var id = e.target.id;
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 200
    })
  },


  onLoad: function () {
    this.setData({
      score: score
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

    // prepareForMobile();
    // newgame();

  },

  newgame: function () {
    //初始化棋盘格
    init()
    //在随机两个格子生成数字
  },

  init: function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {

        var gridCell = document.getElementById("grid-cell-" + i + "-" + j);
        console.log(gridCell);
      }
    }
  },



  //   function prepareForMobile(){

  //     if(documentWidth > 500) {
  //       gridContainerWidth = 500;
  //       cellSpace = 20;
  //       cellSideLength = 100;
  //     },

  //   getUserInfo: function(e) {
  //     console.log(e)
  //     app.globalData.userInfo = e.detail.userInfo
  //     this.setData({
  //       userInfo: e.detail.userInfo,
  //       hasUserInfo: true
  //     })
  //   }
})
