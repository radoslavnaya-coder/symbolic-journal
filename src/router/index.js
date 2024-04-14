import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/WithPost.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Cabinet from '../views/Cabinet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Registration
    },
    {
      path: '/cabinet',
      name: 'cabinet',
      component: Cabinet
    }
  ]
})

export default router
