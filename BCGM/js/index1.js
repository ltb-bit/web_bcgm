//柱状图模块1
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2. 指定配置项和数据
    var option = {
      color:[ "#2f89cf"],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        top:"10px",
        right: '0%',
        bottom: '4%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: [ 
              "草部",
              "木部",
              "金石部", 
              "虫部", 
              "兽部", 
              "水部", 
              "火部"
                ],
          axisTick: {
            alignWithLabel: true
          },
          //修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255, 255, 255, .6)",
            fontSize: 12
          },
          //不显示x坐标轴的样式
          axisLine: {
            show:false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          //修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255, 255, 255, .6)",
            fontSize: 12
          },
          //y轴的线条样式改为2像素
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, .1)",
              withd: 2
            }
          },
          //y轴的分割线样式修改
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, .1)"
            }
          }
        }
      ],
      series: [
        {
          name: '不同药物部类常见药物数量',
          type: 'bar',
          barWidth: '35%',
          data: [150, 80, 50, 30, 20, 40, 10],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },

        }
      ]
    };
    // 3. 配置项和数据给我们的实例对象
    myChart.setOption(option);
    // 4. 图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
})();


//柱状图模块2
(function () {
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8BBDC3'];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置项和数据 
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      //不显示x轴
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ["感冒咳嗽", "肠胃疾病", "风湿痹痛", "妇科疾病", "眼疾"],
        //不显示y轴的线条
        axisLine:{
          show: false
        },
        //不显示y轴的刻度
        axisTick:{
          show: false
        },
        //把y轴的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        },
      },
      {
        inverse: true,
        data:[200, 150, 120, 80, 60],
        //不显示y轴的线条
        axisLine:{
          show: false
        },
        //不显示y轴的刻度
        axisTick:{
          show: false
        },
        //把y轴的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        },
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [39, 29, 24, 16, 12],
        yAxisIndex: 0,
        //修改柱子圆角
        itemStyle: {
          barBorderRadius: 20,
          //修改柱子颜色
          color:function (params) {
            // params 传进来的是柱子对象
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex]; 
          }
        },
        //柱子之间的间距
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子上的数据
        label: {
          show: true,
          position: 'inside',
          // {c} 会自动解析为数据
          // {a} 会自动解析为系列名称 
          // {b} 会自动解析为数据名
          // {d} 会自动解析为百分比
          formatter: '{c}%'
        },
      },
      {
        name: '框',
        type: 'bar',
        barWidth: 15,
        barCategoryGap: 50,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        },
      }
    ]
  };
  // 3. 配置项和数据给我们的实例对象
  myChart.setOption(option);
  // 4. 图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//折线图模块一
(function () {
  var nameData = [
    {
      name: '本草纲目',  // 名称
      data: [  // 两个数组是因为有两条线
           [300, 450, 480, 420, 550, 600],
           [80, 120, 100, 90, 110, 130]
        ]
    },
    {
      name: '伤寒杂病论',  // 名称
      data: [  // 两个数组是因为有两条线
           [200, 120, 350, 480, 420, 450],
           [60, 20, 70, 85, 70, 100]
        ]
    }
   ];

  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  //2.指定配置项和数据
  var option = {
    //设置图表的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    //图例组件
    legend: {
     //如果series有name值，legend就会根据name值自动生成图例，可以不写legend的data值
      //如果series没有name值，legend就不会自动生成图例，需要手动设置legend的data值
      textStyle: {
        color: '#4c9bfd',//图例文字颜色
      },
      right: '20%'//图例位置
    },
    //设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,//显示边框
      borderColor: '#012f4a',//边框颜色
      containLabel: true //包含刻度标签在内
    },
    //设置x轴的样式
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['明朝', '清朝', '民国', '新中国 ', '改革开放', '2000至今'],
      //修改刻度标签 相关样式
      axisLabel: {
        color: "#4c9bfd"
      },
      //不显示x坐标轴的样式
      axisLine: {
        show: false  //不显示坐标轴
      },
      //不显示x轴的刻度
      axisTick: {
        show: false  //不显示刻度
      },
    },
    yAxis: {
      type: 'value',
      //修改刻度标签 相关样式
      axisLabel: {
        color: "#4c9bfd"
      },
      //不显示x坐标轴的样式
      axisLine: {
        show: false  //不显示坐标轴
      },
      //不显示x轴的刻度
      axisTick: {
        show: false  //不显示刻度
      },
      //y轴的线条颜色更改
      splitLine: {
        lineStyle: {
          color: '#012f4a'//分割线颜色
        }
      }
    },
    series: [
      {
        name:'植物药应用频次',
        type: 'line',
        smooth: true,//让折线图更平滑
        data:  nameData[0].data[0]
      },
      {
        name:'矿物药应用频次',
        type: 'line',
        smooth: true,//让折线图更平滑
        data: nameData[0].data[1]
      }
    ]
  };
  //3.配置项和数据给我们的实例对象
  myChart.setOption(option);
  //4.图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //5.点击切换效果
  $(".line h2").on("click", "a", function () {
    // alert(1);
    // logic($(this).index());//获取当前点击的索引号对应的数据
    // console.log(yearData[$(this).index()]);//获取当前点击的索引号对应的数据
    var obj = nameData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //重新渲染图表
    myChart.setOption(option);
   
  });
})();

