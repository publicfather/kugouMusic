import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home/home'
import recommend from '@/components/Recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }
  ]
})
