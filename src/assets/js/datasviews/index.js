import echarts from 'echarts'
import china from 'echarts/map/js/china.js'

function initbat() {
    var mychart=
        echarts.init(document.querySelector(".bar .chart"));
    var option = {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12"
                },
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12"
                },
                axisLine:{
                    color:"rgba(255,255,255,0.1)"
                },
                splitLine:{
                    lineStyle:{
                        color: "rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle:{
                    barBorderRadius: 5 ,
                }
            }
        ]
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}

function initbat2 (){
    var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]
    var mychart=
        echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            left: '20%',
            right: '22%',
            bottom: '10%',
            top:'0%'
            // containLabel: true
        },
        xAxis: {
         show:false
        },
        yAxis: [{
            type: 'category',
            inverse: true ,
            data: ['HTML5', 'CSS3', 'JAVAScript', 'VUE', 'NODE'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:"#fff"
            }
        },{
            show:true,
            inverse: true ,
            data:[702,350,610,793,664],
            axisLine:{
                show:false
            },
            axisTick:{
                show: false
            },
            axisLabel:{
                textStyle:{
                    fontSize:12,
                    color:"#fff"
                }
            }
        }],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                itemStyle:{
                    barBorderRadius: 20 ,
                    color: function (params){
                        return myColor[params.dataIndex];
                    }
                },
                barCategoryGap: 50,
                barWidth: 10,
                label:{
                    show:true,
                    position: "inside",
                    formatter: "{c}%"
                },
                yAxisIndex: 0 ,
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                data: [100, 100, 100, 100, 100],
                itemStyle:{
                    color:"none",
                    borderColor:"#00c1de",
                    borderWith:3 ,
                    barBorderRadius: 15
                },
                yAxisIndex: 1 ,
            }
        ]
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}

function initline(index){
    let myData = yearData[0].data
    if(index!=''&&index!=null){
        myData = yearData[index].data
    }

    var mychart=
        echarts.init(document.querySelector(".line .chart"));
    var option = {
        color:["#00f2f1","#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['Email', 'Union Ads'],
            textStyle:{
                color:'#4c9bfd',
            },
            right:'10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:"20%",
            containLabel: true ,
            show:true ,
            borderColor: '#012f4a',

        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2','3','4','5','6','7','8','9','10','11','12'],
            axisTick:{
              show:false
            },
            axisLabel:{
                color:"#4c9bfd"
            },
            axisLine:{
                show:false
            },
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false
            },
            axisLabel:{
                color:"#4c9bfd"
            },
            axisLine:{
                show:false
            },
            splitLine:{
                lineStyle:{
                    color:"#012f4a"
                }
            }
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                data: myData[0],
                smooth:true
            },
            {
                name: 'Union Ads',
                type: 'line',
                // data: [40, 64,191,324,290,330,310,213,180,200,180,79],
                data: myData[1],
                smooth:true
            },
        ]
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}

function initLine2(){

    var xData =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ,21,22,23,24,25,26,27,28,29,30];
    var yData1 = [1,22,3,4,65,6,7,8,9,110,161,12,103,14,15,116,17,8,19,20
        ,21,212,123,24,425,26,127,28,29,130];
    var yData2 = [100,2,3,14,5,6,7,8,9,101,121,12,13,414,15,16,17,218,19,20
        ,21,22,283,24,25,126,27,218,29,130];
    var mychart=
        echarts.init(document.querySelector(".line2 .chart"));

    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle:{
                color:"rgba(255,255,255,0.5)",
                fontSize:"12"
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            top:"30",
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xData,
                axisLabel:{
                    textStyle:{
                        color:"rgba(255,255,255,0.6)",
                        fontSize: 12 ,
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.2)",
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:false ,
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.1)",
                    }
                },
                axisLabel:{
                  textStyle:{
                      color:"rgba(225,255,255,0.6)",
                      fontSize:12
                  }
                },
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                data: yData1,
                smooth:true,
                lineStyle:{
                    color:"#0184d5",
                    width: 2
                },
                areaStyle:{
                    color:new echarts.graphic.LinearGradient(
                        0,0,0,0,1,
                        [
                            {offset:0, color:"rgba(1,132,213,0.4)"},
                            {offset: 1,color:"rgba(1,132,213,0.1)"}
                        ],
                        false
                    ),
                    shadowColor:"rgba(0,0,0,0.1)"
                },
                symbol:"circle",
                symbolSize: 5 ,
                itemStyle:{
                    color:"#0184d5",
                    borderColor:"rgba(221,220,107,0.1)" ,
                    borderWidth:12
                },
                showSymbol:false

            },
            {
                name: 'Union Ads',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: yData2,
                smooth:true,
                lineStyle:{
                    color:"#00d887",
                    width: 2
                },
                areaStyle:{
                    color:new echarts.graphic.LinearGradient(
                        0,0,0,0,1,
                        [
                            {offset:0, color:"rgba(0,216,135,0.9)"},
                            {offset: 1,color:"rgba(0,216,135,0.1)"}
                        ],
                        true
                    ),
                    shadowColor:"rgba(0,0,0,0.1)",
                },
                symbol:"circle",
                symbolSize: 5 ,
                itemStyle:{
                    color:"#00d887",
                    borderColor:"rgba(221,220,107,0.1)" ,
                    borderWidth:12
                },
                showSymbol:false
            }
        ]
    };

    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}

