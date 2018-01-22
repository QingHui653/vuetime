
import Home from '@/components/admin/common/Home'

// import DashBoard from '@/components/admin/page/DashBoard'
// import EditorPage from '@/components/admin/page/EditorPage'
// import MarkdownPage from '@/components/admin/page/MarkdownPage'
// import AmCharts from '@/components/admin/page/BasicCharts'

// import FormInput from '@/components/admin/page/FormInput'
// import FormLayouts from '@/components/admin/page/FormLayouts'
// import BasicTables from '@/components/admin/page/BasicTables'
// import TodoList from '@/components/admin//page/TodoListPage'

// import Internation from '@/components/admin/international/international'
// import Map from '@/components/admin/map/map'
// import Count from '@/components/admin/count/count'

// import Role from '@/components/admin/role/role'

export default [{
  path: '/admin',
  component: Home,
  children: [
    /* {
    path: '',
    component: DashBoard
  },  */
    {
      path: '/DashBoard',
      component: resolve => require(['@/components/admin/page/DashBoard'], resolve)
    }, {
      path: '/EditorPage',
      component: resolve => require(['@/components/admin/page/EditorPage'], resolve)
    }, {
      path: '/MarkdownPage',
      component: resolve => require(['@/components/admin/page/MarkdownPage'], resolve)
    }, {
      path: '/BasicCharts',
      component: resolve => require(['@/components/admin/page/BasicCharts'], resolve)
    }, {
      path: '/FormInput',
      component: resolve => require(['@/components/admin/page/FormInput'], resolve)
    }, {
      path: '/FormLayouts',
      component: resolve => require(['@/components/admin/page/FormLayouts'], resolve)
    }, {
      path: '/BasicTables',
      component: resolve => require(['@/components/admin/page/BasicTables'], resolve)
    }, {
      path: '/TodoList',
      component: resolve => require(['@/components/admin//page/TodoListPage'], resolve)
    }, {
      path: '/Internation',
      component: resolve => require(['@/components/admin/international/international'], resolve)
    }, {
      path: '/Map',
      component: resolve => require(['@/components/admin/map/map'], resolve)
    }, {
      path: '/Count',
      component: resolve => require(['@/components/admin/count/count'], resolve)
    }, {
      path: '/Role',
      component: resolve => require(['@/components/admin/role/role'], resolve)
    }
  ]
}]
