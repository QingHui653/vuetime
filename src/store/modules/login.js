const login = {
  state: {
    user: {
      name: window.localStorage.getItem('user' || '[]') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
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
    },
    jwtlogin (state, token) {
      state.token = token
      window.localStorage.setItem('token', token)
    },
    logout (state) {
      window.localStorage.removeItem('user')
      state.routes = []
    }
  },
  actions: {

  }
}

export default login
