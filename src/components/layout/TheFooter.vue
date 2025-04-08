<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>Inspiración</h2>
          <p>Perfumes que despiertan los sentidos</p>
        </div>

        <div class="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/perfumes/hombre">Perfumes para Hombre</RouterLink></li>
            <li><RouterLink to="/perfumes/mujer">Perfumes para Mujer</RouterLink></li>
            <li><RouterLink to="/cart">Carrito</RouterLink></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <p>info@inspiracion.com</p>
          <p>+57 320 920 9176</p>
          <p>Calle Principal #123, Bogotá, Colombia</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Inspiración Perfumes. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--color-gray-dark);
  color: var(--color-white-off);
  padding: 3rem 0 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo h2 {
  font-family: var(--font-primary);
  color: var(--color-pink-primary);
  margin-bottom: 0.5rem;
}

.footer-logo p {
  color: var(--color-white-off);
  font-style: italic;
}

.footer-links h3,
.footer-contact h3 {
  color: var(--color-pink-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-white-off);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-pink-primary);
}

.footer-contact p {
  color: var(--color-white-off);
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  color: var(--color-gray-medium);
  font-size: 0.9rem;
  margin: 0;
}
</style>