import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'

import Home from '@/components/home'
import Login from '@/components/login'

import Module from '@/components/module'
import Tips from '@/components/book/tips'
import Ensure from '@/components/book/ensure'
import Success from '@/components/book/success'

import Search from '@/components/search'
import Search_detail from '@/components/search_detail'

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
          component: Login
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
        }
      ]
    },
  ]
})
