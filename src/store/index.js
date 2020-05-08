import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  TopTitle: ''
}

const mutations = {
  ChangeTopTitle (state, msg) {
    state.TopTitle = msg
  }
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store // 输出
