<template>
<div>
     hello，this is mymap amap
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
</div>
</template>

<script>

//高德key 1a729c1582d2a2f717240c8c5505d4d0
import { lazyAMapApiLoaderInstance } from 'vue-amap';

export default {
    name: 'MyMap',
    data(){
        return{
            msg:'vue-amp 你好'
        }
    },
    methods:{
        initMyMap(){
            lazyAMapApiLoaderInstance.load().then(() => {
                // your code ...

                this.map = new AMap.Map('amapContainer', {
                    center: new AMap.LngLat(241.59996, 31.197646)
                });
            });
        }
    },
    mounted() {
    }


};




</script>

<style scoped>
.bm-view {
    width: 100%;
    height: 500px;
}

.amap-wrapper {
    width: 500px;
    height: 500px;
}
</style>
