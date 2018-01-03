
import Home from '@/components/admin/common/Home'

import DashBoard from '@/components/admin/page/DashBoard'
import EditorPage from '@/components/admin/page/EditorPage'
import MarkdownPage from '@/components/admin/page/MarkdownPage'
import AmCharts from '@/components/admin/page/BasicCharts'

import FormInput from '@/components/admin/page/FormInput'
import FormLayouts from '@/components/admin/page/FormLayouts'
import BasicTables from '@/components/admin/page/BasicTables'
import TodoList from '@/components/admin//page/TodoListPage'

import Internation from '@/components/admin/international/international'
import Map from '@/components/admin/map/map'
import Count from '@/components/admin/count/count'

export default [{
  path: '/',
  component: Home,
  children: [{
    path: '',
    component: DashBoard
  }, {
    path: '/DashBoard',
    component: DashBoard
  }, {
    path: '/EditorPage',
    component: EditorPage
  }, {
    path: '/MarkdownPage',
    component: MarkdownPage
  }, {
    path: '/BasicCharts',
    component: AmCharts
  }, {
    path: '/FormInput',
    component: FormInput
  }, {
    path: '/FormLayouts',
    component: FormLayouts
  }, {
    path: '/BasicTables',
    component: BasicTables
  }, {
    path: '/TodoList',
    component: TodoList
  }, {
    path: '/Internation',
    component: Internation
  }, {
    path: '/Map',
    component: Map
  }, {
    path: '/Count',
    component: Count
  }
  ]
}]
