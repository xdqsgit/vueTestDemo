import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import home from '../views/home.vue'
import view2 from '../views/view2.vue'
import view3 from '../views/view3.vue'

// 引入路由模块并使用它
Vue.use(Router)
/*
创建路由实例并配置路由映射
path:'*',redirect:'/home'
重定向到path是/home的映射
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      meta: {
        requireAuth: true
      },
      component: home,
      children: [
        {
          path: 'view2',
          component: view2
        },
        {
          path: 'view3',
          component: view3
        }
      ]
    },
    {
      path: '/about',
      component: require('../components/About.vue')
    }
  ]
})
