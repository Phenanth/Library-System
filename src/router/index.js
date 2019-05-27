import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

import Index from '@/components/index'

import Home from '@/components/home'
import Login from '@/components/login'
import Userinfo from '@/components/userinfo'

import Module from '@/components/module'
import Tips from '@/components/book/tips'
import Ensure from '@/components/book/ensure'
import Success from '@/components/book/success'

import Search from '@/components/search/search'
import Search_detail from '@/components/search/detail'

import VerifyLogin from '@/components/authenticate/verify_login'
import VerifyFirst from '@/components/authenticate/verify_first'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenState)
            if (token) {
              next('/userinfo')
            } else {
              next()
            }
          }
        },
        {
          path: '/verify-login',
          name: 'Verify-Login',
          component: VerifyLogin,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (needAuth) {
              next()
            } else {
              if (token) {
                next('/userinfo')
              } else {
                next('/login')
              }
            }
          }
        },
        {
          path: '/module/:module',
          name: 'Module',
          component: Module, // 用于承载子组件
          redirect: '/module/:module/tips',
          children: [
            {
              path: 'tips',
              component: Tips
            },
            {
              path: 'ensure',
              component: Ensure
            },
            {
              path: 'success',
              component: Success
            }
          ]
        },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/search_detail',
          name: 'Search_detail',
          component: Search_detail
        },
        {
          path: '/verify-first',
          name: 'Verify-First',
          component: VerifyFirst,
          beforeEnter: (to, from, next) => {
            let verify = JSON.parse(store.getters.showTokenState).verify
            if (verify) {
              next('/userinfo')
            } else {
              next()
            }
          }
        },
        {
          path: '/userinfo',
          name: 'Userinfo',
          component: Userinfo,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (token && !needAuth) {
              next()
            } else {
              if (needAuth) {
                next('/verify-login')
              } else {
                next('/login')
              }
            }
          }
        }
      ]
    },
  ]
})
