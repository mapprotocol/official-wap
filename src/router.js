import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { setTitle } from './libs/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Mobile.vue')
    },
    {
      path: '/m',
      name: 'mobile',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('@/views/Download.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  setTitle()
  next()
})

export default router
