var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({
  data: {
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    startYear: 2000,
    endYear: 2050
  },
  onLoad() {  // 获取完整的年月日 时分秒，以及默认显示的数组

    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);  // 精确到分的处理，将数组的秒去掉

    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();


    this.setData({
      dateTimeArray: obj1.dateTimeArray,
      dateTime: obj1.dateTime
    });
  },
  changeDateTime1(e) {
    this.setData({
      dateTime: e.detail.value
    });
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime,
      dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);


    this.setData({
      dateTimeArray: dateArr
    });
  }
})