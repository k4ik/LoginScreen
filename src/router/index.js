import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'sign up',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot password',
      component: () => import('../views/ForgotPasswordView.vue')
    }
  ]
})

export default router
