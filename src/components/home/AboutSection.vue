<template>
  <section class="brandStory">
    <div class="story_block">
      <img
        src="https://www.conas-choc.com/upload/ad_footer_list/tw_ad_footer_list_19d23_9x3rw5w4be.jpg"
        alt=""
      />
      <div class="title_block">
        <h1>About Dream Chocolate</h1>
        <h3>關於夢想巧克力</h3>
        <h6>
          夢想巧克力品牌，提供多樣性的選擇滿足您和您的朋友及家人。
          有各種不同種類及口感的巧克力，讓您在品嚐時激發出不一樣的體驗
          ，也提供新鮮豐富的配料客製化巧克力做搭配滿足您最挑剔味蕾。
        </h6>
      </div>
    </div>
    <div class="address_block">
      <div class="address">
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
      <div class="google_map">
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
    <div class="bottom_block">
      <EllipseButton :title="'查看更多內容'" :path="'/product'" />
    </div>
  </section>
</template>

<script setup>
import EllipseButton from "../atom/EllipseButton.vue";
</script>

<style lang="scss" scoped>
.brandStory {
  width: 80%;
  background-color: rgb(229, 227, 221);
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  border-radius: 5px;
  box-shadow: 0 4px 15px 0 rgb(136 138 139 / 61%);
  .story_block {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 100px 0 100px;
    img {
      max-width: 100%;
    }
    .title_block {
      text-align: left;
      width: 40%;
      margin-left: 120px;
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
</style>
