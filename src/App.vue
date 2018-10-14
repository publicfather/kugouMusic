<template>
  <div id="app">
    <img class="bg" src="static/images/background8.jpg">
    <div class="router">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <!--
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    -->
    <transition
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
    >
      <div class="shade" v-show="isShadeShow">
        <div class="msg">{{loginMsg}}</div>
        <i class="iconfont icon-tuichu" @click="isShadeShow=false"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import getMvList from './api/getMvList'
import {ERR_OK} from './api/config'
import axios from 'axios'
export default {
  name: 'App',
  data: function () {
    return {
      mvlist: [],
      loginMsg: '登陆失败',
      isShadeShow: false
    }
  },
  components: {
  },
  mounted: function () {
    // this._getMvList()
    this.$router.beforeEach((to, from, next) => {
      if (to.path === '/home/user') {
        // this.checkLogin()
        if (this.$store.state.isLogin === false) {
          this.isShadeShow = true
          next(false)
        } else {
          next()
        }
      } else {
        next()
      }
      if (to.path === '/user/typeOne') {
        // this.checkLogin()
        this.$store.commit('updateUsername', '')
        this.$store.commit('updatePassword', '')
      }
    })
    this.getData()
    /*
    this.$router.beforeEach((to, from, next) => {
      next()
    }) */
  },
  methods: {
    _getMvList () {
      getMvList({lan: 'neidi'}).then((res) => {
        if (res.code === ERR_OK) {
          this.mvlist = res.data.mvlist
          this.$store.commit('initMvList', this.mvlist)
        }
      })
    },
    // 获取页面所需数据，并存入vuex状态树
    getData () {
      // 此处要先存this？？？
      var _this = this
      axios.get('/static/mock/list.json')
        .then(function (res) {
          if (res.data.ret) {
            _this.$store.dispatch('initData', res.data)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    checkLogin () {
      axios.get('/static/mock/users.json')
        .then((res) => {
          if (res.data.ret) {
            res = res.data.users
            for (var i = 0; i < res.length; i++) {
              console.table(res[i].username)
              if (res[i].username === this.$store.state.curUser.username && res[i].password === this.$store.state.curUser.password) {
                this.$store.state.isLogin = true
                break
              } else {
                this.$store.state.isLogin = false
              }
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped >
html, body{
  width: 100%;
  height: 100%;
  font-family: 华文楷体 华文行楷;
  #app{
    width: 100%;
    height: 100%;
    .bg{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -99;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      filter: blur(3px);
    }
    .router{
      width: 100%;
      height: 100%;
    }
    .shade{
      font-size: 14px;
      background: rgba(0, 0, 0, 0.7);
      color: #000;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .msg{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -25px;
        color: #fff;
      }
      i{
        display: block;
        width: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        position: absolute;
        bottom: 30px;
        cursor: pointer;
      }
    }
    .bg-bubbles{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -52;
      li{
        position: absolute;
        bottom: -160px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.15);
        list-style: none;
        animation: square 15s infinite;
        transition-timing-function: linear;
        border-radius: 50%;
        &:nth-child(1){
          left: 10%;
        }
        &:nth-child(2){
          left: 20%;
          width: 90px;
          height: 90px;
          animation-delay: 2s;
        }
        &:nth-child(3){
          left: 25%;
          animation-delay: 4s;
        }
        &:nth-child(4){
          width: 20px;
          height: 20px;
          left: 40px;
          animation-delay: 8s;
          background: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(5){
          left: 70%;
        }
        &:nth-child(6){
          left: 80%;
          width: 60px;
          height: 60px;
          animation-delay: 3s;
          background: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(7){
          left: 55%;
          width: 16px;
          height: 16px;
          animation-delay: 3s;
          animation-duratin: 15s;
        }
        &:nth-child(8){
          left: 32%;
          width: 44px;
          height: 44px;
          animation-delay: 3s;
          background: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(9){
          left: 32%;
          width: 80px;
          height: 80px;
          animation-delay: 3s;
          animation-duration: 12s;
          background: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(10){
          left: 85%;
          width: 30px;
          height: 30px;
          animation-delay: 5s;
        }
      }
    }
  }
}
#app{
  //background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
}
</style>
