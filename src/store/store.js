/**
 * Created by zijinhuren2 on 2018/9/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  menuList: [
  ],
  mvList: [],
  playQueue: [],
  user: [
    {
      username: '2643291886',
      password: '123'
    },
    {
      username: '123',
      password: '123'
    },
    {
      username: '1234',
      password: '123'
    }
  ],
  curUser: {
    username: '',
    password: ''
  },
  isLogin: false
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
  },
  // 添加曲目到播放队列
  addToQueue (state, data) {
    state.playQueue.push(data)
  },
  // mv列表数据初始化
  initMvList (state, data) {
    state.mvList.push(data)
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
  },
  addToQueue: ({commit}, data) => {
    commit('addToQueue', data)
  }
}
const getters = {
  count (state) {
    return state.count
  },
  discList (state) {
    return state.menuList
  },
  curUser (state) {
    return state.curUser
  },
  mvList (state) {
    return state.mvList
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
