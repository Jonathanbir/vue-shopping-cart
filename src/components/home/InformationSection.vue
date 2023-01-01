<template>
  <div class="home-information">
    <h1>營業資訊</h1>
    <div class="home-information-banners">
      <div
        v-for="banner in banners"
        class="img"
        :style="
          'background-image:url(' +
          banner.src +
          ');background-size:cover;background-position:center;background-repeat:no-repeat'
        "
      ></div>
    </div>
    <img
      class="chco-01"
      :style="dropStyle"
      src="https://www.conas-choc.com/images/iconSmall01.png"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const height = ref("");
const drop = ref("");
const dropStyle = computed(() => {
  return (
    "transform:translate(" +
    0 +
    "px," +
    drop.value +
    "px)" +
    "rotate(" +
    drop.value +
    "deg)"
  );
});
onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      height.value = window.pageYOffset * 0.15 - 100;
      drop.value = window.pageYOffset * 0.2;
    },
    true
  );
});
const banners = [
  { src: "src/images/information-01.png" },
  { src: "src/images/information-02.png" },
  { src: "src/images/information-03.png" },
  { src: "src/images/information-04.png" },
];
</script>

<style lang="scss" scoped>
.home-information {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  .home-information-banners {
    display: flex;
    flex-direction: row;

    h1 {
      margin-bottom: 50px;
    }
    .img {
      width: 200px;
      height: 290px;
      margin: auto 30px;
    }
  }
  .chco-01 {
    position: absolute;
    bottom: 50px;
    left: -100px;
  }
}
</style>
