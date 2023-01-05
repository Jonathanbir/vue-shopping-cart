<template>
  <div
    class="menu-mobile-container"
    :style="
      scroll ? mobileActive && { top: '26px' } : mobileActive && { top: '46px' }
    "
  >
    <div class="nav-container">
      <RouterLink @click="scrollToOffset(0)" to="/"
        ><div
          class="sprite-nav-logo"
          :style="
            scroll && {
              transform: 'translate(10px, 4px)',
              width: '64px',
              height: '32px',
            }
          "
        ></div
      ></RouterLink>
      <RouterLink
        @click="
          scrollToOffset(0);
          store.commit('handleChangeMenuMobileActive', false);
        "
        to="/product"
        >商品區</RouterLink
      >
      <RouterLink
        @click="
          scrollToOffset(0);
          store.commit('handleChangeMenuMobileActive', false);
        "
        to="/rank"
        >巧克力排名</RouterLink
      >
      <RouterLink
        @click="
          scrollToOffset(0);
          store.commit('handleChangeMenuMobileActive', false);
        "
        to="/share"
        >分享區</RouterLink
      >
      <RouterLink
        @click="
          scrollToOffset(0);
          store.commit('handleChangeMenuMobileActive', false);
        "
        to="/about"
        >關於我們</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";
import { scrollToOffset } from "../../util/helper";
const store = useStore();
const scroll = ref(false);
const mobileActive = computed(() => store.state.mobileActive);

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
.menu-mobile-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -1000px;
  z-index: 99;
  background-color: rgb(243, 243, 243);
  transition: all 1s ease-in-out;

  .nav-container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    a {
      position: relative;
      z-index: 1;
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 24px;
      font-size: 1.25em;
      font-weight: 400;
      text-align: left;
      line-height: 2.5em;
      color: #cdb8a5;
    }
  }
}
</style>
