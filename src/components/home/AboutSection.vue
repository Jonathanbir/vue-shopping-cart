<template>
  <section class="brandStory">
    <h1 v-show="props.title">{{ props.title }}</h1>
    <div
      class="about_banner"
      v-show="props.title"
      :style="
        props.title
          ? props.scroll[0]
            ? { top: '-1000px', opacity: '0' }
            : { top: '200px', opacity: '1' }
          : {}
      "
    ></div>
    <div class="story_block" :style="props.title && { margin: '10px 0 10px' }">
      <img
        class=""
        :style="
          props.title
            ? props.scroll[0] && props.title
              ? { transform: 'translateX(0px)' }
              : { transform: 'translateX(-1200px)' }
            : {}
        "
        src="https://www.conas-choc.com/upload/ad_footer_list/tw_ad_footer_list_19d23_9x3rw5w4be.jpg"
        alt=""
      />
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[0]
              ? { transform: 'translateX(0px)' }
              : { transform: 'translateX(1200px)' }
            : {}
        "
      >
        <h1>About Dream Chocolate</h1>
        <h3>關於夢想巧克力</h3>
        <h6>
          夢想巧克力品牌，提供多樣性的選擇滿足您和您的朋友及家人。
          有各種不同種類及口感的巧克力，讓您在品嚐時激發出不一樣的體驗
          ，也提供新鮮豐富的配料客製化巧克力做搭配滿足您最挑剔味蕾。
        </h6>
      </div>
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block flex-reverse'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[1]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
      >
        <h1>2004年</h1>
        <h6>
          2004年，12月在海拔1755公尺的清境創立清境佛羅倫斯渡假山莊，提供旅人一個休閒度假的好去處。
        </h6>
      </div>
      <img
        :style="
          props.title
            ? props.scroll[1]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/e005ef3992d00a35715735c2f33a6508.jpg"
        alt=""
      />
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block story_mobile'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <img
        :style="
          props.title
            ? props.scroll[2]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/91cefb0ea4c4361c1115da9b0199d0d5.jpg"
        alt=""
      />
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[2]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
      >
        <h1>2008年</h1>
        <h6>
          2008年，成立了清境君士坦丁堡。
          經典的華麗巴洛克風格，將休憩空間提升至奢華，提供舒適乾淨的客房給旅人們選擇。
        </h6>
      </div>
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block flex-reverse'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[3]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
      >
        <h1>20011年</h1>
        <h6>
          2011年，創立清境妮娜巧克力創始店。
          坐落在佛羅倫斯渡假山莊的落羽松林裡，是一個充滿歡樂與童話的夢幻小屋，把妮娜最喜愛的巧克力呈現在此。
        </h6>
      </div>
      <img
        :style="
          props.title
            ? props.scroll[3]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/eaca65b7f4f0573fd7d502e2d7a27cf9.jpg"
        alt=""
      />
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block story_mobile'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <img
        :style="
          props.title
            ? props.scroll[4]
              ? { transform: 'translateX(0px)', marginRight: '0px' }
              : { transform: 'translateX(-1200px)', marginRight: '0px' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/96eeff40858c800f97029a557021de7e.jpg"
        alt=""
      />
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[4]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
      >
        <h1>2012年</h1>
        <h6>
          2012年，進駐清境小瑞士花園。 2017年重新裝修清境小瑞士門市。 Nina
          Chocolate & 1755 café是一個咖啡與巧克力完美結合的咖啡館
        </h6>
      </div>
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block flex-reverse'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[5]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
      >
        <h1>2018年</h1>
        <h6>
          2018年，埔里桃米妮娜巧克力夢想城堡
          擴大品牌版圖整合清境Nina並以全新的品牌樣貌Cona's跟大家見面!打造全新的六感體驗
        </h6>
      </div>
      <img
        :style="
          props.title
            ? props.scroll[5]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/3b35b595a30ae68fd0acca86901acbda.jpg"
        alt=""
      />
    </div>
    <div
      v-show="props.title"
      :class="screen > 530 ? 'story_block' : 'story_block story_mobile'"
      :style="props.title && { margin: '10px 0 10px' }"
    >
      <img
        :style="
          props.title
            ? props.scroll[6]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
        src="https://www.conas-choc.com/upload/catalog_history_list_pic/tw_catalog_history_list_22j25_596tvmgjai.jpg"
        alt=""
      />
      <div
        class="title_block"
        :style="
          props.title
            ? props.scroll[6]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
      >
        <h1>2022年</h1>
        <h6>
          2022年，Cona's台中勤美綠園道門市
          <br />
          2022年，Cona's高雄漢神巨蛋門市
        </h6>
      </div>
    </div>
    <div class="address_block" :style="props.title && { marginTop: '100px' }">
      <div
        class="address"
        :style="
          props.title
            ? props.scroll[7]
              ? { transform: 'translateX(0px)', marginLeft: '0' }
              : { transform: 'translateX(-1200px)', marginLeft: '0' }
            : {}
        "
      >
        <h1>Contact us</h1>
        <h3>店面資訊</h3>
        <div class="title_block">
          <div class="info_block">
            <fa icon="clock" />
            <h5>營業時間:<span>09:00-21:00</span></h5>
          </div>
          <div class="info_block">
            <fa icon="phone" />
            <h5>電話:<span>02-27668899</span></h5>
          </div>
          <div class="info_block">
            <fa icon="location-dot" />
            <h5>地址:<span>台北市信義區信福路6段6巷66號6樓</span></h5>
          </div>
        </div>
      </div>
      <div
        class="google_map"
        :style="
          props.title
            ? props.scroll[7]
              ? { transform: 'translateX(0px)', marginLeft: '100px' }
              : { transform: 'translateX(1200px)', marginLeft: '100px' }
            : {}
        "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2477183519404!2d121.22282561495693!3d24.95768518400822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1608602204354!5m2!1szh-TW!2stw"
          width="400"
          height="300"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          aria-hidden="false"
          tabindex="0"
          style="border: 0px"
        ></iframe>
      </div>
    </div>
    <div v-show="!props.title" class="bottom_block">
      <EllipseButton :title="'查看更多內容'" :path="'/about'" />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EllipseButton from "../atom/EllipseButton.vue";
const props = defineProps(["title", "scroll"]);
// 註冊 ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".end-container",
      start: "top bottom",
      end: "bottom center",
    },
  });

  tl.fromTo(".end-container", { opacity: 0 }, { opacity: 1, duration: 3 });
});
</script>

