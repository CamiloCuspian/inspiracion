<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="cart-title">Tu Carrito</h1>
      
      <div v-if="cartItems.length > 0" class="cart-content">
        <div class="cart-items">
          <div class="cart-header">
            <span class="header-product">Producto</span>
            <span class="header-price">Precio</span>
            <span class="header-quantity">Cantidad</span>
            <span class="header-total">Total</span>
            <span class="header-remove"></span>
          </div>
          
          <CartItem 
            v-for="(item, index) in cartItems" 
            :key="`${item.id}-${item.concentration}-${index}`"
            :item="item"
            :index="index"
          />
        </div>
        
        <div class="cart-sidebar">
          <CartSummary />
        </div>
      </div>
      
      <div v-else class="cart-empty">
        <div class="empty-cart-placeholder">
          <span class="material-icons">shopping_cart</span>
        </div>
        <h2>Tu carrito está vacío</h2>
        <p>¡Parece que aún no has añadido ningún producto a tu carrito!</p>
        <RouterLink to="/" class="btn">Seguir comprando</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

const cartStore = useCartStore()
const { items: cartItems } = storeToRefs(cartStore)

// Debug de carrito
console.log('CartView renderizado', cartItems.value)
</script>

<style scoped>
.cart-view {
  padding: 2rem 0 4rem;
}

.cart-title {
  margin-bottom: 2rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
}

.cart-header {
  display: grid;
  grid-template-columns: 80px 2fr 1fr 1fr 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-gray-light);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  font-weight: 600;
}

.header-product {
  grid-column: span 2;
}

.cart-empty {
  text-align: center;
  padding: 3rem 1rem;
}

.empty-cart-placeholder {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray-light);
  border-radius: 50%;
}

.empty-cart-placeholder .material-icons {
  font-size: 4rem;
  color: var(--color-gray-medium);
}

.cart-empty h2 {
  margin-bottom: 0.5rem;
}

.cart-empty p {
  color: var(--color-gray-medium);
  margin-bottom: 2rem;
}

@media (max-width: 992px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-header {
    display: none;
  }
}
</style>