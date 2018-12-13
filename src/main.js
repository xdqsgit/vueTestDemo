// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as util from './utils/util'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$ajax = Axios

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    var uName = util.getCookie('Uname')
    if (!uName) {
      // 登 陆
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
