$(function(){

  // 后台返回的数据
  var data = {
    title:'2019年注册人数',
    list:[
      { month: '1月',count: 1000},
      { month: '1月',count: 2000},
      { month: '1月',count: 3000},
      { month: '1月',count: 1500},
      { month: '1月',count: 1000},
      { month: '1月',count: 1000}
    ]
  }
   var mouths = {}
   var counts = []
   for(var i =0;i<data.list.length;i++){
     mouths.push
   }

// 初始化 echars 实例
var myChart = echarts.init(document.querySelector('.lt_content .left'))
// 指定图表的配置项和数据
var option = { 
  title: {
      text: '2019年注册人数',
      textStyle:{
        color:'red'
      }
  },
  tooltip: {},
  legend: {
      data:['人数']
  },
  width:{},
  xAxis: {
      data: ["1月","2月","3月","4月","5月","6月"]
  }, 
  yAxis: {},
  series: [{
      name: '人数',
      type: 'bar',
      data: [1000, 2000, 1500, 3000, 800, 900]
  }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 初始化饼图实例
var rightChart = echarts.init(document.querySelector('.lt_content .right'))
var rightOption = {
  title : {
    text: '热门品牌销售',
    subtext: '2019年3月',
    x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['耐克','阿迪','阿迪王','新百伦','匡威']
  },
  series : [
      {
          name: '销售情况',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'耐克'},
              {value:310, name:'阿迪'},
              {value:234, name:'阿迪王'},
              {value:135, name:'新百伦'},
              {value:1548, name:'匡威'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
}
rightChart.setOption(rightOption)
  





}) 