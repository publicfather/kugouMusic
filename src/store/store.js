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
  // 轮播图数据
  recommendList: [],
  playQueue: {
    isHidden: true,
    data: [
      {
        src: 'static/music/夜的钢琴曲.mp3',
        name: '夜的钢琴曲',
        singer: '未知',
        isActive: true
      },
      {
        src: 'static/music/群星 - 舞随光动.mp3',
        name: '舞随光动',
        singer: '群星',
        isActive: false
      },
      {
        src: 'static/music/Age Of Echoes - Endless Horizon.mp3',
        name: 'Endless Horizon',
        singer: 'Age Of Echoes',
        isActive: false
      },
      {
        src: 'static/music/Bandari - 卡伐蒂纳.mp3',
        name: '卡伐蒂纳',
        singer: 'Bandari',
        isActive: false
      },
      {
        src: 'static/music/S.E.N.S. - Refrain.mp3',
        name: 'Refrain',
        singer: 'S.E.N.S.',
        isActive: false
      },
      {
        src: 'static/music/找幸福给你.mp3',
        name: '找幸福给你',
        singer: '飞轮海',
        isActive: false
      },
      {
        src: 'static/music/沈华夏 - 蓝色天际.mp3',
        name: '蓝色天际',
        singer: '沈华夏',
        isActive: false
      },
      {
        src: 'static/music/王心如 - 坏天气好心情.mp3',
        name: '坏天气好心情',
        singer: '王心如',
        isActive: false
      }
    ]
  },
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
  },
  // mv列表数据初始化
  initRecommendList (state, data) {
    state.recommendList.push(data)
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
  },
  recommendList (state) {
    return state.recommendList[0]
  },
  playQueen (state) {
    return state.playQueue
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
