import {getRequest,mock} from './api'
import {Message} from 'element-ui'

export const isNotNullORBlank = (...args) => {
  for (var i = 0; i < args.length; i++) {
    var argument = args[i]
    if (argument == null || argument === '' || argument === undefined) {
      Message.warning({message: '数据不能为空!'})
      return false
    }
  }
  return true
}
export const initMenu = (router, store) => {
  if (store.state.login.routes.length > 0) {
    return
  }
  // getRequest('/sysmenu').then(resp => {
  mock('/src/mock/sysMenu.json').then(resp => {
    if (resp && resp.status === 200) {
      var fmtRoutes = formatRoutes(resp.data)
      router.addRoutes(fmtRoutes)
      store.commit('initMenu', fmtRoutes)
    }
  })
}
export const formatRoutes = (routes) => {
  let fmRoutes = []
  routes.forEach(router => {
    let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
    } = router
    if (children && children instanceof Array) {
      children = formatRoutes(children)
    }
    // 参考 https://github.com/lenve/vhr
    // 一开始 就全部加载路由
    // vuex 设置 左侧 菜单 跳转的 url
    let fmRouter = {
      path: path,
      /* component (resolve) {
        require(['../components/' + component + '.vue'], resolve)
        if (component.startsWith('Home')) {
          require(['../components/' + component + '.vue'], resolve)
        } else if (component.startsWith('Emp')) {
          require(['../components/emp/' + component + '.vue'], resolve)
        } else if (component.startsWith('Per')) {
          require(['../components/personnel/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sal')) {
          require(['../components/salary/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sta')) {
          require(['../components/statistics/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sys')) {
          require(['../components/system/' + component + '.vue'], resolve)
        }
      }, */
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children
    }
    fmRoutes.push(fmRouter)
  })
  return fmRoutes
}
