<template>
  <div class="handbags">
    <div class="category-banner">
      <div class="container">
        <h1>Bolsos de Mano</h1>
        <p>Elegancia y estilo para complementar tu look</p>
      </div>
    </div>
    
    <div class="container">
      <div class="category-description">
        <p>
          Descubre nuestra colección de bolsos de mano diseñados para combinar estilo y funcionalidad. 
          Desde clutches elegantes para ocasiones especiales hasta prácticos bolsos tote para el día a día, 
          encontrarás la pieza perfecta para complementar cualquier outfit.
        </p>
      </div>
      
      <div class="products-container">
        <HandbagGrid :products="handbags" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import HandbagGrid from '@/components/product/HandbagGrid.vue'

const productsStore = useProductsStore()
const { getHandbags: handbags } = storeToRefs(productsStore)
</script>

<style scoped>
.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/handbags-banner.avif');
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