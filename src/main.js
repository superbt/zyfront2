import Vue from 'vue';
// 整合animate.css动画
import animated from 'animate.css'; // npm install animate.css --save安装，在引入
// 整合animatejs动画0
import anime from 'animejs/lib/anime.es';
// vue片段插件
import { Plugin } from 'vue-fragment';
// 页面入口文件
import App from './App.vue';
// 整合路由
import router from './router';
// 整合全局状态管理
import store from './store';
// 整合elementUI
import './plugins/element';
// 整合layui
import './plugins/layer';
// 暴露uino全局变量
import uino from '#/js/uino';
// 引入接口文件
import api from './common/http/api';
// 引入全局css文件
import '@/assets/style/common.css';
// 引入清除默认的css样式文件
import '@/assets/style/reset.css';

//样式自动调整
import 'lib-flexible'


//引入视频插件
import VueCoreVideoPlayer from 'vue-core-video-player'

//引入高德地图组件
import VueAMap from 'vue-amap';

// 接口请求文件
Vue.prototype.$api = api;
// 使用animate.css
Vue.use(animated);
// 引入animejs动画
Vue.prototype.$anime = anime;

Vue.use(Plugin);
// TODO暂时用这种方式暴露出全局变量 uino 后面放在config.js中暴露出去
window.uino = uino;

Vue.use(VueCoreVideoPlayer,{lang: 'zh-CN'})

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: '1a729c1582d2a2f717240c8c5505d4d0',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});


Vue.config.productionTip = false;

window.vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
