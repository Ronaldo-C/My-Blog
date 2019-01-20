import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import { Icon } from 'element-ui'

Vue.use(Router)
Vue.use(Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
