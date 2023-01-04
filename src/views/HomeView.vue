<template>
  <div class="home">
    <Banner />
    <div class="second-container container">
      <InformationSection />
      <img
        class="chco-01"
        :style="dropStyle"
        src="https://www.conas-choc.com/images/iconSmall01.png"
      />
    </div>
    <div class="third-container container">
      <RecommendSection />
      <img
        class="chco-02"
        :style="dropStyle"
        src="https://www.conas-choc.com/images/iconSmall03.png"
      />
    </div>
    <div class="attachment attachment-01"></div>
    <div class="fourth-container container">
      <RankSection />
      <img
        class="chco-03"
        :style="dropStyle"
        src="https://www.conas-choc.com/images/smallAbout03.png"
      />
    </div>
    <div class="attachment attachment-02"></div>
    <div class="fifth-container container">
      <ShareSection />
      <img
        class="chco-04"
        :style="dropStyle"
        src="../images/chocolate/chocolate-02.png"
      />
    </div>
    <div class="end-container container">
      <AboutSection />
    </div>
  </div>
</template>

<script setup>
import Banner from "../components/home/Banner.vue";
import InformationSection from "../components/home/InformationSection.vue";
import RecommendSection from "../components/home/RecommendSection.vue";
import RankSection from "../components/home/RankSection.vue";
import ShareSection from "../components/home/ShareSection.vue";
import AboutSection from "../components/home/AboutSection.vue";
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
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.second-container {
  background-color: rgb(229, 227, 221);

  .chco-01 {
    position: absolute;
    bottom: 150px;
    left: 50px;
  }
}
.third-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  .chco-02 {
    position: absolute;
    bottom: 300px;
    right: 0px;
  }
}

.attachment {
  width: 100%;
  height: 200px;
  background-size: 50%;
  background-position: center center;
  background-repeat: repeat;
  background-attachment: fixed;
}

.attachment-01 {
  background-image: url("../images/attachment/attachment-01.png");
}

.attachment-02 {
  background-image: url("../images/attachment/attachment-06.png");
}

.fourth-container {
  background-color: rgb(229, 227, 221);

  .chco-03 {
    position: absolute;
    left: 50px;
  }
}

.fifth-container {
  .chco-04 {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
  }
}

.end-container {
  .chco-05 {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
  }
}
</style>
