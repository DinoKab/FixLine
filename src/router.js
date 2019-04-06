import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Drivers from './views/Drivers.vue'
import Partners from './views/Partners.vue'
import CorporativeСlients from './views/CorporativeСlients.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Drivers
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    {
      path: '/corporativeСlients',
      name: 'corporativeСlients',
      component: CorporativeСlients
    },
    
  ],
  mode: 'history'
})
