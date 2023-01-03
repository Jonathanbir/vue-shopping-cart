<template>
  <div class="share-section">
    <h1>分享區</h1>
    <div class="share-container">
      <div class="article_item" v-for="article in ARTICLE_DATA">
        <div class="article_img">
          <img :src="article.imageUrl" alt="" />
        </div>
        <div class="article_right">
          <div class="article_time">{{ article.shareTime }}</div>
          <div class="article_info">
            <div class="article_info_left">
              <div class="article_memimg">
                <img :src="article.userImg" />
              </div>
              <div class="article_memname">{{ article.name }}</div>
            </div>
          </div>
          <div class="article_count">
            <div class="article_box">
              <div class="article_icon">
                <fa class="icon" icon="eye" />
              </div>
              <span class="article_num">{{ article.shareEyes }}</span>
            </div>
            <div class="article_box">
              <div class="article_icon">
                <fa class="icon" icon="message" />
              </div>
              <span class="article_num">{{ article.shareMessage }}</span>
            </div>
            <div class="article_box">
              <div class="article_icon">
                <fa class="icon heart" icon="heart" />
              </div>
              <span class="article_num">{{ article.shareLike }}</span>
            </div>
          </div>
          <div class="article_detail">
            <div class="article_title">{{ article.title }}</div>
          </div>
          <div class="article_text">
            {{ article.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ARTICLE_DATA from "../data/article";
</script>

<style lang="scss" scoped>
.share-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(229, 227, 221);
  h1 {
    font-size: 35px;
    color: #013b4f;
    margin-top: 50px;
  }
  .article_item {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 25px;
    cursor: pointer;

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
    .article_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      min-width: 396px;
      height: 313px;
      font-size: 0;
      flex-shrink: 0;
      img {
        width: 100%;
        max-width: none;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
  .article_right {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 25px;
    background-color: #fff;
    flex-shrink: 1;
    .article_time {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      margin: 5px 0;
    }
    .article_info {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      .article_info_left {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: 0.3rem;
        font-family: "Roboto", sans-serif;
        .article_memimg {
          width: 76px;
          height: 76px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 0;
          margin-right: 35px;
          img {
            max-width: none;
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
          }
        }
        .article_memname {
          font-size: 24px;
          color: #013b4f;
        }
      }
    }
  }
  .article_count {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 5px 0;
    font-size: 1.4rem;
    letter-spacing: 0.3rem;
    font-family: "Roboto", sans-serif;

    .article_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .article_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin: 10px;
        flex-shrink: 0;
        span {
          font-size: 10px;
        }
      }
    }
  }
  .article_detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    .article_title {
      font-size: 18px;
      font-weight: bold;
      color: #013b4f;
      letter-spacing: 2px;
      line-height: 1.5;
    }
  }
  .article_text {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 5px 0;
  }
}
</style>
