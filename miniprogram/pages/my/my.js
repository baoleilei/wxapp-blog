const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(app.globalData.userInfo)
  },
  //赞赏图
  likeImg() {
    var e = "https://tvax1.sinaimg.cn/large/005BYqpggy1g4ljw56qwhj30st0sttao.jpg";
    wx.previewImage({
      urls: e.split(",")
    });
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  tips(){
    wx.showToast({
      title: '开发中',
    })
  },
  //切换页面
  go(e) {
    var e = e.currentTarget.dataset.to;
    wx.navigateTo({
      url:  e,
    })
  }
})