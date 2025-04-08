<template>
  <div class="app">
    <TheHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const cartStore = useCartStore()

onMounted(() => {
  // Cargar carrito desde localStorage al iniciar la aplicación
  cartStore.loadFromLocalStorage()
})
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Ajustar según la altura del header */
}
</style>