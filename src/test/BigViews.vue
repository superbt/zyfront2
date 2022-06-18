<template>
    <div class="mybody">
        Hello
        <div class="myheader">
            <h1 class="h1">数据可视化-ECharts</h1>
            <div class="showTime">当前时间：{{ showTime }}</div>
        </div>
        <section class="mainbox">
            <div class="column">
                <div class="panel bar">
                    <h2>柱形图-就业行情</h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel line">
                    <h2>柱形图-就业人员
                        <a @click="clickline(0)" >2020</a>
                        <a @click="clickline(1)">2021</a>
                    </h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie">
                    <h2>柱形图-就业行情</h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
            </div>
            <div class="column">
            <div class="no">
                <div class="no-hd" >
                    <ul>
                        <li>123456</li>
                        <li>100000</li>
                    </ul>
                </div>
                <div class="no-bd" >
                    <ul>
                        <li>前端需求人数</li>
                        <li>市场供应人数</li>
                    </ul>
                </div>
                <div class="map">
                    <div class="map1"></div>
                    <div class="map2"></div>
                    <div class="map3"></div>
                    <div class="myChartBox"></div>
                </div>
            </div>
            </div>
            <div class="column">
                <div class="panel bar2">
                    <h2>柱形图-就业行情</h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel line2">
                    <h2>柱形图-人员变化
                    </h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie2">
                    <h2>柱形图-就业行情</h2>
                    <div class="chart">图表</div>
                    <div class="panel-footer"></div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import { initbat ,initbat2 ,initline,initLine2,initpie,initPie2,initMap
} from '../assets/js/datasviews/index'
export default {
    name: 'BigViews',
    data(){
        return {
            timer:null ,
            showTime:'',
        }
    },
    methods:{
        clickline(index){
           initline(index)

        },
        showgetTimes(){
          this.timer =  setInterval(this.getTimes,1000);
        },
        getTimes(){
            var temdatatimes = '' ;
            var dt = new Date();
            var y = dt.getFullYear();
            var mt = dt.getMonth()+1;
            var day = dt.getDate();
            var h = dt.getHours();
            var m = dt.getMinutes();
            var s = dt.getSeconds();
            var mm = dt.getMilliseconds() ;
            temdatatimes =  y+"年"+mt+"月"+day+"日"+"-"+h+"时"+m+"分"+s+"秒"+mm+"毫秒"
            this.showTime = temdatatimes ;
            return temdatatimes;
        }
    },
    computed:{
        showTimefc(){
            var t = null ;
            return this.getTimes();
        }
    },
    created() {
        this.showgetTimes()
    },
    mounted() {
        initbat();
        initbat2();
        initline();
        initLine2();
        initpie();
        initPie2();
        initMap();
    },
    destroyed() {
        clearInterval(this.timer)
    }
};

</script>


<style  lang="less" scoped >
@import "../assets/style/datasviews/index.less";
</style>

<style>
body {
    background:
        url(../assets/img/datasviews/body.png)
        no-repeat top center;
    background-size: 100% 100%;
}

.main {
    width: 100%;
}
</style>
