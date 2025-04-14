<template>
  <div class="product-view">
    <div class="container">
      
      <div class="breadcrumbs">
        <RouterLink to="/">Inicio</RouterLink> &gt;
        <RouterLink v-if="product" :to="categoryRoute">{{ categoryLabel }}</RouterLink> &gt;
        <span>{{ product?.name || 'Cargando...' }}</span>
      </div>
      
      <div v-if="product" class="product-content">
        <ProductDetail :product="product" />
      </div>
      
      <div v-else class="product-not-found">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.</p>
        <RouterLink to="/" class="btn">Volver al inicio</RouterLink>
      </div>
      
      <!-- Related Products -->
      <div v-if="product && relatedProducts.length > 0" class="related-products section">
        <h2 class="section-title">También te puede interesar</h2>
        <ProductGrid :products="relatedProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import ProductDetail from '@/components/product/ProductDetail.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'

const route = useRoute()
const productsStore = useProductsStore()
const isDevelopment = process.env.NODE_ENV === 'development' || true  // Para depuración

onMounted(() => {
  console.log('ProductView montado con slug:', route.params.slug);
  if (product.value) {
    console.log('Producto encontrado:', product.value.name);
  } else {
    console.log('Producto NO encontrado');
    console.log('Todos los slugs disponibles:', productsStore.products.map(p => p.slug));
  }
});

const product = computed(() => {
  const foundProduct = productsStore.getProductBySlug(route.params.slug);
  
  // Si no encontramos el producto por slug, intentamos buscarlo por ID (para compatibilidad)
  if (!foundProduct && !isNaN(route.params.slug)) {
    return productsStore.getProductById(route.params.slug);
  }
  
  return foundProduct;
})

const categoryRoute = computed(() => {
  if (!product.value) return '/'
  
  const category = product.value.category
  if (category === 'hombre') return '/perfumes/hombre'
  if (category === 'mujer') return '/perfumes/mujer'
  if (category === 'arabe') return '/perfumes/arabes'
  
  return '/'
})

const categoryLabel = computed(() => {
  if (!product.value) return ''
  
  const category = product.value.category
  if (category === 'hombre') return 'Perfumes para Hombre'
  if (category === 'mujer') return 'Perfumes para Mujer'
  if (category === 'arabe') return 'Perfumes Árabes'
  
  return ''
})

// Get 2 related products of same category
const relatedProducts = computed(() => {
  if (!product.value) return []
  
  const sameCategory = productsStore.products.filter(p => 
    p.category === product.value.category && p.id !== product.value.id
  )
  
  // Shuffle array
  const shuffled = [...sameCategory].sort(() => 0.5 - Math.random())
  // Get first 2 items
  return shuffled.slice(0, 2)
})
</script>

<style scoped>
.product-view {
  padding: 2rem 0 4rem;
}

.debug-info {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
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