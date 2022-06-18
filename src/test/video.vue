<template>
<div>
     hello vue-core-video-player {{srcDatas[0].src}}
    <div>
        <div class="my-player-container">
            <vue-core-video-player @play="your_method" :src="srcDatas[0].src"></vue-core-video-player>
        </div>
        <div class="my-player-container">
            <vue-core-video-player @play="your_method" :src="srcDatas[1].src"></vue-core-video-player>
        </div>
    </div>


</div>
</template>

<script>
export default {
    name: 'video',
    components: {},
    data() {
        return {
            // 登录信息
            srcDatas: [{
               // name:'ces',src:'@/assets/videos/exmp/login-video.mp4'
                name:'ces',src:require("../assets/videos/exmp/login-video.mp4"),
            },{
                name:'ces',src:require("../assets/videos/exmp/login-video-1.mp4")
            }],

        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        your_method(){
           // alert('hello');
        }
    },

};


</script>


<style scoped>

.my-player-container {
    float: left;
    width: 500px;
    height: 400px;
    margin-left: 5px;
}

</style>

