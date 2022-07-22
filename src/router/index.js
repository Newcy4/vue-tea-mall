import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My')
  },
  {
    path: '/search',
    // name: 'Search',
    component: () => import('../views/Search'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/Search/Search-index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/Search/Search-list.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
