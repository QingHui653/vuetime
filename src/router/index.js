/* 配置 各页面所使用的 路由js */
import Vue from 'vue'
import Router from 'vue-router'
import {initMenu} from '@/utils/utils'
import store from '@/store/index'
import indexRouter from '@/router/pager/indexRouter'
import viewRouter from '@/router/pager/viewRouter'
import testRouter from '@/router/pager/testRouter'
import movieRouter from '@/router/pager/movieRouter'
import adminRouter from '@/router/pager/adminRouter'
import loginRouter from '@/router/pager/loginRouter'

import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

// 路由配置
const RouterConfig = {
  // mode: 'history',
  // base: __dirname,
  routes: [
    /* {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    }, {
      path: '/home',
      name: '主页',
      component: Home,
      hidden: true,
      meta: {
        requireAuth: true
      }
    }, */
    ...indexRouter,
    ...viewRouter,
    ...testRouter,
    ...movieRouter,
    ...adminRouter,
    ...loginRouter
  ]
}

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  console.info('全局前置 守卫')
  console.info(to)
  console.info(from)
  if (to.path === '/') {
    next()
  }
  var name = store.state.login.user.name
  if (name === '未登录') {
    if (to.meta.requireAuth || to.name == null) {
      next({path: '/', query: {redirect: to.path}})
    } else {
      next()
    }
  } else {
    initMenu(router, store)
    next()
  }
})

// 全局前置 守卫
// 在此处 判断 是否登陆 是否拥有权限
// router.beforeEach((to, from, next) => {
//   console.info('全局前置 守卫')
//   console.info(to)
//   console.info(from)
//   // 这里需要 判断条件 进行跳转 不然会一直进行 循环
//   if (to.path === '/DashBoard') {
//     console.info('next')
//     next({
//       path: '/DashBoard'
//     })
//   }
//   // 这里很 关键 进入下一个钩子
//   next()
// })

// 全局 后置 守卫
// 在此处 可以保存 状态 vuex store
router.afterEach((to) => {
  console.info('全局后置 守卫')
  // Util.openNewPage(router.app, to.name, to.params, to.query);
  // iView.LoadingBar.finish();
  window.scrollTo(0, 0)
})
