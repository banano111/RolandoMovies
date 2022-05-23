import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import CreateUser from '@/views/CreateUser.vue'
import Dashboard from '@/views/Dashboard.vue'
import MySeries from '@/views/MySeries.vue'
import Search from '@/views/Search.vue'
import MostViews from '@/views/MostViews.vue'
import SerieDetail from '@/views/SerieDetail.vue'

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: CreateUser
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/mySeries',
      name: 'mySeries',
      component: MySeries
    },
    {
      path: '/search/:id?',
      name: 'search',
      component: Search
    },
    {
      path: '/mostViews',
      name: 'mostViews',
      component: MostViews
    },
    {
      path: '/series/:id',
      name: 'seriesDetail',
      component: SerieDetail
    },

  ]
})

export default router
