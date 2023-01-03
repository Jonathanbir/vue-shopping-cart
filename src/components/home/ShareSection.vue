<template>
  <div class="share-section section">
    <h1>分享區</h1>
    <div class="share-container">
      <div class="card_big">
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
      <div class="card_small_block">
        <div class="card_small">
          <div class="art_img_small">
            <img :src="ARTICLE_DATA[1].imageUrl" alt="" />
          </div>
          <div class="text_block">
            <div class="user">
              <img :src="ARTICLE_DATA[1].userImg" alt="" />
            </div>
            <div class="user_info_block">
              <p class="article_time">{{ ARTICLE_DATA[1].shareTime }}</p>
              <div class="article_descirption">
                <h6>{{ ARTICLE_DATA[1].title }}</h6>
                <p>
                  {{ ARTICLE_DATA[1].description }}
                </p>
              </div>
              <div class="user_info">
                <div class="user_status">
                  <div class="status_icon">
                    <fa class="icon" icon="eye" />
                    <p class="number">{{ ARTICLE_DATA[1].shareEyes }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon" icon="message" />
                    <p class="number">{{ ARTICLE_DATA[1].shareMessage }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon heart" icon="heart" />
                    <p class="number">{{ ARTICLE_DATA[1].shareLike }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_small">
          <div class="art_img_small">
            <img :src="ARTICLE_DATA[2].imageUrl" alt="" />
          </div>
          <div class="text_block">
            <div class="user">
              <img :src="ARTICLE_DATA[2].userImg" alt="" />
            </div>
            <div class="user_info_block">
              <p class="article_time">{{ ARTICLE_DATA[2].shareTime }}</p>
              <div class="article_descirption">
                <h6>{{ ARTICLE_DATA[2].title }}</h6>
                <p>
                  {{ ARTICLE_DATA[2].description }}
                </p>
              </div>
              <div class="user_info">
                <div class="user_status">
                  <div class="status_icon">
                    <fa class="icon" icon="eye" />
                    <p class="number">{{ ARTICLE_DATA[2].shareEyes }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon" icon="message" />
                    <p class="number">{{ ARTICLE_DATA[2].shareMessage }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon heart" icon="heart" />
                    <p class="number">{{ ARTICLE_DATA[2].shareLike }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_small">
          <div class="art_img_small">
            <img :src="ARTICLE_DATA[3].imageUrl" alt="" />
          </div>
          <div class="text_block">
            <div class="user">
              <img :src="ARTICLE_DATA[3].userImg" alt="" />
            </div>
            <div class="user_info_block">
              <p class="article_time">{{ ARTICLE_DATA[3].shareTime }}</p>
              <div class="article_descirption">
                <h6>{{ ARTICLE_DATA[3].title }}</h6>
                <p>
                  {{ ARTICLE_DATA[3].description }}
                </p>
              </div>
              <div class="user_info">
                <div class="user_status">
                  <div class="status_icon">
                    <fa class="icon" icon="eye" />
                    <p class="number">{{ ARTICLE_DATA[3].shareEyes }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon" icon="message" />
                    <p class="number">{{ ARTICLE_DATA[3].shareMessage }}</p>
                  </div>
                  <div class="status_icon">
                    <fa class="icon heart" icon="heart" />
                    <p class="number">{{ ARTICLE_DATA[3].shareLike }}</p>
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
import EllipseButton from "../atom/EllipseButton.vue";
import ARTICLE_DATA from "../../data/article";
</script>

<style lang="scss">
.share-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1000px;
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
</style>
