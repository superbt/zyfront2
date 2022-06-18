
<template>
    <div class="header">
        <div class="control el-icon-d-arrow-left" @click="control">展开</div>
        <div class="control el-icon-d-arrow-right" @click="logout">退出</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
        };
    },
    computed: {
        // 左侧菜单是否收起
        isCollapse() {
            return this.$store.state.isCollapse;
        },
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
         control() {
             this.$store.commit('isCollapse', !this.isCollapse);
         },
         logout(){
             this.$store.state.tabList = [] ;
             this.$router.push({ path: "/loginfrist" });
         }
    },
};
</script>
<style lang='scss' scoped>
    .header {
        width: 100%;
        height: 50px;
        background: cadetblue;

        .control {
            position: relative;
            top: 9px;
            left: 200px;
            width: 60px;
            height: 30px;
        }
    }
</style>
