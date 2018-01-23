
// import movie from '@/views/movie'
const movie = resolve => require(['@/views/movie'], resolve)

export default [{
  path: '/movie',
  component: movie
}]
