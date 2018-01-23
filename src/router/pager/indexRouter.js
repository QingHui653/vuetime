
// import vueIndex from '@/views/pager/vueIndex'
// import helloWorld from '@/components/index/HelloWorld'

const vueIndex = resolve => require(['@/views/pager/vueIndex'], resolve)
const helloWorld = resolve => require(['@/components/index/HelloWorld'], resolve)

export default [{
  path: '/index',
  component: vueIndex,
  children: [{
    path: '',
    component: helloWorld
  }]
}]
