// pages/calendar/calendar.js
//获取目前年月
let year=new Date().getFullYear()
let month=new Date().getMonth()
month=month+1
//获取该月有多少天
function getDaysOfMonth(year,month){
  let date = new Date(year,month,0).getDate()
  return date
}
//创建日子的列表（形如[1,2,3,4...31]）
function createItemsOfDays(days){
  let item=[]
  for (let i=1;i<=days;i++){
    item.push({
      date:i
    })
  }
  console.log(item)
  return item
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      year:year,
      month:month
     })
     //设置年月日data
     let days=getDaysOfMonth(year,month)
     let item=createItemsOfDays(days)
     this.setData({riqi:item})

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
//上一页
  lastMonth: function() {
    if (month>1){
      month=month-1
    }else{
      year=year-1
      month=12
    }
    this.setData({
      month:month,
      year:year
    })
    drawDays()
  },
  //下一页
  nextMonth: function() {
    if (month<12){
      month=month+1
    }else{
      year=year+1
      month=1
    }
    this.setData({
      month:month,
      year:year
    })
    drawDays()
  },
  //设置日子data
  drawDays(){
    let days=getDaysOfMonth(year,month)
    let item=createItemsOfDays(days)
    this.setData({riqi:item})
  }
})

