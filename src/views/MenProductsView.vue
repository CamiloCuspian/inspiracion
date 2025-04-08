<template>
  <div class="men-products">
    <div class="category-banner">
      <div class="container">
        <h1>Perfumes para Hombre</h1>
        <p>Descubre fragancias que expresan carácter, elegancia y distinción</p>
      </div>
    </div>
    
    <div class="container">
      <div class="category-description">
        <p>
          Nuestra colección de perfumes para hombre está diseñada para aquellos que 
          buscan expresar su personalidad y estilo a través de aromas únicos. 
          Desde fragancias frescas y deportivas hasta las más intensas y sofisticadas.
        </p>
      </div>
      
      <div class="products-container">
        <ProductGrid :products="menProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/product/ProductGrid.vue'

const productsStore = useProductsStore()
const { getMenProducts: menProducts } = storeToRefs(productsStore)
</script>

<style scoped>
.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/men-banner.jpg');
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