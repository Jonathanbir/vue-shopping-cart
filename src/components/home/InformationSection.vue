<template>
  <div class="home-information section">
    <h1>營業資訊</h1>
    <div class="home-information-banners">
      <div class="img img01"></div>
      <div class="img img02"></div>
      <div class="img img03"></div>
      <div class="img img04"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-information {
  margin: 30px auto 100px;
  .home-information-banners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1 {
      margin-bottom: 50px;
    }
    .img {
      width: 200px;
      height: 290px;
      margin: auto 30px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .img01 {
      background-image: url("../../images/information/information-01.png");
    }

    .img02 {
      background-image: url("../../images/information/information-02.png");
    }

    .img03 {
      background-image: url("../../images/information/information-03.png");
    }

    .img04 {
      background-image: url("../../images/information/information-04.png");
    }
  }
}

@media (max-width: 530px) {
  .home-information {
    .home-information-banners {
      width: 100%;
      flex-direction: column;
      .img {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
