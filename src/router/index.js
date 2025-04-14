import { createRouter, createWebHistory } from 'vue-router'
import { useProductsStore } from '@/stores/products'

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
  // Mantener compatibilidad con URLs antiguas basadas en ID
  {
    path: '/product/:id(\\d+)', // Asegura que solo coincida con números
    redirect: to => {
      // Inicializar el store
      const productsStore = useProductsStore()
      // Buscar el producto por ID
      const product = productsStore.getProductById(to.params.id)
      
      if (product) {
        // Redirigir a la nueva ruta basada en slug
        return { path: `/perfume/${product.slug}` }
      } else {
        // Si no se encuentra el producto, redirigir a la lista de productos
        return { path: '/' }
      }
    }
  },
  // Rutas nuevas basadas en slug
  {
    path: '/perfume/:slug',
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
  },
  {
    path: '/perfumes/arabes',
    name: 'arabicProducts',
    component: () => import('@/views/ArabicProductsView.vue')
  },
  {
    path: '/bolsos',
    name: 'handbags',
    component: () => import('@/views/HandbagsView.vue')
  },
  {
    path: '/bolso/:slug',
    name: 'handbagDetail',
    component: () => import('@/views/HandbagDetailView.vue'),
    props: true
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