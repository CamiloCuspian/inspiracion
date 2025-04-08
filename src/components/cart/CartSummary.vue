<template>
  <div class="cart-summary card">
    <h2 class="summary-title">Resumen de Compra</h2>
    
    <div class="summary-details">
      <div class="summary-row">
        <span>Subtotal ({{ totalItems }} {{ totalItems === 1 ? 'producto' : 'productos' }})</span>
        <span>{{ formattedTotal }}</span>
      </div>
      <div class="summary-row">
        <span>Envío</span>
        <span>Gratis</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-row total">
        <span>Total</span>
        <span>{{ formattedTotal }}</span>
      </div>
    </div>
    
    <a :href="whatsappLink" target="_blank" class="btn checkout-btn">
      <span class="material-icons">whatsapp</span>
      Finalizar Compra
    </a>
    
    <button @click="clearCart" class="clear-cart-btn">
      Vaciar Carrito
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const { formattedTotal, totalItems } = storeToRefs(cartStore)

const whatsappLink = computed(() => {
  return cartStore.getWhatsAppLink()
})

const clearCart = () => {
  if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
    cartStore.clearCart()
  }
}
</script>

<style scoped>
.cart-summary {
  padding: 1.5rem;
}

.summary-title {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-gray-dark);
}

.summary-details {
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.summary-row.total {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-pink-dark);
}

.summary-divider {
  height: 1px;
  background-color: var(--color-gray-light);
  margin: 1rem 0;
}

.checkout-btn {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.checkout-btn .material-icons {
  font-size: 1.2rem;
}

.clear-cart-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius);
  color: var(--color-gray-dark);
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-cart-btn:hover {
  background-color: var(--color-gray-light);
}
</style>