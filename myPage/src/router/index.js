import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Warning from '../views/Warning.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/warning',
    name: 'warning',
    component: Warning,
  },
]

const router = new VueRouter({
  routes
})

export default router
