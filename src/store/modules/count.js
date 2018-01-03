const count = {
  state: {
    count: 10,
    inputNum: '',
    outputNum: '',
    resultNum: ''
  },
  mutations: {
    // 格式：类型(名字)+处理函数
    // 加1
    INPUTEVENT (state, value) {
      state.inputNum += value
      state.outputNum = value
    },
    // 加
    INCREMENT (state, value) {
      state.inputNum += '+1'
      state.outputNum++
    },
    // 减
    DECREMENT (state, value) {
      state.inputNum += '-1'
      state.outputNum--
    },
    // 结果
    RESULTEVENT (state) {
      state.resultNum = state.outputNum
      console.log(state.resultNum)
    }
  },
  actions: {
    inputevent ({commit}, value) {
      commit('INPUTEVENT', value)
    },
    increment ({commit}, value) {
      commit('INCREMENT', value)
    },
    decrement ({commit}, value) {
      commit('DECREMENT', value)
    },
    resultevent ({commit}) {
      commit('RESULTEVENT')
    }
  }
}

export default count
