<template>
  <div class="about-container">
    <AboutSection
      class="about-section"
      :title="'關於我們'"
      :scroll="scrollFlag"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AboutSection from "../components/home/AboutSection.vue";
const scroll = ref(false);
const scrollFlag = ref([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 200) {
        scrollFlag.value[0] = true;
      } else {
        scrollFlag.value[0] = false;
      }
      if (window.pageYOffset > 245) {
        scrollFlag.value[1] = true;
      } else {
        scrollFlag.value[1] = false;
      }
      if (window.pageYOffset > 500) {
        scrollFlag.value[2] = true;
      } else {
        scrollFlag.value[2] = false;
      }
      if (window.pageYOffset > 785) {
        scrollFlag.value[3] = true;
      } else {
        scrollFlag.value[3] = false;
      }
      if (window.pageYOffset > 1050) {
        scrollFlag.value[4] = true;
      } else {
        scrollFlag.value[4] = false;
      }
      if (window.pageYOffset > 1350) {
        scrollFlag.value[5] = true;
      } else {
        scrollFlag.value[5] = false;
      }
      if (window.pageYOffset > 1620) {
        scrollFlag.value[6] = true;
      } else {
        scrollFlag.value[6] = false;
      }
      if (window.pageYOffset > 1960) {
        scrollFlag.value[7] = true;
      } else {
        scrollFlag.value[7] = false;
      }
    },
    true
  );
});
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://tse2.mm.bing.net/th?id=OIP.tH7wpCIld4cT_ZPcBsvcBAHaEo&pid=Api&P=0");
  background-attachment: fixed;

  .about-section {
    margin-top: 100px;
  }
}
</style>
