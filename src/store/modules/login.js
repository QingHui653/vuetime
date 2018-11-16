const login = {
  state: {
    user: {
      // 展示时 不需要 登陆界面
      // name: window.localStorage.getItem('user' || '[]') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      name: window.localStorage.getItem('user' || '[]') == null ? '已登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      userface: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userface
    },
    routes: [],
    token: window.localStorage.getItem('token' || '[]') == null ? '' : window.localStorage.getItem('token')
  },
  mutations: {
    initMenu (state, menus) {
      state.routes = menus
    },
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
      window.sessionStorage.setItem('user', JSON.stringify(user))
    },
    jwtlogin (state, token) {
      state.token = token
      window.localStorage.setItem('token', token)
    },
    logout (state) {
      window.localStorage.removeItem('user')
      window.sessionStorage.removeItem('user')
      state.routes = []
    }
  },
  actions: {

  }
}

export default login
