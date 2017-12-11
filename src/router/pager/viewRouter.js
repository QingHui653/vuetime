// vue router 路由 界面
import vueRouter from '@/index/vueRouter'
/* //1.定义路由组建
//可以从其他文件import 进来 */
const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}
/* // 定义user模板组件  */
const User = {
  template: '<div>User {{$route.params.id}}</div>'
}
const User2 = {
  template: '<div class="user"><h2>User {{$route.params.id}}</h2><router-view></router-view></div>'
}
const UserProfile = {
  template: '<div>UserProfile</div>'
}
const UserPosts = {
  template: '<div>UserPosts</div>'
}
const UserNull = {
  template: '<div>UserNull</div>'
}

export default [{
    path: '/view',
    component: vueRouter
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
