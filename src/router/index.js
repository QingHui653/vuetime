import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'

Vue.use(Router)

/* //1.定义路由组建
//可以从其他文件import 进来 */
const Foo = {
  template: '<div>foo</div>'
};
const Bar = {
  template: '<div>bar</div>'
};
/* //这里只定义了一个user模板组件 */
const User = {
  template: '<div>User {{$route.params.id}}</div>'
};
const User2 = {
  template: '<div class="user"><h2>User {{$route.params.id}}</h2><router-view></router-view></div>'
};
const UserProfile = {
  template: '<div>UserProfile</div>'
};
const UserPosts = {
  template: '<div>UserPosts</div>'
};
const UserNull = {
  template: '<div>UserNull</div>'
}
export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /* 1.不带参数路由 */
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    /* 2.带参数路由 */
    {
      path: '/user/:id',
      component: User
    },
    /* 3.嵌套路由 */
    {
      path: '/user2/:id',
      component: User2,
      children: [{
          path: '',
          component: UserNull
      },
      {
          path: 'profile',
          component: UserProfile
      },
      {
          path: 'posts',
          component: UserPosts
      }
      ]
    }
  ]
})
