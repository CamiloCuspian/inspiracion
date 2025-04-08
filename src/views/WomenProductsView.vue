<template>
  <div class="women-products">
    <div class="category-banner">
      <div class="container">
        <h1>Perfumes para Mujer</h1>
        <p>Fragancias delicadas que resaltan tu feminidad y elegancia natural</p>
      </div>
    </div>
    
    <div class="container">
      <div class="category-description">
        <p>
          Nuestra exclusiva selección de perfumes femeninos combina las más refinadas 
          esencias florales, frutales y orientales para crear aromas únicos que 
          te acompañarán en cada momento especial de tu vida.
        </p>
      </div>
      
      <div class="products-container">
        <ProductGrid :products="womenProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/product/ProductGrid.vue'

const productsStore = useProductsStore()
const { getWomenProducts: womenProducts } = storeToRefs(productsStore)
</script>

<style scoped>
.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/mujer-bg.avif');
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