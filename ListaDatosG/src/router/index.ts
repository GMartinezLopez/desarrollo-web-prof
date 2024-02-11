import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ruta01',
      name: 'ruta01',
      component: () => import('../views/Ruta-01.vue')
    },
    {
      path: '/ruta02',
      name: 'ruta02',
      component: () => import('../views/Ruta-02.vue')
    },
    {
      path: '/ruta03',
      name: 'ruta03',
      component: () => import('../views/Ruta-03.vue')
    },
    {
      path: '/ruta04',
      name: 'ruta04',
      component: () => import('../views/Ruta-04.vue')
    },
    {
      path: '/ruta05',
      name: 'ruta05',
      component: () => import('../views/Ruta-05.vue')
    },
    {
      path: '/ruta06',
      name: 'ruta06',
      component: () => import('../views/Ruta-06.vue')
    },
  ]
})

export default router