import ProjetLaravelVue from '@/components/ProjetLaravel.vue'
import ContactVue from '@/views/Contact.vue'
import ProjetsVue from '@/views/Projets.vue'
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
      path: '/contact',
      name: 'contact',
      component: ContactVue
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetsVue,
      children: [
        {
          path:'laravel',
          component: ProjetLaravelVue,
        },
      ]
    },
  ]
})

export default router
