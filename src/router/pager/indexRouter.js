
import vueIndex from '@/views/pager/vueIndex'
import helloWorld from '@/components/index/HelloWorld'
export default [{
  path: '/index',
  component: vueIndex,
  children: [{
    path: '',
    component: helloWorld
  }]
}]
