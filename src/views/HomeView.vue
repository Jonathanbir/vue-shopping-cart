<template>
  <div class="home">
    <Banner />
    <div class="second-container"><HomeInformationSection /></div>
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import HomeInformationSection from "../components/HomeInformationSection.vue";
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.second-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(229, 227, 221);
}
</style>
