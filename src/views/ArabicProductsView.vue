<template>
    <header class="hero">
      <picture class="hero-background">
        <source
          media="(max-width: 640px)"
          srcset="/images/arabic-banner.avif"
          type="image/avif"
        />
        <source
          media="(max-width: 1024px)"
          srcset="/images/arabic-banner.avif"
          type="image/avif"
        />
        <!-- Imagen de respaldo por si AVIF no es soportado -->
      <img
        src="/images/arabic-banner.avif"
        alt="Fondo de perfumes"
        class="hero-img"
      />
      </picture>
      <div class="container">
        <div class="hero-content">
          <h1>Perfumes Árabes</h1>
          <p>Fragancias exóticas con ingredientes de lujo de Oriente Medio</p>
        </div>
      </div>
    </header>
    <section class="arabic-products">

    <div class="container">
        <p>
          Nuestra exclusiva colección de perfumes árabes ofrece aromas intensos
          y perdurables, elaborados con ingredientes preciosos como el oud, el
          ámbar y las especias exóticas. Descubre la magia de Oriente en cada
          gota.
        </p>

        <div class="products-container">
          <ProductGrid :products="arabicProducts" />
        </div>
      </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
import ProductGrid from "@/components/product/ProductGrid.vue";

const productsStore = useProductsStore();
const { getArabicProducts: arabicProducts } = storeToRefs(productsStore);
</script>

<style scoped>

</style>
