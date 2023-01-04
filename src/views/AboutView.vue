<template>
  <div class="about-container">
    <AboutSection class="about-section" :title="'關於我們'" />
  </div>
</template>

<script setup>
import AboutSection from "../components/home/AboutSection.vue";
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
