import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from '@/router/pager/indexRouter'
import viewRouter from '@/router/pager/viewRouter'
import testRouter from './pager/testRouter'

Vue.use(Router)

export default new Router({
  /* 接受 数组 */
  routes: [
    ...indexRouter,
    ...viewRouter,
    ...testRouter
  ]
})
