import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/ProductView.vue'),
    props: true
  },
  {
    path: '/perfumes/hombre',
    name: 'menProducts',
    component: () => import('@/views/MenProductsView.vue')
  },
  {
    path: '/perfumes/mujer',
    name: 'womenProducts',
    component: () => import('@/views/WomenProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Siempre vuelve al inicio cuando navegas a una nueva página
    return { top: 0 }
  }
})

export default router