<template>
  <div class="product">
    <ProductItemVue v-for="n in 10" />
  </div>
</template>

<script setup>
import ProductItemVue from "../components/ProductItem.vue";
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1000px;
  margin: auto;
}
</style>
