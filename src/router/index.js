import Vue from 'vue'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'

import '../style/common.css'

Vue.use(Router)
const basic = r => require.ensure([], () => r(require('@/page/Basic.vue')), 'basic')
const studentScore = r => require.ensure([], () => r(require('@/page/StudentScore.vue')), 'studentScore')

export default new Router({
  routes: [
    {
    	path:'/basic',
    	name:'basic',
    	component:basic
    },
    {
    	path:'/studentScore',
    	name:'studentScore',
    	component:studentScore
    }
  ]
})
