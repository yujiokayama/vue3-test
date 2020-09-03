import { createStore } from 'vuex'

export type State = {
  counter: number
}
const state: State = {
  counter: 0
}

export const store = createStore({
  state,
  mutations: {
    updateCount(state, payload) {
      state.counter += payload
    }
  },
  actions: {
    setCount({ commit }, payload) {
      commit('updateCount', payload)
    }
  },
  getters: {
    countDouble(state) {
      return state.counter * 2
    }
  },
  modules: {}
})
