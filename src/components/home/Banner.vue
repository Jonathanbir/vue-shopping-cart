<template>
  <div class="container-imgs">
    <div class="hoem-title">
      <h1>夢想巧克力</h1>
      <span>給你滿滿夢幻的口味</span>
      <span>chocolate makes you a good dream</span>
    </div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :cssMode="true"
      :navigation="true"
      :pagination="pagination"
      :autoplay="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="banner in banners">
        <div
          class="img"
          :style="
            'background-image:url(' +
            banner.src +
            ');background-size:cover;background-position:center;background-repeat:no-repeat'
          "
        ></div
      ></swiper-slide>
    </swiper>
    <img
      class="decoration"
      src="https://tibamef2e.com/ced101/project/g1/Images/under.png"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
const modules = [Navigation, Pagination, Autoplay];
const pagination = ref({
  clickable: true,
});
const banners = [
  {
    src: "https://www.conas-choc.com/upload/banner_list/tw_banner_list_21d09_cknzm37gbd.jpg",
  },
  {
    src: "https://pic2.zhimg.com/v2-134378c19ded3d5b93fececeb400c39d_r.jpg",
  },
  {
    src: "https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4610b912c8fcc3ce261b24789f45d688d53f20a6.jpg",
  },
  { src: "https://img.tukuppt.com/bg_grid/00/06/34/vTPnGZuqAR.jpg!/fh/350" },
];
</script>

<style lang="scss">
.swiper {
  position: relative;
}

.swiper-button-prev {
  position: absolute;
  left: 10px;
  top: 50%;
  z-index: 2;
  width: 53px;
  height: 53px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAACbElEQVRo3u2avy8EQRTHtxDuSETufyCXUyrUrrvbUyp0flzhKFHIuTsiIkQ0CoWGoFGpUFBQU6g0CoJCoVCIHxF8J3mTbPYs7m7f2x8Un5j1Y+Z97O3Mm9lnnO5vGS5SD1pBF+gBQ2AcFMEUfR2n7/fQ77WBBjfjcKOTCOgAfZbgK6VIf99B/XkmFQPdIF+liBN56jcmKaX+k6ka7koldy9VzZ2rVCgBxphl7IzRuK5L1QFTWMaOSXG4IhUFgx4LaQYpnpqkmsGIT4Q0IxRXVVKNIOczIU2O4qtISn12sz4V0mSdnjEnKdPnQtbJ41dSiYAIaRI/SUU8WIfcWMci30mlAiakSTlJtYBCQKUKFH+ZlBlQobJJw7om5aUCONnbPAa7DNl91CrVKSh0CD7ACUP/nVapfiGhXRI6w/U0wxj9WioqsDdSQjskdM4kpPdgUSUVFxDaBu/gAtczzOPFlVSSeZAtyLyBS7RnBT7mSSXVyzjAOmRewQ3ac0KTUa/BuL1YhcwLuEN7XnC9GjboHM7tjlcg8wzu0V4UXoRHDYbUaBkyj+AB7SUPMosJg2Gmu1ZTN9obXqVMob1TXM/Uk5fPlMTstyA9+3GuU2u0Tt1Kr1NSGcWVZEYRFxhIPPcLZZYeyv2U9M73QGrnq84oJgXFjpjOKBpDf5qkz/2KARUqOp37KdIBlUr/ubN0RXvApNr/7Pup0L5JVDT5+J3vMMX3/3Y+1HUU1mcs47FQxs2Kl9DWJtkX6LTAq9QCjcNeRWbPFU2G7H6S+m3xQ2XmQI2VmQN+qMz8igaqiU3aamhLFHyJrnP08yRHDe0nh6EiYtJIqTYAAAAASUVORK5CYII=");

  &::after {
    content: "";
    display: none;
  }
}

.swiper-button-next {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 2;
  width: 53px;
  height: 53px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAACcklEQVRo3u2avy8EQRTHtxDuSET8D0TuSoXadXd7SoXOjyscJQo5d4iIRIRCQqEhaDQ0joSGmoJGoxFRKBQKESL4TvIm2exZ3N3Mm92l+OTGj5uZz83tzpu3zzo/3LYUUgtaQCfoBoNgDBTAFL2O0e+76f9aQZ3KeajoJALaQa9j8uVSoPe3U3/GpJpBF8hVKOJFjvpt5pQSn2SyilUpZ/WSlaxcuUIxMKpZxs0ojatcqgbYzDJubJqHEqkoGDAsJBmg+VQl1QiGfSIkGaZ5VSRVD7I+E5JkaX5lSYnvbsanQpKM1zXmJWX7XMh58/iVVCwgQpLYT1IRA/uQin0s8p1UMmBCkqSXVBPIB1QqT/MvkbIDKlRy03DuSUqj7bODrSI4YZTKyWhDSnWoHgRCZ+ADHDGKdTil+jQMMA2hSxLbZ5Lqk1JRjWcjIXZFYrsMUsIjKqTaNA80A6Fr8I72DoNYm5BKMAw0C6kb8Ib2tuaxEkKqh+n7PgepO/CK9rrGcXos5uPFPKTuwQvaa5rGGLIoD8e5SS5A6gE8o72iof8Ry1BotASpR/CE9rLivsctg2HNJt3qb1X3bWqlFnWvlMlralXXNRXKu5+JfWpD9z4VyoiCLfYDbLEfV5S+xxml6zxPXZBQkfs8pfvke2zq5CtyFBMachSnzDmK+tBnk2TerxBQoYJX3k+QCqhU6s/l0gXxgEnF/+zzqdA+SRQ0+PiZ7xDN7//pfKjrKJzXWNqwUFplxUtoa5PcG3SKIQuVp3G0V5G5Y0VbdXRP/dnOWM5kZWZ/lZWZ/X6ozPyKOqqJTbhqaCdp8pP0c5b+ntBRQ/sJ7f8iYYitrC0AAAAASUVORK5CYII=");

  &::after {
    content: "";
    display: none;
  }
}
.container-imgs {
  position: relative;
  width: 100%;
  height: 640px;

  .hoem-title {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    text-align: center;
    border-radius: 100% 111% 84% 127%/142% 133% 81% 75%;
    margin: auto;
    background-color: rgba(9, 9, 9, 0.5);
    h1 {
      font-size: 60px;
      color: #fff;
      text-shadow: 2px 2px 10px white, -2px -2px 10px white;
      margin: 10px auto;
    }

    span {
      font-size: 25px;
      color: #fff;
      text-shadow: 2px 2px 10px white, -2px -2px 10px white;
    }
  }

  .swiper-pagination {
    bottom: 16vh !important;
  }
  .swiper-pagination-bullet {
    width: 17px;
    height: 1px;
    background-color: #fff;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
  }

  .img {
    width: 100%;
    height: 640px;
  }

  .decoration {
    width: 100%;
    position: absolute;
    bottom: -5px;
    z-index: 2;
  }
}

@media (max-width: 530px) {
  .container-imgs {
    .swiper-pagination {
      bottom: 10vh !important;
    }

    .hoem-title {
      top: 20%;
      width: 350px;
      height: 350px;
      h1 {
        font-size: 40px;
      }
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
