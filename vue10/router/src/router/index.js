import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '@/views/IntroPage.vue'
import BusinessPage from '@/views/BusinessPage.vue'

const routes = [
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage,
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
