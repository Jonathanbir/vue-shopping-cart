<template>
  <div class="rank-section section">
    <h1>巧克力排名</h1>
    <div class="rank-container">
      <div
        class="item"
        style="width: 100%; display: inline-block"
        @mouseover="imageSrc[0] = DATA[3].items[1].img2"
        @mouseout="imageSrc[0] = DATA[3].items[1].imageUrl"
      >
        <div class="item-inner">
          <div class="vote_info">
            <div class="rank-mark">
              <div class="rank-img"></div>
              <p>2</p>
            </div>
            <h4>Top2</h4>
            <h5>{{ DATA[3].items[1].name }}</h5>
            <div class="vote_number">
              <img
                src="https://tibamef2e.com/ced101/project/g1/Images/vote_medium.svg"
                alt=""
              />
              <span>98</span>票
            </div>
          </div>
          <div
            class="img"
            :style="
              'background-image:url(' +
              imageSrc[0] +
              ');background-size:cover;background-position:center;background-repeat:no-repeat'
            "
          ></div>
          <div class="triangle"></div>
        </div>
      </div>
      <div
        class="item"
        style="width: 100%; display: inline-block"
        @mouseover="imageSrc[1] = DATA[2].items[2].img2"
        @mouseout="imageSrc[1] = DATA[2].items[2].imageUrl"
      >
        <div class="item-inner" style="width: 90%">
          <div class="vote_info">
            <div class="rank-mark" style="top: -15px; right: -50px">
              <div class="rank-img" style="width: 100px; height: 100px"></div>
              <p style="right: -56px; top: 7px">1</p>
            </div>
            <h4>Top1</h4>
            <h5>{{ DATA[2].items[2].name }}</h5>
            <div class="vote_number">
              <img
                src="https://tibamef2e.com/ced101/project/g1/Images/vote_medium.svg"
                alt=""
              />
              <span>109</span>票
            </div>
          </div>
          <div
            class="img"
            :style="
              'background-image:url(' +
              imageSrc[1] +
              ');background-size:cover;background-position:center;background-repeat:no-repeat'
            "
          ></div>
          <div class="triangle"></div>
        </div>
      </div>
      <div
        class="item"
        style="width: 100%; display: inline-block"
        @mouseover="imageSrc[2] = DATA[1].items[2].img2"
        @mouseout="imageSrc[2] = DATA[1].items[2].imageUrl"
      >
        <div class="item-inner">
          <div class="vote_info">
            <div class="rank-mark">
              <div class="rank-img"></div>
              <p>3</p>
            </div>
            <h4>Top3</h4>
            <h5>{{ DATA[1].items[2].name }}</h5>
            <div class="vote_number">
              <img src="../../images/icon/vote_medium.svg" alt="" />
              <span>95</span>票
            </div>
          </div>
          <div
            class="img"
            :style="
              'background-image:url(' +
              imageSrc[2] +
              ');background-size:cover;background-position:center;background-repeat:no-repeat'
            "
          ></div>
          <div class="triangle"></div>
        </div>
      </div>
    </div>
    <EllipseButton :title="'立即投票去'" :path="'/rank'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import EllipseButton from "../atom/EllipseButton.vue";
import DATA from "../../data/data";
const imageSrc = ref([
  DATA[3].items[1].imageUrl,
  DATA[2].items[2].imageUrl,
  DATA[1].items[2].imageUrl,
]);
</script>

<style lang="scss" scoped>
.rank-section {
  .rank-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      .item-inner {
        position: relative;
        width: 80%;
        height: 100%;
        border: 1px solid #b3925b;
        margin: 0 auto;
        -webkit-clip-path: polygon(0 80%, 0 0, 100% 0, 100% 100%, 20% 100%);
        clip-path: polygon(0 80%, 0 0, 100% 0, 100% 100%, 20% 100%);
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .vote_info {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          line-height: 36px;
          justify-content: space-between;
          padding-top: 10px;

          .rank-mark {
            position: relative;
            top: -5px;
            right: -52px;
            .rank-img {
              position: absolute;
              width: 80px;
              height: 80px;
              background-image: url("../../images/chocolate/chocolate-01.png");
              background-size: 100%;
              background-position: center center;
              background-repeat: no-repeat;
              transform: rotate(40deg);
              animation-name: rank;
              animation-duration: 3s;
              animation-iteration-count: infinite;
            }

            p {
              position: absolute;
              top: -3px;
              right: -48px;
              font-size: 25px;
              color: rgb(253, 236, 4);
              font-weight: 800;
              animation-name: number;
              animation-duration: 3s;
              animation-iteration-count: infinite;
            }
          }

          h4 {
            font-size: 1rem;
            letter-spacing: 0.8rem;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            color: #b3925b;
            margin: 10px;
          }

          h5 {
            font-size: 1rem;
            letter-spacing: 0.5rem;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            margin: 10px;
            max-width: 290px;
          }

          .vote_number {
            display: inline-flex;
            align-items: center;
            font-size: 1rem;
            letter-spacing: 0.5rem;
            font-family: "Roboto", sans-serif;
            margin: 10px auto 20px;

            img {
              margin: 0 auto;
              margin-right: 10px;
              max-width: 100%;
            }
          }

          span {
            font-size: 1.4rem;
            letter-spacing: 0.5rem;
            font-family: "Roboto", sans-serif;
            line-height: 3px;
            font-weight: bold;
          }
        }
        .triangle {
          width: 100px;
          height: 100px;
          background-color: #504024;
          position: absolute;
          border-radius: 0 10px 0;
          left: -45px;
          bottom: -25px;
        }
        .img {
          width: 300px;
          height: 180px;
          margin: 0 auto;
          margin-right: 10px;
          max-width: 100%;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
