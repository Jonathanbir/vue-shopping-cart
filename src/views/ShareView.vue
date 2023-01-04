<template>
  <div class="share-section">
    <h1>分享區</h1>
    <div class="article-container">
      <div
        class="article_item"
        v-for="(article, index) in ARTICLE_DATA"
        v-show="index < 3"
      >
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
    <section class="select-section">
      <div class="show_article_btn">
        <div class="show_img"><fa class="icon" icon="list" /></div>
        <div class="show_text">所有文章列表</div>
      </div>
      <div class="filter_big_box">
        <div class="filter_box">
          <label for="filter">篩選</label>
          <select name="filter" id="filter">
            <option value="art_time">時間新到舊</option>
            <option value="art_like_count">按讚數</option>
            <option value="art_msg_count">留言數</option>
            <option value="art_look_count">瀏覽數</option>
          </select>
        </div>
      </div>
      <div class="write_article_btn">
        <div class="write_img"><fa class="icon" icon="pen" /></div>
        <div class="write_text">投稿</div>
      </div>
    </section>
    <div class="article-list">
      <div
        class="prev-btn btn"
        :style="pageCurrent == 0 && { color: '#ccc', cursor: 'initial' }"
        @click="clickPrevBtn"
      >
        <fa icon="circle-chevron-left" />
      </div>
      <div
        class="next-btn btn"
        :style="
          pageCurrent + 1 == pageTotal && { color: '#ccc', cursor: 'initial' }
        "
        @click="clickNextBtn"
      >
        <fa icon="circle-chevron-right" />
      </div>
      <div class="card_big" v-for="(article, index) in shareList">
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
    <div class="page-container">
      <button
        class="page-btn"
        v-for="(btn, index) in pageTotal"
        @click="clickBtn(index)"
        :style="
          pageCurrent == index && {
            color: '#fff',
            background: 'rgb(21, 10, 67)',
          }
        "
      >
        <div>{{ index + 1 }}</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ARTICLE_DATA from "../data/article";
const articleList = ref([]);
const articleInit = ref([]);
for (let i = 0; i < ARTICLE_DATA.length; i++) {
  articleList.value.push(ARTICLE_DATA[i]);
}
for (let i = 0; i < 4; i++) {
  articleInit.value.push(ARTICLE_DATA[i]);
}
const shareList = ref(articleInit);
const pageTotal = ref(0);
const pageCurrent = ref(0);
pageTotal.value = ARTICLE_DATA.length / 4;

const clickBtn = (index) => {
  pageCurrent.value = index;
  shareList.value = articleList.value.splice(index * 4, 4);
  articleList.value = [...ARTICLE_DATA];
};

const clickPrevBtn = () => {
  if (pageCurrent.value > 0) {
    pageCurrent.value = pageCurrent.value - 1;
    shareList.value = articleList.value.splice(pageCurrent.value * 4, 4);
  }
  articleList.value = [...ARTICLE_DATA];
};

const clickNextBtn = () => {
  if (pageCurrent.value + 1 < pageTotal.value) {
    pageCurrent.value = pageCurrent.value + 1;
    shareList.value = articleList.value.splice(pageCurrent.value * 4, 4);
  }
  articleList.value = [...ARTICLE_DATA];
};
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
  .article-container {
    width: 1200px;
    .article_item {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 80%;
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
        left: -200%;
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
        flex-direction: row;
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
  .select-section {
    margin: 50px 0 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;

    .show_article_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      .show_img {
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .show_text {
        font-size: 1.2rem;
        letter-spacing: 1rem;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        color: #013b4f;
        letter-spacing: 5px;
        line-height: 1.5;
      }
    }
    .filter_big_box {
      display: flex;
      justify-content: center;
      align-items: center;
      .filter_box {
        display: flex;
        justify-content: center;
        align-items: center;
        label {
          margin-right: 5px;
          font-size: 1.1rem;
          letter-spacing: 0.8rem;
          font-family: "Roboto", sans-serif;
          color: #b3925b;
          font-weight: bold;
        }
        #filter {
          width: 150px;
          background: url("https://tibamef2e.com/ced101/project/g1/Images/article/share_list/select.svg")
            no-repeat right center transparent;
          background-color: #fff;
          font-size: 1rem;
          letter-spacing: 0.3rem;
          font-family: "Roboto", sans-serif;
          color: #013b4f;
          border: none;
          outline: none;
          border-radius: 3px;
          padding-left: 10px;
        }
      }
    }
    .write_article_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #013b4f;
      border-radius: 8px;
      overflow: hidden;
      width: 105px;
      height: 30px;
      .icon {
        color: #fff;
        padding: 10px;
      }
      .write_text {
        letter-spacing: 2px;
        line-height: 1.5;
        font-weight: bold;
        color: #fff;
        font-size: 15px;
      }
    }
  }
  .article-list {
    position: relative;
    display: flex;
    width: 1200px;
    height: 450px;
    margin: 50px auto;
    .btn {
      color: #000;
      font-size: 50px;
    }
    .next-btn {
      position: absolute;
      top: 40%;
      right: -50px;
    }
    .prev-btn {
      position: absolute;
      top: 40%;
      left: -50px;
    }

    .card_big {
      height: 400px;
      margin: auto 10px;
      &:hover {
        transform: scale(1.2) !important;
        width: 450px;
        height: 450px;
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
  .page-container {
    display: flex;
    margin-bottom: 50px;
    .page-btn {
      width: 50px;
      height: 50px;
      border-radius: 15px;
      border: 1px #013b4f solid;
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>
