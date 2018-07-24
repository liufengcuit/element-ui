import Vue from 'vue'
import Router from 'vue-router'

import '../style/common.css'

Vue.use(Router)
const basic = r => require.ensure([], () => r(require('@/page/Basic.vue')), 'basic')
const studentScore = r => require.ensure([], () => r(require('@/page/StudentScore.vue')), 'studentScore')
const submenu = r => require.ensure([], () => r(require('@/page/SubMenu.vue')), 'submenu')
const login = r => require.ensure([], () => r(require('@/page/Login.vue')), 'login')
const home = r => require.ensure([], () => r(require('@/page/Home.vue')), 'home')
const userList = r => require.ensure([], () => r(require('@/page/userManager/userList.vue')), 'userList')

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
        name:'菜单一',
        leaf: true,
        component:home,
        children: [
            {
                path: '/basic',
                iconCls: 'el-icon-date',
                component: basic,
                name: '基础组件'
            },
            {
                path:'/studentScore',
                name:'学生表格',
                iconCls: '',
                component:studentScore
            },
            {
                path:'/submenu',
                iconCls: '',
                name:'性别',
                component:submenu
            }
        ]
    },
    {
        path:'/home',
        name:"菜单二",
        leaf: true,
        component:home,
        children: [
            {
                path: '/userlist',
                iconCls: '',
                component: userList,
                name: '用户列表'
            }
        ]
    }
  ]
})
