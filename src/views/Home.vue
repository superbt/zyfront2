<!--
 * @Description:
 * @Author: xbtw
 * @Date: 2019-08-18 18:59:06
 -->
<template>
    <div class="home">
        <Header></Header>   <!-- <router-view name="header"></router-view> -->
        <div class="main">
            <LeftMenu></LeftMenu>  <!-- <router-view name="leftmenu"></router-view> -->
            <RightContent></RightContent>  <!-- <router-view> -->
        </div>
        <div class="foot">
                <Foot></Foot>
        </div>
    </div>
</template>

<script>
import LeftMenu from '@/components/admin/common/LeftMenu.vue';
import RightContent from '@/components/admin/common/RightContent.vue';
import Header from '@/components/admin/common/Header.vue';
import Foot from '@/views/Foot';

export default {
    name: 'home',
    components: {
        LeftMenu,
        RightContent,
        Header,
        Foot,
    },
    data() {
        return {
        };
    },
    created() {
        // 拿到默认的路由对象,保存全局变量
        this.initTabList();
    },
    computed: {
        // 当前所在模块
        menuModule() {
            return this.$store.state.menuModule;
        },
        // 标签栈
        tabList() {
            return this.$store.state.tabList;
        },
    },
    methods: {
        /**
        *@description: 保存默认的当前模块的首页的路由对象
        *@param{}
        *@return:
        */
        initTabList() {
             //console.log("this.$route.path"+this.$route.path);
            // 获取匹配到的路由对象
            const firstRoute =
                this.$router.options.routes.filter(item => item.name === this.menuModule)[0];
            //console.log("this.menuModule:"+this.menuModule);
            // 循环该路由对象的children
            const { redirect } = firstRoute;
           // console.log("redirect:"+redirect);
            if (firstRoute && redirect) {
                const saveRoute = firstRoute.children.filter(item => item.path === redirect)[0];
                if (saveRoute) {
                    this.tabList.push(saveRoute);
                    this.$store.commit('tabList', this.tabList);
                }
            }
        },

    },
};
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;

    .main {
        display: table;
        table-layout: fixed;
        width: 100%;
        height: 90%;
    }

    .foot {
        display: table;
        table-layout: fixed;
        width: 100%;
        height: 10%;
        background-color: #889aa4;
    }
}
</style>
