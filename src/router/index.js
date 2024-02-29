import { createRouter, createWebHistory } from 'vue-router'
import { menuRouter } from './menuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/SwitchIndex.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'HomePage',
          meta: { title: 'ANYCAT' },
          component: () => import('@/views/HomePage.vue')
        },
        ...menuRouter
      ]
    }
  ]
})

export default router
