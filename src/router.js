import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Interview from './components/Interview.vue'
import Answers from './components/Answers.vue'
import User from './components/User.vue'
import Top from './components/Top.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/interview',
      name: 'interview',
      component: Interview
    },
    {
      path: '/answers/:id',
      name: 'answers',
      component: Answers,
      props:true,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      props:true,
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home,
      props:true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
