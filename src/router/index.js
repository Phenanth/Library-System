import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'

import Home from '@/components/home'
import Login from '@/components/login'

import Module from '@/components/module'
import Tips from '@/components/book/tips'

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
          path: '/module/:function',
          name: 'Module',
          component: Module,
          redirect: '/module/:function/tips',
          children: [
            {
              path: 'tips',
              component: Tips
            },
            {
              path: 'ensure'
            },
            {
              path: 'success'
            }
          ]
        }
      ]
    },
  ]
})
