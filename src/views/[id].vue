<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h3>{{ route.path }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
