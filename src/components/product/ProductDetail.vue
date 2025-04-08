<template>
  <div class="product-detail">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>

    <div class="product-info">
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-price">
        {{ formattedPrice }}
      </p>
      
      <div class="product-description">
        <p>{{ product.description }}</p>
      </div>
      
      <div class="product-notes">
        <div class="note-group">
          <h3>Notas de Salida</h3>
          <p>{{ product.topNotes }}</p>
        </div>
        <div class="note-group">
          <h3>Notas de Corazón</h3>
          <p>{{ product.middleNotes }}</p>
        </div>
        <div class="note-group">
          <h3>Notas de Fondo</h3>
          <p>{{ product.baseNotes }}</p>
        </div>
      </div>
      
      <div class="product-form">
        <div class="form-group">
          <label>Concentración:</label>
          <div class="concentration-options">
            <button 
              v-for="option in concentrationOptions" 
              :key="option.value"
              :class="['concentration-option', { 'active': concentration === option.value }]"
              @click="concentration = option.value"
            >
              {{ option.label }}
              <span class="price-modifier">{{ option.priceModifier }}</span>
            </button>
          </div>
          <p class="concentration-info">El precio varía según la concentración seleccionada</p>
        </div>
        
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
const concentration = ref('normal')

const concentrationOptions = [
  { 
    value: 'baja', 
    label: 'Baja', 
    priceModifier: props.product ? new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(props.product.price.baja) : '' 
  },
  { 
    value: 'normal', 
    label: 'Normal', 
    priceModifier: props.product ? new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(props.product.price.normal) : '' 
  },
  { 
    value: 'alta', 
    label: 'Alta', 
    priceModifier: props.product ? new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(props.product.price.alta) : '' 
  }
]

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(props.product.price[concentration.value])
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
    cartStore.addToCart(props.product.id, concentration.value)
  }
  
  // Reset values after adding to cart
  quantity.value = 1
  concentration.value = 'normal'
  
  // Show some feedback
  alert('Producto añadido al carrito')
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-change {
  font-size: 0.9rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
}

.price-change.alta {
  background-color: var(--color-pink-dark);
  color: white;
}

.price-change.baja {
  background-color: var(--color-gray-light);
  color: var(--color-gray-dark);
}

/* Animación para el cambio de precio */
.price-change-enter-active, .price-change-leave-active {
  transition: all 0.3s;
}
.price-change-enter-from, .price-change-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.product-description {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.product-notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-pink-light);
  border-radius: var(--border-radius);
}

.note-group h3 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--color-pink-dark);
}

.note-group p {
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

.concentration-options {
  display: flex;
  gap: 1rem;
}

.concentration-option {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius);
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.concentration-option .price-modifier {
  font-size: 0.8rem;
  color: var(--color-gray-medium);
  margin-top: 0.25rem;
}

.concentration-info {
  font-size: 0.9rem;
  color: var(--color-gray-medium);
  margin-top: 0.75rem;
  font-style: italic;
}

.concentration-option.active {
  background-color: var(--color-pink-primary);
  border-color: var(--color-pink-dark);
  color: var(--color-gray-dark);
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
  
  .product-notes {
    grid-template-columns: 1fr;
  }
}
</style>