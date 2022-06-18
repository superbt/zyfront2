
import Vue from 'vue';
import Router from 'vue-router';
import test1 from '@/components/test1.vue';
// FIXME 增加路由懒加载 配置路由分组打包
import Index from '@/components/admin/home/Index.vue';
import TableLevel from '@/components/admin/home/TableLevel.vue';
import TableCustomize from '@/components/admin/home/TableCustomize.vue';
import TrendChart from '@/components/admin/home/TrendChart.vue';
import StackedChart from '@/components/admin/home/StackedChart.vue';
import FormCommon from '@/components/admin/home/FormCommon.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Slot from './views/Slot.vue';
import Bubble from './views/Bubble.vue';
import Earth from './views/Earth.vue';
import Patch from './views/Patch.vue';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            showMenu: true,
            redirect: '/index',
            meta: {
                icon: 'el-icon-home',
            },
            children: [
                {
                    path: '/index',
                    name: '首页',
                    component: Index,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-document',
                        keepAlive: false,
                    },
                },
                {
                    path: '/funmenu',
                    name: '功能菜单',
                    component: Patch,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [
                        {
                            path: '/funmenu/table',
                            name: '表格组件',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-marketing',
                            },
                            component: Patch,
                            children: [
                                {
                                    path: '/funmenu/table/level',
                                    name: '多级表头',
                                    component: TableLevel,
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-s-data',
                                        keepAlive: true,
                                    },
                                },
                                {
                                    path: '/funmenu/table/customize',
                                    name: '自定义列',
                                    component: TableCustomize,
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-c-scale-to-original',
                                        keepAlive: false,
                                    },
                                },
                            ],
                        },
                        {
                            path: '/funmenu/charts',
                            name: '图表组件',
                            showMenu: true,
                            component: Patch,
                            meta: {
                                icon: 'el-icon-pie-chart',
                            },
                            children: [
                                {
                                    path: '/funmenu/charts/trend',
                                    name: '趋势图',
                                    component: TrendChart,
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-set-up',
                                        keepAlive: false,
                                    },
                                },
                                {
                                    path: '/funmenu/charts/stacked',
                                    name: '堆叠柱状图',
                                    component: StackedChart,
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-odometer',
                                        keepAlive: true,
                                    },
                                },
                            ],
                        },
                        {
                            path: '/funmenu/form',
                            name: '常用表单',
                            showMenu: true,
                            component: FormCommon,
                            meta: {
                                icon: 'el-icon-bell',
                                keepAlive: false,
                            },
                        },
                    ],
                },
                {
                    path: '/others',
                    name: '其他菜单',
                    component: Patch,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [
                        {
                            path: '/about',
                            name: 'about',
                            component: About,
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-marketing',
                            },
                            // 嵌套路由 一般用法 在views下面的组件中写上 <router-view></router-view>
                            children: [
                                // 当 /user/:id 匹配成功，
                                // UserHome 会被渲染在 User 的 <router-view> 中
                                {
                                    path: '/about/test',
                                    component: test1,
                                    name: 'test',
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-s-data',
                                        keepAlive: true,
                                    },

                                },
                                // ...其他子路由

                            ],
                        },
                        {
                            path: '/login',
                            component: Login,
                            name: '登录',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },

                        },
                        // slot插槽
                        {
                            path: '/slot',
                            component: Slot,
                            name: 'slot',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },
                        },
                        //冒泡机制
                        {
                            path: '/bubble',
                            component: Bubble,
                            name: 'bubble',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },
                        },
                        //地球
                        {
                            path: '/Earth',
                            component: Earth,
                            name: 'Earth',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },
                        },
                    ]
                },{
                    path: '/myTest',
                    name: '我的测试工作',
                    component: Patch,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [
                        {
                            path: '/MyVuePlay',
                            component: MyVuePlay,
                            name: 'MyVuePlay',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            }
                        }, //MyMap
                        {
                            path: '/MapTest',
                            component: Patch,
                            name: 'MapTest',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },
                            children: [{
                                path: '/MyMap',
                                component: MyMap,
                                name: 'MyMap',
                                showMenu: true,
                                meta: {
                                    icon: 'el-icon-s-data',
                                    keepAlive: true,
                                },
                            },
                            {
                                path: '/AmapTest',
                               // component: ()=>import('@/test/AmapTest'),
                                name: 'AmapTest',
                                showMenu: true,
                                meta: {
                                    icon: 'el-icon-s-data',
                                    keepAlive: true,
                                },
                            },

                            ]
                        }, //MyMap
                        {
                            path: '/dataViews',
                            component: Patch,
                            name: '数据可视化',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-data',
                                keepAlive: true,
                            },
                            children: [{
                                path: '/BigViews',
                                component: ()=>import('@/test/BigViews'),
                                name: 'BigViews',
                                showMenu: true,
                                meta: {
                                    icon: 'el-icon-s-data',
                                    keepAlive: true,
                                },
                            },

                            ]
                        }, //MyMap
                    ]
                },{
                    path: '/myBussess',
                    name: '我的业务',
                    component: Patch,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [{
                        path: '/financial',
                         component: ()=>import('@/bussess/financial/Index'),
                        name: 'financial-财务',
                        showMenu: true,
                        meta: {
                            icon: 'el-icon-s-order',
                            keepAlive: true,
                        },
                    },
                    {
                        path: '/knowledge',
                        component: ()=>import('@/bussess/knowledge/Index'),
                        name: 'knowledge-知识',
                        showMenu: true,
                        meta: {
                            icon: 'el-icon-s-platform',
                            keepAlive: true,
                        },
                    },
                    {
                        path: '/remorse',
                        component: ()=>import('@/bussess/remorse/Index'),
                        name: 'remorse-不开心',
                        showMenu: true,
                        meta: {
                            icon: 'el-icon-s-data',
                            keepAlive: true,
                        },
                    },
                    {
                        path: '/work',
                        component: ()=>import('@/bussess/work/Index'),
                        name: 'work-工作',
                        showMenu: true,
                        meta: {
                            icon: 'el-icon-s-cooperation',
                            keepAlive: true,
                        },
                    }
                    ]
                }
            ],
        },

        {
            path: '/loginfrist',
            name: 'login',
            component: Login,
            showMenu: false,
        },
        // slot插槽
        {
            path: '/slot',
            name: 'slot',
            component: Slot,
            showMenu: false,
        },
        // vue 事件冒泡捕获机制
        {
            path: '/bubble',
            name: 'bubble',
            showMenu: false,
            component: Bubble,
        },
        // 引入cesium地球
        {
            path: '/earth',
            name: 'earth',
            showMenu: false,
            component: Earth,
        },
        //ces-leftmenu
        {
            path: '/ConfirmDialog',
            name: 'ConfirmDialog',
            showMenu: false,
            component: ConfirmDialog,
        },
        {
            path: '/financial/lists',
            component: ()=>import('@/bussess/financial/Lists'),
            name: 'financial-财务',
            showMenu: true,
            meta: {
                icon: 'el-icon-s-order',
                keepAlive: true,
            },
        },
        {
            path: '/financial/chars',
            component: ()=>import('@/bussess/financial/FinChars'),
            name: 'financial-财务',
            showMenu: true,
            meta: {
                icon: 'el-icon-s-order',
                keepAlive: true,
            },
        },
        {
            path: '/test/BigViews',
            component: ()=>import('@/test/BigViews'),
            name: '大视图',
            showMenu: true,
            meta: {
                icon: 'el-icon-s-order',
                keepAlive: true,
            },
        },
    ],
});

import ConfirmDialog from '@/components/admin/common/ConfirmDialog';
import MyVuePlay from '@/test/video'
import MyMap from '@/test/MyMap'
// const login = false;

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//     // 判断登录状态,登录的跳转 未登录的跳转到登录页面
//     // 判断登录状态
//     if (!login && to.path !== '/login') {
//         next({ path: '/login' });
//     } else {
//         next();
//     }
// });
export default router;
