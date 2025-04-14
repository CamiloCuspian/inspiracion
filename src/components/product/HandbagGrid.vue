<template>
  <div class="product-grid">
    <HandbagCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
    />
  </div>
</template>

<script setup>
import HandbagCard from './HandbagCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>