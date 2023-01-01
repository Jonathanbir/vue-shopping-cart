<template>
  <NevigationVue />
  <CartList v-show="isListOpen[0]" />
  <FavoriteList v-show="isListOpen[1]" />
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
      @click="store.commit('changeIsAlertBoxOpen', false)"
    ></div>
  </Transition>
  <FooterView />
  <fa
    v-show="scroll"
    class="go-to-top"
    icon="arrow-up"
    @click="scrollToOffset(0)"
  />
</template>

<script setup>
import { ref, computed, Transition, onMounted } from "vue";
import { useStore } from "vuex";
import NevigationVue from "./components/Nevigation.vue";
import CartList from "./components/list/CartList.vue";
import FavoriteList from "./components/list/FavoriteList.vue";
import Toastify from "./components/message/Toastify.vue";
import RemoveItemAlertBox from "./components/message/RemoveItemAlertBox.vue";
import RemoveAllAlertBox from "./components/message/RemoveAllAlertBox.vue";
import FooterView from "./views/FooterView.vue";
import { scrollToOffset } from "./util/helper";

const store = useStore();
const scroll = ref(false);
const isListOpen = computed(() => store.state.isListOpen);
const isToastifyOpen = computed(() => store.state.isToastifyOpen);
const isAlertBoxOpen = computed(() => store.state.isAlertBoxOpen);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 25) {
        scroll.value = true;
      } else {
        scroll.value = false;
      }
    },
    true
  );
});
</script>

<style lang="scss" scoped>
.go-to-top {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfd2d4;
  opacity: 0.8;
  border-radius: 50px 50px 5px 50px;
  padding: 15px;
  margin-top: 24px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 9;
}

.background {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
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
  animation: scale 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
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
  transition: all 0.5s ease-in;
  animation: scale 0.5s ease-in reverse;
}
</style>
