// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/css/iconfont/iconfont.css'
import '@/css/reset.css'
import '@/css/clearfix.css'
import '@/css/animate/animate.min.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
