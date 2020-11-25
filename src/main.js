import Vue from 'vue'
import App from './App'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import Element from 'element-ui'
import menuContext from '@/components/menuContext'
import subMenu from '@/components/menuContext/subMenu'
import menuContextItem from '@/components/menuContext/menuContextItem'
import router from './router'
import './permission'
import store from './store'



Vue.use(menuContext)
Vue.use(subMenu)
Vue.use(menuContextItem)
Vue.component('menu-context',menuContext)
Vue.component('sub-menu',subMenu)
Vue.component('menu-context-item',menuContextItem)
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
