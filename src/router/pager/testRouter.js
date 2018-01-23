
// import test from '@/components/test/test'
// import test2 from '@/components/test/test2'

const test = resolve => require(['@/components/test/test'], resolve)
const test2 = resolve => require(['@/components/test/test2'], resolve)

export default [{
  path: '/test',
  component: test
}, {
  path: '/test2',
  component: test2
}
]
