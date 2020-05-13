import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  TopTittle: ''
}

const mutations = {
  ChangeTopTittle (state, msg) {
    state.TopTittle = msg
  }
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store // 输出
