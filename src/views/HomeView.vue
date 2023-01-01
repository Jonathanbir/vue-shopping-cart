<template>
  <div class="home">
    <Banner />
    <div class="second-container"><InformationSection /></div>
    <div class="third-container">RecommendProduct</div>
  </div>
</template>

<script setup>
import Banner from "../components/home/Banner.vue";
import InformationSection from "../components/home/InformationSection.vue";
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
.third-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
