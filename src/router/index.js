import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('../views/login/index'), name: 'login', hidden: true },
  { path: '/', redirect: '/login', hidden: true },
  {
    path: '/',
    redirect: '/index',
    hidden: true
  },
      {
        path: '/index',
        component: () => import('../views/device/index'),
        hidden: true
      },
]
export default new Router({
  mode: 'history',
  base:__dirname,
  routes:constantRouterMap
})
