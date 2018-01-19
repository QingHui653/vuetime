
import Login from '@/views/Login'
import Home from '@/views/Home'
export default [{
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
}
]
