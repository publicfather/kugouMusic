/**
 * Created by zijinhuren2 on 2018/9/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  menuList: [
  ]
}
const mutations = {
  increment (state) {
    state.count++
    // console.log(state.count)
  },
  addList (state, data) {
    state.menuList.push(data)
  },
  // 初始化数据
  initData (state, data) {
    for (var i = 0; i < data.menuList.length; i++) {
      state.menuList.push(data.menuList[i])
    }
  }
}
const actions = {
  increment: ({
    commit
  }) => {
    commit('increment')
  },
  addList: ({commit}, data) => {
    commit('addList', data)
  },
  initData: ({commit}, data) => {
    commit('initData', data)
  }
}
const getters = {
  count (state) {
    return state.count
  },
  discList (state) {
    return state.menuList
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
