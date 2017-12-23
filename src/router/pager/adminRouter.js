
import Home from '@/components/admin/common/Home'
import TodoList from '@/components/admin/todoList/TodoList'

export default [{
  path: '/',
  component: Home,
  children: [{
    path: '',
    component: TodoList
  }, {
    path: '/TodoList',
    component: TodoList
  }
  ]
}]
