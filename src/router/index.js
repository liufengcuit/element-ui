import Vue from 'vue'
import Router from 'vue-router'



import '../style/common.css'

Vue.use(Router)
const basic = r => require.ensure([], () => r(require('@/page/Basic.vue')), 'basic')
const studentScore = r => require.ensure([], () => r(require('@/page/StudentScore.vue')), 'studentScore')
const submenu = r => require.ensure([], () => r(require('@/page/SubMenu.vue')), 'submenu')
const login = r => require.ensure([], () => r(require('@/page/Login.vue')), 'login')
const home = r => require.ensure([], () => r(require('@/page/Home.vue')), 'home')

export default new Router({
  routes: [
    {
        path:'/',
        name:'login',
        component:login
    },
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/home',
        name:'home',
        component:home,
        children: [
            {
                path: '/basic',
                iconCls: '',
                component: basic,
                name: '基础组件'
            },
            {
                path:'/studentScore',
                name:'studentScore',
                iconCls: 'fa fa-info-circle',
                component:studentScore
            },
            {
                path:'/submenu',
                name:'submenu',
                component:submenu
            }
        ]
    }
  ]
})
