
// import Home from '@/components/admin/common/Home'

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

const Home = resolve => require(['@/components/admin/common/Home'], resolve)

const DashBoard = resolve => require(['@/components/admin/page/DashBoard'], resolve)
const EditorPage = resolve => require(['@/components/admin/page/EditorPage'], resolve)
const MarkdownPage = resolve => require(['@/components/admin/page/MarkdownPage'], resolve)
const AmCharts = resolve => require(['@/components/admin/page/BasicCharts'], resolve)

const FormInput = resolve => require(['@/components/admin/page/FormInput'], resolve)
const FormSubmit = resolve => require(['@/components/admin/page/FormSubmit'], resolve)
const FormLayouts = resolve => require(['@/components/admin/page/FormLayouts'], resolve)
const BasicTables = resolve => require(['@/components/admin/page/BasicTables'], resolve)
const TodoList = resolve => require(['@/components/admin/page/TodoListPage'], resolve)

const Internation = resolve => require(['@/components/admin/international/international'], resolve)
const Map = resolve => require(['@/components/admin/map/map'], resolve)
const Count = resolve => require(['@/components/admin/count/count'], resolve)

const Role = resolve => require(['@/components/admin/role/role'], resolve)

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
      path: '/FormSubmit',
      component: FormSubmit
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
    }, {
      path: '/Role',
      component: Role
    }
  ]
}]
