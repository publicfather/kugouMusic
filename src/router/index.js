import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login/login.vue'
import TypeOne from '@/components/Login/TypeOne'
import TypeTwo from '@/components/Login/TypeTwo'
import regist from '@/components/Regist/regist'
import home from '@/components/home.vue'
import user from '@/components/User/user'
import recommend from '@/components/Recommend/recommend'
import songs from '@/components/Recommend/songs'
import zhibo from '@/components/Recommend/zhibo'
import disc from '@/components/Recommend/disc'
import information from '@/components/Recommend/information'
import mv from '@/components/Mv/mv.vue'
import MvList from '@/components/Mv/MvList.vue'
import MvPlayer from '@/components/Mv/MvPlayer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        {
          path: 'typeOne',
          name: 'TypeOne',
          component: TypeOne
        },
        {
          path: 'typeTwo',
          name: 'TypeTwo',
          component: TypeTwo
        }
      ]
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'user',
          name: 'user',
          component: user
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend,
          redirect: '/home/recommend/songs',
          children: [
            {
              path: 'songs',
              component: songs
            },
            {
              path: 'zhibo',
              component: zhibo
            },
            {
              path: 'disc',
              component: disc
            },
            {
              path: 'information',
              component: information
            }
          ]
        },
        {
          path: 'mv',
          component: mv,
          redirect: '/home/mv/mvlist',
          children: [
            {
              path: 'mvlist',
              component: MvList
            },
            {
              path: 'vid',
              name: 'MvPlayer',
              component: MvPlayer
            }
          ]
        },
        {
          path: 'sing',
          component: {
            template: `
              <div>sing</div>
            `
          }
        }
      ]
    }
  ]
})
