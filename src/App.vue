<template>
  <NevigationVue />
  <Transition name="fadeAndShow" mode="out-in">
    <CartList v-show="isListOpen[0]" />
  </Transition>
  <Transition name="fadeAndShow" mode="out-in">
    <FavoriteList v-show="isListOpen[1]" />
  </Transition>
  <Transition name="fadeAndShowToasitify" mode="out-in">
    <Toastify v-show="isToastifyOpen[0]">商品已加入購物車</Toastify>
  </Transition>
  <Transition name="fadeAndShowToasitify" mode="out-in">
    <Toastify v-show="isToastifyOpen[1]">商品已加入收藏清單</Toastify>
  </Transition>
  <Transition name="fadeAndShowToasitify" mode="out-in">
    <Toastify v-show="isToastifyOpen[2]" :color="['#bf7f5a', '#fcf8e4']"
      >商品已從收藏清單移除</Toastify
    >
  </Transition>
  <Transition name="fadeAndShowToasitify" mode="out-in">
    <Toastify v-show="isToastifyOpen[3]" :color="['#bf7f5a', '#fcf8e4']"
      >商品已從購物車移除</Toastify
    >
  </Transition>
  <Transition name="fadeAndShowAlertBox" mode="out-in">
    <RemoveItemAlertBox v-show="isAlertBoxOpen[0]" />
  </Transition>
  <Transition name="fadeAndShowAlertBox" mode="out-in">
    <RemoveAllAlertBox v-show="isAlertBoxOpen[1]" />
  </Transition>
  <Transition name="fadeAndShowBackGround" mode="out-in">
    <div
      class="background"
      v-show="isAlertBoxOpen[0] || isAlertBoxOpen[1]"
    ></div>
  </Transition>
</template>

<script setup>
import { computed, Transition } from "vue";
import { useStore } from "vuex";
import NevigationVue from "./components/Nevigation.vue";
import CartList from "./components/CartList.vue";
import FavoriteList from "./components/FavoriteList.vue";
import Toastify from "./components/Toastify.vue";
import RemoveItemAlertBox from "./components/RemoveItemAlertBox.vue";
import RemoveAllAlertBox from "./components/RemoveAllAlertBox.vue";

const store = useStore();
const isListOpen = computed(() => store.state.isListOpen);
const isToastifyOpen = computed(() => store.state.isToastifyOpen);
const isAlertBoxOpen = computed(() => store.state.isAlertBoxOpen);
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  z-index: 9998;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

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

.fadeAndShowToasitify-enter-active {
  animation: scale 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.fadeAndShowToasitify-enter-from {
  opacity: 0;
  right: -100px;
}

.fadeAndShowToasitify-enter-to {
  opacity: 1;
  right: 15px;
}

.fadeAndShowToasitify-leave-from {
  opacity: 1;
  right: 15px;
}
.fadeAndShowToasitify-leave-to {
  opacity: 0;
  right: -100px;
}

.fadeAndShowToasitify-leave-active {
  transition: all 0.3s ease-in;
  animation: scale 0.3s ease-in reverse;
}

.fadeAndShowAlertBox-enter-active {
  animation: scale 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.fadeAndShowAlertBox-enter-from {
  opacity: 0;
  top: -500px;
}

.fadeAndShowAlertBox-enter-to {
  opacity: 1;
  top: 0;
}

.fadeAndShowAlertBox-leave-from {
  opacity: 1;
  top: 0;
}
.fadeAndShowAlertBox-leave-to {
  opacity: 0;
  top: -500px;
}

.fadeAndShowAlertBox-leave-active {
  transition: all 1s ease-in;
  animation: scale 1s ease-in reverse;
}

.fadeAndShowBackGround-enter-active {
  animation: scale 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.fadeAndShowBackGround-enter-from {
  opacity: 0;
}

.fadeAndShowBackGround-enter-to {
  opacity: 1;
}

.fadeAndShowBackGround-leave-from {
  opacity: 1;
}
.fadeAndShowBackGround-leave-to {
  opacity: 0;
}

.fadeAndShowBackGround-leave-active {
  transition: all 1s ease-in;
  animation: scale 1s ease-in reverse;
}
</style>
