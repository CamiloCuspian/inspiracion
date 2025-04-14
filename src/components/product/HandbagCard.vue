<template>
  <div class="product-card card">
    <RouterLink :to="`/perfume/${product.slug}`" class="product-image">
      <img :src="product.image" :alt="product.name" />
      <div class="product-overlay">Ver detalles</div>
    </RouterLink>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price">{{ formattedPrice }}</p>
      <button class="btn product-button" @click="addToCart">
        Añadir al carrito
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const formattedPrice = computed(() => {
  // Mostramos el precio normal en la tarjeta
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(props.product.price.normal)
})

const addToCart = () => {
  cartStore.addToCart(props.product.id)
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  position: relative;
  overflow: hidden;
  height: 250px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.product-image:hover img {
  transform: scale(1.05);
}

.product-image:hover .product-overlay {
  opacity: 1;
}

.product-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.product-price {
  font-weight: 600;
  color: var(--color-pink-dark);
  margin-bottom: 1rem;
}

.product-button {
  margin-top: auto;
  align-self: center;
  width: 100%;
}
</style>