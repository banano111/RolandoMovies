import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import CreateUser from '@/views/CreateUser.vue'
import Dashboard from '@/views/Dashboard.vue'
import MySeries from '@/views/MySeries.vue'

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
  ]
})

export default router
