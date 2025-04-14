
<template>
  <div class="product-detail">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>

    <div class="product-info">
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-price">{{ formattedPrice }}</p>
      
      <div class="product-description">
        <p>{{ product.description }}</p>
      </div>
      
      <div class="product-specs">
        <div class="spec-item">
          <h3>Color</h3>
          <p>{{ product.color }}</p>
        </div>
        <div class="spec-item">
          <h3>Material</h3>
          <p>{{ product.material }}</p>
        </div>
        <div class="spec-item">
          <h3>Dimensiones</h3>
          <p>{{ product.dimensions }}</p>
        </div>
      </div>
      
      <div class="product-form">
        <div class="form-group">
          <label>Cantidad:</label>
          <div class="quantity-selector">
            <button @click="decrementQuantity" :disabled="quantity <= 1">-</button>
            <span>{{ quantity }}</span>
            <button @click="incrementQuantity">+</button>
          </div>
        </div>
        
        <button class="btn add-to-cart" @click="addToCart">
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const quantity = ref(1)

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(props.product.price)
})

const incrementQuantity = () => {
  quantity.value++
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addHandbagToCart(props.product.id)
  }
  
  // Reset values after adding to cart
  quantity.value = 1
  
  // Show some feedback
  alert('Bolso añadido al carrito')
}
</script>

<style scoped>
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.product-image {
  border-radius: var(--border-radius);
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.product-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-pink-dark);
  margin-bottom: 1.5rem;
}

.product-description {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.product-specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-pink-light);
  border-radius: var(--border-radius);
}
.spec-item h3 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--color-pink-dark);
}

.spec-item p {
  font-size: 0.9rem;
  margin: 0;
}

.product-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  width: fit-content;
}

.quantity-selector button {
  width: 40px;
  height: 40px;
  background-color: var(--color-gray-light);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.quantity-selector button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-selector span {
  width: 40px;
  text-align: center;
  font-weight: 500;
}

.add-to-cart {
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr;
  }
  
  .product-specs {
    grid-template-columns: 1fr;
  }
}
</style>