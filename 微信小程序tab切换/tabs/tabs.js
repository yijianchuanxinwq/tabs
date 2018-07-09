// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { id: 0, uniqued: 0, name: "页面一" },
      { id: 1, uniqued: 1, name: "页面二" },
      { id: 2, uniqued: 2, name: "页面三" },
      { id: 3, uniqued: 3, name: "页面四" }
    ],
    yemians:[
      { id: 0, uniqued: 0, content: "内容一" },
      { id: 1, uniqued: 1, content: "内容二" },
      { id: 2, uniqued: 2, content: "内容三" },
      { id: 3, uniqued: 3, content: "内容四" }
    ],
    selected:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  btn:function(e){
    var index=e.currentTarget.dataset.index;
    this.setData({
      selected: index
    })
  }
})