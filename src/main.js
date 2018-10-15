// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VideoPlayer from 'vue-video-player'

import '@/css/iconfont/iconfont.css'
import '@/css/reset.css'
import '@/css/clearfix.css'
import '@/css/animate/animate.min.css'
import 'swiper/dist/css/swiper.css'
import '@/css/animation.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VideoPlayer)
FastClick.attach(document.body)

Vue.use(VueLazyload, {
  preload: 1.3,
  loading: '../assets/images/background.jpg',
  error: '../assets/images/background.jpg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted: function () {
    router.replace({path: '/login/typeOne'})
  }
})
