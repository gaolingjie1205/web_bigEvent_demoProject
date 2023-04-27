// import "./jquery";
// import * as echarts from "./echarts.min.js";

$(function() {
  /** "月新增文章数"曲线图 */
  function setCurveShow() {
    let oCurveShow = $("#curve_show")[0];
    let oCurveShowChart = echarts.init(oCurveShow);
    // 准备数据
    let oCurveShowChartData = [
      { 'count': 36, 'date': '2019-04-13' },
      { 'count': 52, 'date': '2019-04-14' },
      { 'count': 78, 'date': '2019-04-15' },
      { 'count': 85, 'date': '2019-04-16' },
      { 'count': 65, 'date': '2019-04-17' },
      { 'count': 72, 'date': '2019-04-18' },
      { 'count': 88, 'date': '2019-04-19' },
      { 'count': 64, 'date': '2019-04-20' },
      { 'count': 72, 'date': '2019-04-21' },
      { 'count': 90, 'date': '2019-04-22' },
      { 'count': 96, 'date': '2019-04-23' },
      { 'count': 100, 'date': '2019-04-24' },
      { 'count': 102, 'date': '2019-04-25' },
      { 'count': 110, 'date': '2019-04-26' },
      { 'count': 123, 'date': '2019-04-27' },
      { 'count': 100, 'date': '2019-04-28' },
      { 'count': 132, 'date': '2019-04-29' },
      { 'count': 146, 'date': '2019-04-30' },
      { 'count': 200, 'date': '2019-05-01' },
      { 'count': 180, 'date': '2019-05-02' },
      { 'count': 163, 'date': '2019-05-03' },
      { 'count': 110, 'date': '2019-05-04' },
      { 'count': 80, 'date': '2019-05-05' },
      { 'count': 82, 'date': '2019-05-06' },
      { 'count': 70, 'date': '2019-05-07' },
      { 'count': 65, 'date': '2019-05-08' },
      { 'count': 54, 'date': '2019-05-09' },
      { 'count': 40, 'date': '2019-05-10' },
      { 'count': 45, 'date': '2019-05-11' },
      { 'count': 38, 'date': '2019-05-12' },
    ];
    let allCount = [];  // 月新增文章数
    let allDate = [];  // 日期
    for(let i = 0; i < oCurveShowChartData.length; i++) {
      allCount.push(oCurveShowChartData[i]["count"]);
      allDate.push(oCurveShowChartData[i]["date"]);
    }
    // 准备配置
    let oCurveShowChartOption = {
      title: {
        text: "月新增文章数",
        top: "10px",
        left: "center",
      },
      tooltip: {
        show: true,
        trigger: "axis"
      },
      toolbox: {
        feature: {
          dataView: {show: true},
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {show:true},
          saveAsImage: {show:true},
        }
      },
      legend: {
        top: "35px",
        left: "center",
        data: [{
          name: "新增文章",
          textStyle: {
            color: "orange"
          }
        }]
      },
      xAxis: {
        type: 'category',
        name: "日",
        boundaryGap: false,
        data: allDate
      },
      yAxis: {
        type: 'value',
        name: "月新增文章数"
      },
      series: [
        {
          type: 'line',
          name: "新增文章",
          data: allCount,
          smooth: true,
          areaStyle: {
            normal: {
              // 使用线性渐变来设置区域填充颜色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255,136,0,0.39)'
              }, {
                offset: .34,
                color: 'rgba(255,180,0,0.25)'
              }, {
                offset: 1,
                color: 'rgba(255,222,0,0.00)'
              }])
            }
          }
        }
      ],
      color: ["orange"],
      grid: {
        show: true,
        containLabel: true,
        left: "15px",
        right: "35px",
        bottom: "15px",
        borderColor: "transparent"
      },
      backgroundColor: "#fff",

    };
    // 应用带有数据的配置
    oCurveShowChart.setOption(oCurveShowChartOption);

    return oCurveShowChart;
  }
  let oCurveShowChart = setCurveShow();


  /** "分类文章数量比"饼状图 */
  function setPieShow() {
    let oPieShow = $("#pie_show")[0];
    let oPieShowChart = echarts.init(oPieShow);
    // 准备数据

    // 准备配置
    let oPieShowChartOption = {
      title: {
        text: "分类文章数量比",
        top: "10px",
        left: "center",
      },
      tooltip: {
        show: true,
        trigger: 'item'
      },
      toolbox: {
        feature: {
          dataView: {show: true},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        top: '65px',
        left: 'center',
        data: ['奇趣事', '会生活', '爱旅行', '趣美味']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '60%'],
          center: ['50%', '65%'],  // 圆心稍微靠下
          avoidLabelOverlap: true,
          data: [
            { value: 300, name: '奇趣事' },
            { value: 100, name: '会生活' },
            { value: 260, name: '爱旅行' },
            { value: 180, name: '趣美味' }
          ]
        }
      ],
      color: ["#ff007f", "lightskyblue", "pink", "purple"],
      backgroundColor: "#fff",
    };
    // 应用带有数据的配置
    oPieShowChart.setOption(oPieShowChartOption);
    return oPieShowChart;
  }
  let oPieShowChart = setPieShow();

  /** "文章访问量"滚动柱状图 */
  function setColumnShow() {
    let oColumnshow = $("#column_show")[0];
    let oColumnshowChart = echarts.init(oColumnshow);
    // 准备配置
    let oColumnshowChartOption = {
      title: {
        text: "文章访问量",
        top: "10px",
        left: "center",
      },
      tooltip: {
        show: true,
        trigger: "axis"
      },
      toolbox: {
        feature: {
          dataView: {show: true},
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {show:true},
          saveAsImage: {show:true},
        }
      },
      legend: {
        top: "35px",
        left: "center",
        data: ['奇趣事', '会生活', '爱旅行', '趣美味']
      },
      xAxis: {
        type: 'category',
        name: '月份',
        data: ['1月', '2月', '3月', '4月', '5月']
      },
      yAxis: {
        type: 'value',
        name: '访问量'
      },
      series: [
        {
          type: 'bar',
          name: '奇趣事',
          data: [120, 200, 150, 80, 70],
          // barWidth: 25
        },
        {
          type: 'bar',
          name: '会生活',
          data: [400, 468, 520, 690, 800],
        },
        {
          type: 'bar',
          name: '爱旅行',
          data: [500, 668, 520, 790, 900],
        },
        {
          type: 'bar',
          name: '趣美味',
          data: [600, 508, 720, 890, 1000],
        },
      ],
      dataZoom: [
        // 为x轴设置数据区域缩放组件，这里使用滚动条
        {
          type: "slider",
          show: true,
          start: 0,
          end: 61,
          // xAxisIndex: [0],
          handleSize: "0%", // 不要显示左右的2个滚动条，让可见的数据区域由start与end限定
          height: "15px"  // 数据区域缩放组件高度
        }
      ],
      backgroundColor: "#fff",
      color: ["#ff007f", "lightskyblue", "pink", "purple"],
    };
    // 应用带有数据的配置
    oColumnshowChart.setOption(oColumnshowChartOption);
    return oColumnshowChart;
  }
  let oColumnshowChart = setColumnShow();

  // 当屏幕宽度变化时，重置所有ECHARTS的大小
  $(window).on("resize", function() {
    oCurveShowChart.resize();
    oPieShowChart.resize();
    oColumnshowChart.resize();
  });
});