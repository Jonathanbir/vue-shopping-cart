<template>
  <div class="recommend-section section">
    <h1>推薦商品</h1>
    <div class="recommend-container">
      <swiper
        :slidesPerView="screen > 530 ? 4 : 2"
        :spaceBetween="screen > 530 ? 0 : 1"
        :slidesPerGroup="screen > 530 ? 4 : 2"
        :pagination="screen > 530 ? pagination : false"
        :navigation="true"
        :loop="screen > 530 ? false : true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(list, idx) in DATA[index].items">
          <div class="recommend-item">
            <div class="img-container">
              <div
                class="img"
                :style="
                  'background-image:url(' +
                  list.imageUrl +
                  ');background-size:cover;background-position:center;background-repeat:no-repeat'
                "
              ></div>
            </div>
            <h2>
              {{ list.name }}
            </h2>
            <p>NT${{ list.price }}</p>
            <div class="recommend-btn">
              <fa
                class="favorite"
                icon="heart"
                :style="
                  favoriteList.find((index) => index.id == list.id) && {
                    color: '#dc3545',
                  }
                "
                @click="store.commit('addFavoriteItem', list)"
              />
              <div
                class="shopping-btn btn"
                @click="
                  store.commit('addCartItem', list);
                  store.commit('cartTotal');
                  store.commit('priceTotal');
                "
              >
                加到購物車
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <EllipseButton :title="'逛逛商品去'" :path="'/product'" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EllipseButton from "../atom/EllipseButton.vue";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import DATA from "../../data/data";
const modules = [Navigation, Pagination, Autoplay];
const pagination = ref({
  clickable: true,
});
const store = useStore();
const screen = ref(document.documentElement.scrollWidth);
const favoriteList = computed(() => store.state.favoriteList);
const index = ref(Math.floor(Math.random() * 6));

// 註冊 ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".recommend-section",
      start: "top bottom",
      end: "bottom center",
    },
  });

  tl.fromTo(
    ".recommend-section",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 2 }
  );
});
</script>

<style lang="scss">
.recommend-section {
  .recommend-container {
    width: 1250px;

    .swiper {
      height: 360px;
    }

    .swiper-wrapper {
      display: flex;
      justify-content: center;
    }

    .swiper-pagination-bullet-active {
      background-color: rgb(21, 10, 67);
    }

    .recommend-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250px;
      margin: auto;
      box-shadow: 0 8px 24px #e2e2e2;

      .img-container {
        width: 250;
        height: 200px;
        margin: auto;
        overflow: hidden;
        .img {
          width: 250px;
          height: 200px;
          margin: auto;
          transition: all 0.5s ease-in-out;
        }
      }
      h2 {
        text-align: center;
        font-size: 15px;
        padding: 10px;
        margin: 0 auto;
      }
      p {
        font-size: 12px;
        padding: 5px;
        margin: 0 auto;
      }
      .recommend-btn {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .favorite {
          color: #fff;
          background-color: rgb(21, 10, 67);
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
        }

        .shopping-btn {
          width: 100px;
          margin: 10px;
          color: #fff;
          background-color: rgb(21, 10, 67);
          border-color: rgb(21, 10, 67);
          transition: all 0.5s ease-in-out;
          cursor: pointer;

          &:hover {
            color: #ccb7a5;
          }
        }
      }
    }
  }
}
@media (max-width: 530px) {
  .recommend-section {
    width: 100% !important;
    .recommend-container {
      width: 100% !important;
      .recommend-item {
        width: 200px;
        .img-container {
          width: 100%;
          .img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
