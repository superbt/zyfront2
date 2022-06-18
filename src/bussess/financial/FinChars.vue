<template>
<div class="finchar-main">

    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="日历" name="first">
            <el-calendar v-model="value">
            </el-calendar>
        </el-tab-pane>
        <el-tab-pane label="图标" name="second">图表管理</el-tab-pane>
        <el-tab-pane label="幻灯" name="third">
            <template>
                <el-carousel autoplay="true" :interval="4000" type="card" height="400px">
                    <el-carousel-item v-for="(item,index) in threeArr" :key="index">
                        <h3 class="medium">{{ index }}<hr>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </el-tab-pane>
    </el-tabs>


</div>
</template>

<script>
export default {
    name: 'FinChars',
    data() {
        return {
            value: new Date(),
            activeName: 'second',
            threeArr:['NIHAO1','NIHAO2','NIHAO3','NIHAO4','NIHAO5','NIHAO6','NIHAO7']
        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped>
.finchar-main {
    width: 100%;
    height: 100%;
}

.el-carousel__item h3 {
    margin: 0;
    color: #475669;
    opacity: 0.75;
    font-size: 14px;
    line-height: 200px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

</style>
