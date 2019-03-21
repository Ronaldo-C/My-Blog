// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'
import { Icon, Dropdown, DropdownMenu, DropdownItem, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)

Vue.config.productionTip = false
Vue.prototype.router = router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
