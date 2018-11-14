
// import Home from '@/views/Home'
import Login from '@/views/Login'
// const Home = resolve => require(['@/views/pager/Home'], resolve)

export default [{
  path: '/',
  name: 'Login',
  component: Login,
  hidden: true
}/* , {
  path: '/home',
  name: '主页',
  component: Home,
  hidden: true,
  meta: {
    requireAuth: true
  }
} */
]
