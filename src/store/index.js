import Vue from 'vue'
import Vuex from 'vuex'

import count from './modules/count'
import login from './modules/login'

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
    login
  }
})

export default store
