<template>
  <div id="app">
    <img class="bg" src="static/images/background6.jpg">
    <index-header></index-header>
    <div class="router">
      <keep-alive>
        <transition
          name="router-transition"
          enter-active-class="animated zoomInUp"
          leave-active-class="animated zoomOutDown"
        >
          <router-view/>
        </transition>
      </keep-alive>
    </div>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from '@/components/header'
import IndexFooter from '@/components/footer'
import getSongs from './api/getSongs'
import {ERR_OK} from './api/config'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    IndexHeader,
    IndexFooter
  },
  mounted: function () {
    // this._getSongs()
    this.getData()
  },
  methods: {
    _getSongs () {
      getSongs().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.code)
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
    }
  }
}
</script>

<style lang="scss" scoped >
@import "./css/varibles.scss";
html, body{
  width: 100%;
  height: 100%;
}
#app{
  //background: rgba(255, 255, 255, 0.1);
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
    padding-top: .01rem;
    overflow: scroll;
    position: absolute;
    top: $IndexHeaderHeight;
    bottom: 64px;
    padding-bottom: 64px;
    width: 100%;
  }
}
</style>
