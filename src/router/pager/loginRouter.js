
// import Home from '@/views/Home'
import Login from '@/views/Login'
const Home = resolve => require(['@/components/admin/common/Home'], resolve)
const DashBoard = resolve => require(['@/components/admin/page/DashBoard'], resolve)

/*export default [
  {
  path: '/',
  name: 'Login',
  component: Login,
  hidden: true
  }
/!* , {
  path: '/home',
  name: '主页',
  component: Home,
  hidden: true,
  meta: {
    requireAuth: true
  }
} *!/
]*/

export default [{
  path: '/',
  component: Home,
  children: [
    {
      path: '',
      component: DashBoard
    }
  ]
}]
