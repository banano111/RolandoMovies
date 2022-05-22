import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import CreateUser from '@/views/CreateUser.vue'
import Dashboard from '@/views/Dashboard.vue'
import MySeries from '@/views/MySeries.vue'
import Search from '@/views/Search.vue'
import MostViews from '@/views/MostViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/mostViews',
      name: 'mostViews',
      component: MostViews
    },
  ]
})

export default router
