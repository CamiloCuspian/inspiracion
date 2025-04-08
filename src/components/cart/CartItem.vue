<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <img :src="item.image" :alt="item.name" />
    </div>
    
    <div class="cart-item-info">
      <h3 class="cart-item-title">{{ item.name }}</h3>
      <p class="cart-item-concentration">
        Concentración: 
        <span :class="['concentration-badge', item.concentration]">{{ concentrationLabel }}</span>
      </p>
      <p class="cart-item-price">{{ formattedPrice }}</p>
    </div>
    
    <div class="cart-item-quantity">
      <button @click="updateQuantity(item.quantity - 1)" class="quantity-btn">-</button>
      <span>{{ item.quantity }}</span>
      <button @click="updateQuantity(item.quantity + 1)" class="quantity-btn">+</button>
    </div>
    
    <div class="cart-item-total">
      {{ formattedTotal }}
    </div>
    
    <button @click="removeItem" class="remove-btn">
      <span class="material-icons">close</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const cartStore = useCartStore()

const concentrationLabel = computed(() => {
  return props.item.concentration === 'alta' ? 'Alta' :
         props.item.concentration === 'normal' ? 'Normal' : 'Baja'
})

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(props.item.price)
})

const formattedTotal = computed(() => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(props.item.price * props.item.quantity)
})

const updateQuantity = (newQuantity) => {
  if (newQuantity <= 0) {
    if (confirm('¿Deseas eliminar este producto del carrito?')) {
      cartStore.removeFromCart(props.index)
    }
  } else {
    cartStore.updateQuantity(props.index, newQuantity)
  }
}

const removeItem = () => {
  if (confirm('¿Estás seguro de que deseas eliminar este producto del carrito?')) {
    cartStore.removeFromCart(props.index)
  }
}
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 80px 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-gray-light);
  background-color: var(--color-white-pure);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--color-gray-light);
}

.cart-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-title {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--color-gray-dark);
}

.cart-item-concentration {
  color: var(--color-gray-medium);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.concentration-badge {
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
}

.concentration-badge.alta {
  background-color: var(--color-pink-dark);
  color: white;
}

.concentration-badge.normal {
  background-color: var(--color-pink-primary);
  color: var(--color-gray-dark);
}

.concentration-badge.baja {
  background-color: var(--color-pink-light);
  color: var(--color-gray-dark);
}

.price-modifier {
  font-size: 0.8rem;
  color: var(--color-gray-medium);
}

.cart-item-price {
  font-weight: 600;
  color: var(--color-gray-dark);
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-pink-light);
  color: var(--color-gray-dark);
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-btn:hover {
  background-color: var(--color-pink-primary);
}

.cart-item-total {
  font-weight: 700;
  color: var(--color-pink-dark);
}

.remove-btn {
  background: none;
  border: none;
  color: var(--color-gray-medium);
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.remove-btn:hover {
  color: #ff5252;
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
    grid-template-areas:
      "image info"
      "image quantity"
      "total total"
      "remove remove";
    gap: 0.5rem;
  }
  
  .cart-item-image {
    grid-area: image;
  }
  
  .cart-item-info {
    grid-area: info;
  }
  
  .cart-item-quantity {
    grid-area: quantity;
    justify-content: flex-start;
  }
  
  .cart-item-total {
    grid-area: total;
    margin-top: 0.5rem;
  }
  
  .remove-btn {
    grid-area: remove;
    justify-self: end;
  }
}
</style>