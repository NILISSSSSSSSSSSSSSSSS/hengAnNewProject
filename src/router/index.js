import Vue from 'vue'
import Router from 'vue-router'
import config from './router'
import store from '@/store'
Vue.use(Router)
let routers = new Router({
  routes: config,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

routers.beforeEach((to, from, next) => {
  console.log(store.state.user.token)
  if (to.meta.needAuth) {
    if (store.state.user.token) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  } else {
    next()
  }
})

export default routers
