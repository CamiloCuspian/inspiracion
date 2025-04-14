<template>
  <nav class="header">
      <div class="header-content">
        <RouterLink to="/" class="logo">
          <h1>Inspiración</h1>
        </RouterLink>
        
        <button class="menu-toggle" @click="toggleMenu" v-if="isMobile">
          <span class="menu-icon"></span>
        </button>
        
        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <TheNavigation @closeMenu="closeMenu" />
        </nav>
        
        <div class="cart-icon">
          <RouterLink to="/cart" class="cart-link">
            <span class="material-icons">shopping_bag</span>
            <span v-if="cartItems > 0" class="cart-count">{{ cartItems }}</span>
          </RouterLink>
        </div>
      </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useDevice } from '@/composables/useDevice'
import TheNavigation from './TheNavigation.vue'

const { isMobile } = useDevice()
const cartStore = useCartStore()
const { totalItems: cartItems } = storeToRefs(cartStore)

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-white-pure);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1.75rem 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
}

.logo h1 {
  font-family: var(--font-primary);
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
}

.cart-icon {
  position: relative;
  margin-left: 1rem;
}

.cart-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-gray-dark);
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-pink-dark);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--color-gray-dark);
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: var(--color-gray-dark);
  left: 0;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: var(--color-white-pure);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    flex-direction: column;
    padding: 5rem 1.5rem;
    z-index: 1001;
  }

  .nav-open {
    transform: translateX(0);
  }
}
</style>