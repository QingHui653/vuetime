
// import test from '@/components/test/test'
// import test2 from '@/components/test/test2'
export default [{
  path: '/test',
  component: resolve => require(['@/components/test/test'], resolve)
}, {
  path: '/test2',
  component: resolve => require(['@/components/test/test2'], resolve)
}
]
