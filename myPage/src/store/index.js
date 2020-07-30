import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: {}
  },
  mutations: {
    saveUser(state, payload){
      state.user = payload.data
    }
  },
  actions: {
  },
  modules: {
  }
})