//折线图模块二
(function () {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  //2.指定配置项和数据
  option = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '0%',
      textStyle: {
        color: '#4c9bfd',//图例文字颜色
        fontSize: '12',//图例文字大小
      },
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [ "16世纪","17世纪","18世纪","19世纪","20世纪","21世纪"],
       // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
     axisLabel: {
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      }
    },
     // x轴线的颜色为   rgba(255,255,255,.2)
    axisLine: {
      lineStyle: {
        color: "rgba(255,255,255,.2)"
      }
    },

      }
    ],
    yAxis: [
      {
        type: 'value',
        // 修改y轴刻度是否显示
        axisTick: { show: false },
        // 修改y轴的颜色
        axisLine: {
          // y轴线的颜色为   rgba(255,255,255,.2)
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        // 修改y轴文本的颜色
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }

      }
    ],
    series: [
      {
        name: '植物药研究热度指数',
        type: 'line',
        smooth: true,//让折线图更平滑
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域的颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(1, 132, 213, 0.4)' },//渐变色的起始颜色
            { offset: 1, color: 'rgba(1, 132, 213, 0.1)' }//渐变色的结束颜色
          ],
          false
        ),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        Symbol: 'circle',//设置拐点的形状为圆形
        SymbolSize: 8,//设置拐点的大小为5px
        showSymbol: false,//设置拐点不显示
        //设置拐点的颜色为白色
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data:  [30, 40, 50, 60,80, 100]
      },
      {
        name: '动物药研究热度指数',
        type: 'line',
        smooth: true,//让折线图更平滑
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,

        data: [ 30, 40, 20, 40,30, 40]
      },
     
    ]
  };
  //3.配置项和数据给我们的实例对象
  myChart.setOption(option);
  //4.图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//饼图模块一
(function () {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  //2.指定配置项和数据
  option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
       formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      bottom: '0%',
      //小图标的高度和宽度
      itemWidth: 8,
      itemHeight: 8,
      //修改图例文字颜色和字体大小
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: '12'
      }
    },
    series: [
      {
        name: '不同病症应用的药方数量占比',
        type: 'pie',
        //设置饼形图的位置
        center: ['50%', '45%'],
        //设置饼形图的大小
        // 第一个值是内圆的半径，第二个值是外圆的半径
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        //图形上的文字
        label: {
          show: false,
          position: 'center'
        },
        //图形上的文字的样式
        emphasis: {
          label: {
            //是否显示文字
            show: false,
            //文字的大小
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        //链接文字和图形的线条是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 2000, name: '感冒咳嗽' },
          { value: 1500, name: '肠胃疾病' },
          { value: 1200, name: '风湿痹痛' },
          { value: 800, name: '妇科疾病' },
          { value: 500, name: '儿科疾病' },
          { value: 3000, name: '其他病症' }

        ]
      }
    ]
  };
  //3.配置项和数据给我们的实例对象
  myChart.setOption(option);
  //4.图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//饼图模块二
(function () {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  //2.指定配置项和数据
  option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      //小图标的高度和宽度
      itemWidth: 10,
      itemHeight: 10,
      //修改图例文字颜色和字体大小
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: '12'
    },
  },
    series: [
      {
        name: '《本草纲目》中药物功效占比',
        type: 'pie',
        radius: ['10', '70'],
        center: ['50%', '50%'],
        roseType: 'radius',
        //图形上的文字
        label: {
          fontSize: 10,
        },
        //链接文字和图形的线条
        labelLine: {
          show: true,
          //连接图形的线条
          length: 6,
          //连接文字的线条
          length2: 8,
        },
        data: [
          { value: 20, name: '解表' },
          { value: 15, name: '清热' },
          { value: 12, name: '补益' },
          { value: 8, name: '理气' },
          { value: 8, name: '活血' },
          { value: 8, name: '化痰' },
          { value: 8, name: '止咳' },
          { value: 10, name: '消食' }

        ]
      }
    ]
  };
  //3.配置项和数据给我们的实例对象
  myChart.setOption(option);
  //4.图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();



//《本草纲目》药物在全国的分布数量模块的地图模块
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var drugData = {
    "北京": 50,
    "天津": 30,
    "河北": 80,
    "山西": 60,
    "内蒙古": 40,
    "辽宁": 70,
    "吉林": 55,
    "黑龙江": 65,
    "上海": 45,
    "江苏": 90,
    "浙江": 100,
    "安徽": 75,
    "福建": 60,
    "江西": 50,
    "山东": 85,
    "河南": 95,
    "湖北": 80,
    "湖南": 70,
    "广东": 110,
    "广西": 60,
    "海南": 40,
    "重庆": 55,
    "四川": 120,
    "贵州": 70,
    "云南": 100,
    "西藏": 30,
    "陕西": 65,
    "甘肃": 45,
    "青海": 35,
    "宁夏": 30,
    "新疆": 50,
    "台湾": 40,
    "香港": 20,
    "澳门": 10,
    "南海诸岛": 4
};

var data = [];
for (var province in drugData) {
    data.push({
        name: province,
        value: drugData[province]
    });
}

const option = {
  tooltip: {
      trigger: 'item',
      formatter: '{b}：{c}种'
  },
  visualMap: {
      min: 10,
      max: 120,
      left: 'left',
      top: 'bottom',
      text: ['多', '少'],
      calculable: true,
      //图例颜色
      inRange: {
          color: ['#f5e1d0', '#ff5722']
      }
  },
  series: [
      {
          name: '《本草纲目》药物分布',
          type:'map',
          map: 'china',
          roam: true,
          label: {
              show: true,
              color: '#000'
          },
          itemStyle: {
              normal: {
                //地图区域的背景颜色
                  borderColor: '#fff',
                  borderWidth: 1
              },
              //鼠标经过区域高亮
              emphasis: {
                  areaColor: '#ff5722',
              }
          },
          data: data
      }
  ]
};

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  
})();

