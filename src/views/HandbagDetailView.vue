<template>
  <div class="handbag-view">
    <div class="container">
      <div class="breadcrumbs">
        <RouterLink to="/">Inicio</RouterLink> &gt;
        <RouterLink to="/bolsos">Bolsos</RouterLink> &gt;
        <span>{{ product?.name || 'Cargando...' }}</span>
      </div>
      
      <div v-if="product" class="product-content">
        <HandbagDetail :product="product" />
      </div>
      
      <div v-else class="product-not-found">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el bolso que estás buscando no existe o ha sido eliminado.</p>
        <RouterLink to="/" class="btn">Volver al inicio</RouterLink>
      </div>
      
      <!-- Related Products -->
      <div v-if="relatedProducts.length > 0" class="related-products section">
        <h2 class="section-title">También te puede interesar</h2>
        <HandbagGrid :products="relatedProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import HandbagDetail from '@/components/product/HandbagDetail.vue'
import HandbagGrid from '@/components/product/HandbagGrid.vue'

const route = useRoute()
const productsStore = useProductsStore()

const product = computed(() => {
  return productsStore.getProductById(route.params.id)
})

// Get 2 related products
const relatedProducts = computed(() => {
  if (!product.value) return []
  
  const otherHandbags = productsStore.getHandbags.filter(p => p.id !== product.value.id)
  
  // Shuffle array
  const shuffled = [...otherHandbags].sort(() => 0.5 - Math.random())
  // Get first 2 items
  return shuffled.slice(0, 2)
})
</script>

<style scoped>
.handbag-view {
  padding: 2rem 0 4rem;
}

.breadcrumbs {
  margin-bottom: 2rem;
  color: var(--color-gray-medium);
}

.breadcrumbs a {
  color: var(--color-gray-medium);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumbs a:hover {
  color: var(--color-primary);
}

.product-not-found {
  text-align: center;
  padding: 3rem;
}

.product-not-found h2 {
  margin-bottom: 1rem;
}

.product-not-found p {
  margin-bottom: 2rem;
}

.related-products {
  margin-top: 4rem;
}
</style>