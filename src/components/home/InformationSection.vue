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
  </div>
</template>

<script setup>
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
  h1 {
    margin-bottom: 50px;
  }
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
}
</style>
