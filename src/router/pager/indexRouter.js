
// import vueIndex from '@/views/pager/vueIndex'
// import helloWorld from '@/components/index/HelloWorld'
export default [{
  path: '/index',
  component: resolve => require(['@/views/pager/vueIndex'], resolve),
  children: [{
    path: '',
    component: resolve => require(['@/components/index/HelloWorld'], resolve)
  }]
}]