function initpie(){
    var myColor = ['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'];
    var mychart=
        echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color:myColor,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}:{c}({d}%)"
        },
        legend: {
            bottom: '0%',
            left:"0%",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                color:"rgba(255,255,255,0.5)",
                fontSize:"12"
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                center:["50%","50%"],
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    //position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: '0岁以下' },
                    { value: 4, name: '20-29岁' },
                    { value: 2, name: '30-39岁' },
                    { value: 2, name: '40-49岁' },
                    { value: 1, name: '50岁以上' }
                ]
            }
        ]
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}
function initPie2(){
    var myColor = ["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8","#32c5e9","#1d9dff"];
    var mychart=
        echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
      color:myColor,
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom:'0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle:{
                color:"rgba(255,255,255,0.5)",
                fontSize:"12"
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Area Mode',
                type: 'pie',
                radius: [15, 45],
                center: ['50%', '40%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label:{
                 fontSize:10
                },
                labelLineL:{
                    length:6 ,
                    length2:8
                },

                data: [
                    { value: 30, name: 'rose 1' },
                    { value: 28, name: 'rose 2' },
                    { value: 26, name: 'rose 3' },
                    { value: 24, name: 'rose 4' },
                    { value: 22, name: 'rose 5' },
                    { value: 20, name: 'rose 6' },
                    { value: 18, name: 'rose 7' },
                    { value: 16, name: 'rose 8' }
                ]
            }
        ]
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
};

function initMap(){
    console.log("zhe shi zem l 1")
    var mychart=
        echarts.init(document.querySelector(".myChartBox"));
    console.log("zhe shi zem l 2")

    var color = ['#46bee9'];
    var series = [];
    var res = [];
    var lineData = [
        {
            "val":32,
            "blat":31.57,
            "blon":120.3,
            "elat":23.05,
            "elon":113.75,
            "bcitysim":"无锡市",
            "ecitysim":"东莞市"
        },];

    for (var i = 0; i < lineData.length; i++) {
        res.push({
            fromName:lineData[i].bcitysim,
            toName:lineData[i].ecitysim,
            coords: [
                [lineData[i].blon,lineData[i].blat],
                [lineData[i].elon, lineData[i].elat]
            ],
            count:lineData[i].val
        });

    }
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    series.push({
        name: '',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            constantSpeed: 20,
            symbol: planePath,
            symbolSize: 10,
            trailLength: 0,
        },
        tooltip:{
            formatter:function(param){
                return param.data.fromName+'>'+param.data.toName+'<br>趟次：'+param.data.count
            }
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#58B3CC'
                }, {
                    offset: 1, color: '#F58158'
                }], false),
                width: 2,
                opacity: 0.5,
                curveness: 0.1
            }
        },
        data: res
    },
    /* {

     type: 'map',
     mapType: 'china',
     top:'20%',
     tooltip:{
         show:false
     },
     itemStyle: {
         areaColor: '#00196d',
         borderColor: '#0a53e9'
     },
     emphasis:{
         label:{
             show:false
         },
         itemStyle:{
             areaColor: '#00196d',
             borderColor: '#0a53e9'
         }
     }
    }*/);
   var  option = {
      //  backgroundColor: '#010347',
        legend: {
            show: true,
            selected: {},
            x: 'left',
            orient: 'vertical',
            textStyle: {
                color: 'white'
            },
            data: []
        },
        tooltip : {
            trigger: 'item',
            show : true,
        },
        geo: {
            zoom:1.2,
            map: 'china',
            label: {
                show:false
            },
            top:'20%',
            roam: true,
            itemStyle: {
                areaColor: '#142957',
                borderColor: '#195BB9',
                // shadowColor: '#1773c3',
                // shadowBlur: 20
            }
        },
        series: series
    };
    mychart.setOption(option);
    window.addEventListener('resize',function (){
        mychart.resize();
    })
}
var yearData = [
    {year:'2020',
    data:[
        [1,3,13,4,5,56,7,8,79,10,11,112],
        [10,13,33,24,51,6,17,28,19,10,21,32]
    ]
    },
    {year:'2021',
        data:[
            [10,23,13,24,25,56,17,80,19,110,12,32],
            [11,133,3,214,51,12,37,28,19,10,11,12]
        ]
    }
]

export {initbat,initbat2,initline,initLine2,initpie,initPie2,initMap}


