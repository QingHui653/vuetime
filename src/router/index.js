import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from '@/router/pager/indexRouter'
import viewRouter from '@/router/pager/viewRouter'
import testRouter from '@/router/pager/testRouter'
import movieRouter from '@/router/pager/movieRouter'
import adminRouter from '@/router/pager/adminRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  /* 接受 数组 */
  routes: [
    ...indexRouter,
    ...viewRouter,
    ...testRouter,
    ...movieRouter,
    ...adminRouter
  ]
})
