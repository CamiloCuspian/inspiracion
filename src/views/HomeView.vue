<template>
  <!-- Hero Section -->
  <header class="hero">
    <picture class="hero-background">
      <!-- Imágenes de diferentes tamaños para dispositivos distintos -->
      <source
        media="(max-width: 640px)"
        srcset="/images/hero-bg-mobile.avif"
        type="image/avif"
      />
      <source
        media="(max-width: 1024px)"
        srcset="/images/hero-bg-tablet.avif"
        type="image/avif"
      />
      <source srcset="/images/hero-bg.avif" type="image/avif" />
      <!-- Imagen de respaldo por si AVIF no es soportado -->
      <img
        src="/images/hero-bg.avif"
        alt="Fondo de perfumes"
        class="hero-img"
      />
    </picture>
    <div class="container">
      <div class="hero-content">
        <h1>Descubre tu fragancia ideal</h1>
        <p>Aromas que cuentan historias y despiertan emociones</p>
        <div class="hero-buttons">
          <RouterLink to="/perfumes/mujer" class="btn"
            >Perfumes para Ella</RouterLink
          >
          <RouterLink to="/perfumes/hombre" class="btn"
            >Perfumes para Él</RouterLink
          >
        </div>
      </div>
    </div>
  </header>

  <!-- Featured Products Section -->
  <section class="featured section">
    <div class="container">
      <h2 class="section-title">Nuestras Fragancias Destacadas</h2>
      <ProductGrid :products="featuredProducts" />
    </div>
  </section>

  <!-- Categories Section -->
  <section class="categories section">
    <div class="container">
      <h2 class="section-title">Explora nuestras colecciones</h2>
      <div class="categories-grid">
        <div class="category-card women">
          <div class="category-content">
            <h3>Perfumes para Mujer</h3>
            <p>Elegancia y feminidad en cada gota</p>
            <RouterLink to="/perfumes/mujer" class="btn-outline"
              >Descubrir</RouterLink
            >
          </div>
        </div>
        <div class="category-card men">
          <div class="category-content">
            <h3>Perfumes para Hombre</h3>
            <p>Carácter y distinción en cada fragancia</p>
            <RouterLink to="/perfumes/hombre" class="btn-outline"
              >Descubrir</RouterLink
            >
          </div>
        </div>
        <div class="category-card arabic">
          <div class="category-content">
            <h3>Perfumes Árabes</h3>
            <p>Fragancias exóticas y duraderas de Oriente Medio</p>
            <RouterLink to="/perfumes/arabes" class="btn-outline"
              >Descubrir</RouterLink
            >
          </div>
        </div>
        <div class="category-card handbags">
          <div class="category-content">
            <h3>Bolsos de Mano</h3>
            <p>Complementos elegantes para cada ocasión</p>
            <RouterLink to="/bolsos" class="btn-outline"
              >Descubrir</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>Sobre Inspiración</h2>
          <p>
            En Inspiración, creamos fragancias que van más allá de los aromas.
            Cada perfume cuenta una historia, evoca un recuerdo y despierta
            emociones.
          </p>
          <p>
            Nuestras creaciones capturan la esencia de momentos especiales,
            permitiéndote llevar contigo esa inspiración durante todo el día.
          </p>
        </div>
        <div class="about-image">
          <img src="/images/about-image.avif" alt="Sobre Inspiración" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useProductsStore } from "@/stores/products";
import ProductGrid from "@/components/product/ProductGrid.vue";

const productsStore = useProductsStore();

// Get 4 random products for featured section
const featuredProducts = computed(() => {
  const allProducts = productsStore.products.filter(p => p.category !== 'bolso');
  // Shuffle array
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  // Get first 4 items
  return shuffled.slice(0, 3);
});
</script>

<style scoped>

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.category-card {
  height: 300px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.category-card.women {
  background: url("/images/categori-woman.avif");
  background-size: cover;
  background-position: center;
}

.category-card.men {
  background: url("/images/category-men.avif");
  background-size: cover;
  background-position: center;
}

.category-card.arabic {
  background: url("/images/category-arabic.avif");
  background-size: cover;
  background-position: center;
}

.category-card.handbags {
  background: url("/images/category-handbags.avif");
  background-size: cover;
  background-position: center;
}

.category-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.category-content h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: white;
}

.category-content p {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.btn-outline {
  padding: 0.5rem 1rem;
  border-color: white;
  color: white;
}

.category-content .btn-outline:hover {
  background-color: white;
  color: var(--color-gray-dark);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  margin-bottom: 1.5rem;
}

.about-text p {
  margin-bottom: 1rem;
}

.about-image {
  border-radius: var(--border-radius);
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    grid-row: 1;
  }

  .about-text {
    grid-row: 2;
  }
}
</style>