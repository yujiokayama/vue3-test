import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    updateCount(state, payload) {
      state.count = payload
    }
  },
  actions: {
    setCount({ commit }, payload) {
      commit('updateCount', payload)
    }
  },
  getters: {
    countDouble(state) {
      return state.count * 2
    }
  },
  modules: {}
})
