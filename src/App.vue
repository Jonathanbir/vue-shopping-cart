<template>
  <NevigationVue />
  <Transition name="fadeAndShow" mode="out-in">
    <CartList v-show="isListOpen[0]" />
  </Transition>
  <Transition name="fadeAndShow" mode="out-in">
    <FavoriteList v-show="isListOpen[1]" />
  </Transition>
</template>

<script setup>
import { computed, Transition } from "vue";
import { useStore } from "vuex";
import NevigationVue from "./components/Nevigation.vue";
import CartList from "./components/CartList.vue";
import FavoriteList from "./components/FavoriteList.vue";
const store = useStore();
const isListOpen = computed(() => store.state.isListOpen);
</script>

<style lang="scss" scoped>
.fadeAndShow-enter-active {
  animation: scale 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.fadeAndShow-enter-from {
  opacity: 0;
  right: 100px;
}

.fadeAndShow-enter-to {
  opacity: 1;
  right: 180px;
}

.fadeAndShow-leave-from {
  opacity: 1;
  right: 180px;
}
.fadeAndShow-leave-to {
  opacity: 0;
  right: 100px;
}

.fadeAndShow-leave-active {
  transition: all 0.5s ease-in;
  animation: scale 0.5s ease-in reverse;
}
</style>
