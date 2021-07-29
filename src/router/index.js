/**
 * create by zhangxiang on 2020/12/15 18:01
 * 类注释：
 * 备注：
 */
import Vue from 'vue'
import Router from 'vue-router'

const routers = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['@/views/index.vue'], resolve)
    },
    {
        path: '/demotantan',
        name: 'demotantan',
        component: resolve => require(['@/views/card/demotantan/demotantan.vue'], resolve)
    },
    {
        path: '/demozhihu',
        name: 'demozhihu',
        component: resolve => require(['@/views/card/demozhihu/demozhihu.vue'], resolve)
    },
    {
        path: '/directives',
        name: 'directives',
        component: resolve => require(['@/views/directives/directives.vue'], resolve)
    },
    {
        path: '/form',
        name: 'form',
        component: resolve => require(['@/views/form/index.vue'], resolve)
    },
    {
        path: '/radio',
        name: 'radio',
        component: resolve => require(['@/views/radio/index.vue'], resolve)
    },
    {
        path: '/sign',
        name: 'sign',
        component: resolve => require(['@/views/sign/index.vue'], resolve)
    },
    {
        path: '/table',
        name: 'table',
        component: resolve => require(['@/views/table/index.vue'], resolve)
    },
    {
        path: '/elForm',
        name: 'elForm',
        component: resolve => require(['@/views/el-form/index.vue'], resolve)
    },
    {
        path: '/movie',
        name: 'movie',
        component: resolve => require(['@/views/movie/index.vue'], resolve)
    },
    {
        path: '/calender',
        name: 'calender',
        component: resolve => require(['@/views/calender/calender.vue'], resolve)
    },
    {
        path: '/draggableTest',
        name: 'draggableTest',
        component: resolve => require(['@/views/form/draggableTest.vue'], resolve)
    },
    {
        path: '/qrcode',
        name: 'qrcode',
        component: resolve => require(['@/views/qrcode/index.vue'], resolve)
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: resolve => require(['@/components/mCharts/index.vue'], resolve)
    },
    {
        path: '/animation',
        name: 'animation',
        component: resolve => require(['@/views/anmin/index.vue'], resolve)
    },
    {
        path: '/draggable',
        name: 'draggable',
        component: resolve => require(['@/views/draggable/index.vue'], resolve)
    },
    {
        path: '/clock',
        name: 'clock',
        component: resolve => require(['@/views/clock/index.vue'], resolve)
    },

]
Vue.use(Router)
const vueRouter = new Router({
    routes: routers
})

export default vueRouter
