<template>
  <ul class="nav-list">
    <li class="nav-item">
      <RouterLink to="/perfumes/hombre" class="nav-link" @click="emitCloseMenu">
      Hombre
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/perfumes/mujer" class="nav-link" @click="emitCloseMenu">
      Mujer
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/perfumes/arabes" class="nav-link" @click="emitCloseMenu">
        Perfumes Árabes
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/bolsos" class="nav-link" @click="emitCloseMenu">
        Bolsos de Mano
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/cart" class="nav-link" @click="emitCloseMenu">
        Carrito
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const emit = defineEmits(['closeMenu'])

const emitCloseMenu = () => {
  emit('closeMenu')
}
</script>

<style scoped>
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: var(--color-gray-dark);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.25rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }

  .nav-item {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
}
</style>