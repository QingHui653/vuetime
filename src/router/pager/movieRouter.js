
// import movie from '@/views/movie'
export default [{
  path: '/movie',
  component: resolve => require(['@/views/movie'], resolve)
}]
