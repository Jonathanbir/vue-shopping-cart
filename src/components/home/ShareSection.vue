<template>
  <div class="share-section section">
    <h1>分享區</h1>
    <div class="share-container">
      <div class="card_big" v-show="screen > 530">
        <div class="art_img_big">
          <img :src="ARTICLE_DATA[0].imageUrl" alt="" />
        </div>
        <div class="text_block">
          <div class="user">
            <img :src="ARTICLE_DATA[0].userImg" alt="" />
          </div>
          <div class="user_info_block">
            <p class="article_time">{{ ARTICLE_DATA[0].shareTime }}</p>
            <div class="article_descirption">
              <h6>{{ ARTICLE_DATA[0].title }}</h6>
              <p>
                {{ ARTICLE_DATA[0].description }}
              </p>
            </div>
            <div class="user_info">
              <div class="user_status">
                <div class="status_icon">
                  <fa class="icon" icon="eye" />
                  <p class="number">{{ ARTICLE_DATA[0].shareEyes }}</p>
                </div>
                <div class="status_icon">
                  <fa class="icon" icon="message" />
                  <p class="number">{{ ARTICLE_DATA[0].shareMessage }}</p>
                </div>
                <div class="status_icon">
                  <fa class="icon heart" icon="heart" />
                  <p class="number">{{ ARTICLE_DATA[0].shareLike }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card_small_block" v-if="screen > 530">
        <div
          class="card_small"
          v-for="(article, index) in ARTICLE_DATA"
          v-show="index > 0 && index < 4"
        >
          <div class="art_img_small">
            <img :src="article.imageUrl" alt="" />
          </div>
          <div class="text_block">
            <div class="user">
              <img :src="article.userImg" alt="" />
            </div>
            <div class="user_info_block">
              <p class="article_time">{{ article.shareTime }}</p>
              <div class="article_descirption">
                <h6>{{ article.title }}</h6>
                <p>
                  {{ article.description }}
                </p>
              </div>
              <div class="user_info">
                <div class="user_status">
                  <div class="status_icon">
                    <fa class="icon" icon="eye" />
                    <p class="number">{{ article.shareEyes }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon" icon="message" />
                    <p class="number">{{ article.shareMessage }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon heart" icon="heart" />
                    <p class="number">{{ article.shareLike }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card_small_block" v-else>
        <div
          class="card_big"
          v-for="(article, index) in ARTICLE_DATA"
          v-show="index > 0 && index < 4"
        >
          <div class="art_img_big">
            <div
              class="img"
              :style="
                'background-image:url(' +
                article.imageUrl +
                ');background-size:cover;background-position:center;background-repeat:no-repeat'
              "
            ></div>
          </div>
          <div class="text_block">
            <div class="user">
              <img :src="article.userImg" alt="" />
            </div>
            <div class="user_info_block">
              <p class="article_time">{{ article.shareTime }}</p>
              <div class="article_descirption">
                <h6>{{ article.title }}</h6>
                <p>
                  {{ article.description }}
                </p>
              </div>
              <div class="user_info">
                <div class="user_status">
                  <div class="status_icon">
                    <fa class="icon" icon="eye" />
                    <p class="number">{{ article.shareEyes }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon" icon="message" />
                    <p class="number">{{ article.shareMessage }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon heart" icon="heart" />
                    <p class="number">{{ article.shareLike }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EllipseButton :title="'查看更多分享'" :path="'/share'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EllipseButton from "../atom/EllipseButton.vue";
import ARTICLE_DATA from "../../data/article";
const screen = ref(document.documentElement.scrollWidth);

// 註冊 ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".share-section",
      start: "top bottom",
      end: "bottom center",
    },
  });

  tl.fromTo(
    ".share-section",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2 }
  );
});
</script>

<style lang="scss">
.share-section {
  margin: 50px auto;
  .share-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1000px;
    margin-bottom: 50px;
    h6,
    p {
      color: #013b4f;
    }

    .card_small_block {
      width: 40%;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      cursor: pointer;

      .card_small {
        width: 100%;
        height: 170px;
        border-radius: 20px;
        box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
        overflow: hidden;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        background-color: white;
        position: relative;

        &:hover {
          opacity: 0.8;
          transform: translateY(-5px);
          transition: 0.5s ease-in-out;
        }

        &::before {
          position: absolute;
          top: 0;
          left: -80%;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          transform: skewX(-25deg);
        }

        &:hover {
          &::before {
            -webkit-animation: shine 0.75s;
            animation: shine 0.75s;
          }
        }

        .art_img_small {
          width: 280.51px;
          height: 202px;
          img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            max-width: none;
          }
        }
        .text_block {
          width: 55%;
          padding: 15px;
          .user {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              -o-object-fit: cover;
              object-fit: cover;
              max-width: none;
            }
          }
          .user_info_block {
            display: flex;
            flex-direction: column;
            .article_time {
              display: none;
              font-size: 0.2rem;
              letter-spacing: 0.2rem;
              font-family: "Roboto", sans-serif;
              text-align: right;
            }
            .user_info {
              display: flex;
              justify-content: flex-end;
              .user_status {
                display: inline-flex;
                .status_icon {
                  display: inline-flex;
                  align-items: center;
                  img {
                    margin-left: 15px;
                  }
                  .number {
                    font-size: 0.5rem;
                    letter-spacing: 0.2rem;
                    font-family: "Roboto", sans-serif;
                    margin-left: 5px;
                  }
                  .icon {
                    color: #aaa;
                    margin: auto 10px;
                  }
                  .heart {
                    color: red;
                  }
                }
              }
            }
          }
          .article_descirption {
            width: 100%;
            text-align: left;
            h6 {
              font-size: 0.8rem;
              letter-spacing: 0.3rem;
              font-family: "Roboto", sans-serif;
              margin-top: 5px;
              margin-bottom: 5px;
              font-weight: bold;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p {
              font-size: 0.6rem;
              letter-spacing: 0.2rem;
              font-family: "Roboto", sans-serif;
              margin-top: 8px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 530px) {
  .share-section {
    .share-container {
      width: 100%;
      margin-bottom: 20px;
      .card_small_block {
        width: 100%;
        .card_big {
          width: 300px;
          height: 400px;
          margin: auto;
          margin-bottom: 20px;
          &:hover {
            transform: scale(1.2) !important;
            width: 250px;
            height: 400px;
            .article_descirption {
              width: 100%;
              height: 150px;

              h6 {
                white-space: initial;
                overflow: initial;
              }
              p {
                white-space: initial;
                overflow: initial;
                height: auto;
              }
            }
            .user_info {
              position: absolute;
              bottom: 10px;
            }
            .text_block {
              transform: translateY(-30px);
            }
            .art_img_big {
              .img {
                background-size: 100% !important;
                background-position-y: -1px !important;
              }
            }
            .text_block {
              align-items: flex-start;
            }
          }
          .text_block {
            padding: 10px;
          }
          &:hover {
            opacity: 0.8;
            transform: translateY(-5px);
            transition: 0.5s ease-in-out;
          }

          &::before {
            left: -200%;
          }
          .article_time {
            font-size: 0.2rem;
            letter-spacing: 0.2rem;
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
          .art_img_big {
            height: 200px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .text_block {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 35px 15px;

            .article_descirption {
              p {
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
