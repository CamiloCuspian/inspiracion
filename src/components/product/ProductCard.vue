<template>
  <section class="three_columns">
    <div class="product-card card">
      <RouterLink :to="`/product/${product.id}`" class="product-image">
        <img :src="product.image" :alt="product.name" />
        <div class="product-overlay">Ver detalles</div>
      </RouterLink>
      <div class="product-info">
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-price">{{ formattedPrice }}</p>
        <button class="btn product-button" @click="addToCart">
          Añadir al carrito
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const formattedPrice = computed(() => {
  // Mostramos el precio normal en la tarjeta
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(props.product.price.normal);
});

const addToCart = () => {
  cartStore.addToCart(props.product.id);
};
</script>

<style scoped></style>
