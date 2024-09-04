import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mbappe from '../views/Mbappe.vue'
import CR7 from '../views/CR7.vue'
import Messi from '../views/Messi.vue'
import Haaland from '../views/Haaland.vue'
import Neymar from '../views/Neymar.vue'
import Musiala from '../views/Musiala.vue'
import Pedri from '../views/Pedri.vue'
import Jude from '../views/Jude.vue'
import Rudiger from '../views/Rudiger.vue'
import Diaz from '../views/Diaz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cr7',
      name: 'cr7',
      component: CR7
    },
    {
      path: '/messi',
      name: 'messi',
      component: Messi
    },
    {
      path: '/mbappe',
      name: 'mbappe',
      component: Mbappe
    },
    {
      path: '/haaland',
      name: 'haaland',
      component: Haaland
    },
    {
      path: '/neymar',
      name: 'neymar',
      component: Neymar
    },
    {
      path: '/musiala',
      name: 'musiala',
      component: Musiala
    },
    {
      path: '/pedri',
      name: 'pedri',
      component: Pedri
    },
    {
      path: '/jude',
      name: 'jude',
      component: Jude
    },
    {
      path: '/rudiger',
      name: 'rudiger',
      component: Rudiger
    },
    {
      path: '/diaz',
      name: 'diaz',
      component: Diaz
    },
  ]
})

export default router
