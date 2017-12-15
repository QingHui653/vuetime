
import vueIndex from '@/views/pager/vueIndex'
import helloWorld from '@/components/index/HelloWorld'
export default [{
  path: '/',
  component: vueIndex,
  children: [{
    path: '',
    component: helloWorld
  }]
}]