<style lang="scss" scoped>
.brandStory {
  position: relative;
  width: 80%;
  background-color: rgb(229, 227, 221);
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  padding-bottom: 50px;
  border-radius: 5px;
  box-shadow: 0 4px 15px 0 rgb(136 138 139 / 61%);
  overflow: hidden;
  h1 {
    font-size: 35px;
    color: #013b4f;
    margin-top: 100px;
  }
  .about_banner {
    position: absolute;
    width: 80%;
    height: 500px;
    background-image: url("https://www.conas-choc.com/upload/banner_ins_list/tw_banner_ins_list_19e30_fqzrg3auju.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 1s ease-in-out;
  }
  .story_block {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 100px 0 100px;
    img {
      max-width: 100%;
      transition: all 1s ease-in-out;
    }
    .title_block {
      text-align: left;
      width: 40%;
      margin-left: 120px;
      transition: all 1s ease-in-out;
      h1 {
        font-size: 2.5rem;
        letter-spacing: 1.5rem;
        font-family: "Roboto", sans-serif;
        letter-spacing: 5px;
        font-style: italic;
        font-weight: bold;
        font-family: Adobe Caslon Pro;
        border-bottom: 1px solid #013b4f;
        padding: 10px 0;
        margin: 30px auto;
      }
      h3 {
        margin-top: 40px;
        font-size: 1.4rem;
        letter-spacing: 1rem;
        font-family: "Roboto", sans-serif;
        color: #013b4f;
        margin: auto;
      }
      h6 {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        font-family: "Roboto", sans-serif;
        margin: 20px 0 20px;
        line-height: 36px;
        color: #013b4f;
      }
    }
  }
  .address_block {
    width: 80%;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    .address {
      transition: all 1s ease-in-out;
      h1 {
        font-size: 2.5rem;
        letter-spacing: 1.5rem;
        font-family: "Roboto", sans-serif;
        letter-spacing: 5px;
        font-style: italic;
        font-weight: bold;
        font-family: Adobe Caslon Pro;
        color: #013b4f;
        border-bottom: 1px solid #013b4f;
        padding: 10px 0;
        margin: 30px auto;
      }
      h3 {
        margin-top: 40px;
        font-size: 1.4rem;
        letter-spacing: 1rem;
        font-family: "Roboto", sans-serif;
        color: #013b4f;
        margin: auto;
      }
      .title_block {
        display: flex;
        flex-direction: column;
        margin-top: 25px;
        .info_block {
          display: inline-flex;
          align-items: center;
          h5 {
            font-size: 1.2rem;
            letter-spacing: 0.5rem;
            font-family: "Roboto", sans-serif;
            margin: 10px 0 10px 10px;
            color: #013b4f;
            span {
              color: #013b4f;
            }
          }
        }
      }
    }
    .google_map {
      transition: all 1s ease-in-out;
    }
  }
  .bottom_block {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
  }
}
@media (max-width: 530px) {
  .brandStory {
    width: 90%;
    .story_block {
      flex-direction: column;
      .title_block {
        width: 80%;
        margin-left: 0;
      }
    }
    .flex-reverse {
      flex-direction: column-reverse;
      img {
        margin-left: 0 !important;
      }
    }
    .story_mobile {
      .title_block {
        margin-left: 0 !important;
      }
    }
    .address_block {
      flex-direction: column;

      .google_map {
        margin-top: 30px;
        margin-left: 0 !important;
      }
    }
    .bottom_block {
      margin: 0;
    }
  }
}
</style>
