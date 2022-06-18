
<template>
    <div class="index">

        <el-scrollbar style="height: 100%;" wrapStyle="overflow-x: hidden;">
                <div v-for="(item,i) in lists" >
                    <div class="innerbox" >
                        <div class="item-title">我是标题 {{i}}</div>
                        <div class="item-content">我是内容{{item.test}}
                            <div v-if="i===0">
                                <StackedChart></StackedChart>
                            </div>
                            <div v-if="i===1">
                               <TrendChart></TrendChart>
                            </div>
                            <div v-if="i===2">
                                <table-level></table-level>
                            </div>
                            <div v-if="i===3">
                                <table-level></table-level>
                            </div>
                            <div v-if="i===4">

                            </div>
                        </div>
                    </div>
               </div>
        </el-scrollbar>

    </div>
</template>

<script>


import TableLevel from '@/components/admin/home/TableLevel.vue';
import TrendChart from '@/components/admin/home/TrendChart.vue';
import StackedChart from '@/components/admin/home/StackedChart.vue';

export default {
    components: { TableLevel , TrendChart,StackedChart  },
    data() {
        return {
            lists:[]
        };
    },
    computed: {},
    watch: {},
    created() {
        this.inittablist();
        console.info(this.lists.length+' this.lists.length created')
    },
    mounted() {
    },
    destroyed() {},
    methods: {
        inittablist(){
            let len = 20 ;
            for (let i=0;i<20;i++){
                this.lists[i]={"test":"test"+i}
            }
        }
    },
};
</script>
<style lang='scss' scoped>
.index {
    width: 100%;
    height: vh(950);

    .innerbox {
        float: left;
        width: calc(50% - 9px);
        height: 100%;
        //height: 700px;
        border-width: 1px;
        border-style: dashed;
        border-color: #889aa4;
        margin-top: 5px;
        margin-left: 5px;
        box-shadow: 1px 1px 1px #888;
    }
}

.item-title {
    height: vh(30);
    font-size: vw(18);
    line-height: vh(30);
    text-align: center;
}

.item-content {
    box-sizing: border-box;
    height: vh(470);
    padding: vh(20) vw(5);
}
</style>
