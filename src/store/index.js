import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  TopTittle: '',
  fullPath: '/'
}

const mutations = {
  ChangeTopTittle (state, msg) {
    state.TopTittle = msg
  },

  ChangeFullPath (state, msg) {
    state.fullPath = msg
  }
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store // 输出
