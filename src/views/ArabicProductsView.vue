<template>
  <div class="arabic-products">
    <div class="category-banner">
      <div class="container">
        <h1>Perfumes Árabes</h1>
        <p>Fragancias exóticas con ingredientes de lujo de Oriente Medio</p>
      </div>
    </div>
    
    <div class="container">
      <div class="category-description">
        <p>
          Nuestra exclusiva colección de perfumes árabes ofrece aromas intensos y perdurables, 
          elaborados con ingredientes preciosos como el oud, el ámbar y las especias exóticas. 
          Descubre la magia de Oriente en cada gota.
        </p>
      </div>
      
      <div class="products-container">
        <ProductGrid :products="arabicProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/product/ProductGrid.vue'

const productsStore = useProductsStore()
const { getArabicProducts: arabicProducts } = storeToRefs(productsStore)
</script>

<style scoped>
.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/arabic-banner.avif');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 0; 
  text-align: center;
}

.category-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.category-banner p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
}

.category-description {
  max-width: 800px;
  margin: 3rem auto;
  text-align: center;
  line-height: 1.6;
}

.products-container {
  margin-bottom: 3rem;
}
</style>