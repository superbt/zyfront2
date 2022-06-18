<template>
    <div class="foot-main">
<!--        <span class="demonstration">默认 Hover 指示器触发</span>-->
<!--        <el-carousel height="40px">-->
<!--            <el-carousel-item   v-for="item in 4" :key="item">-->
<!--                <h3 class="small">{{ item }}</h3>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->
        <span style="color: white; font-style: normal;">all right by xbtw</span>
    </div>
</template>

<script>
export default {
    name: 'Foot',
    data() {
        return {
            item:['1','2','3']
        };
    },
};
</script>

<style scoped>
.foot-main {
    align-content: center;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    text-align: center;
}

.el-carousel__item h3 {
    margin: 0;
    color: #475669;
    opacity: 0.75;
    font-size: 14px;
    line-height: 150px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
