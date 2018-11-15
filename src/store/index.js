import Vue from 'vue'
import Vuex from 'vuex'

import count from './modules/count'
import login from './modules/login'
import tabs from './modules/tabs'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
        //
  },
  mutations: {
        //
  },
  actions: {

  },
  modules: {
    count,
    login,
    tabs
  }
})

export default store
