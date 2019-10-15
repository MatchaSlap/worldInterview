import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
      // meta: { scrollToTop: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    // const scroll = {}
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      // position.selector = to.hash
      position.x=0;
      position.y=1000

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    return position

    // return goTo(scrollTo)
  },  
})
