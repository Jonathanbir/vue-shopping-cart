<template>
  <footer>
    <div class="footer-container">
      <div class="footer-item">
        <h2>品牌故事</h2>
        <p>關於品牌 <span>About Us</span></p>
        <p>聯絡我們 <span>Contact Us</span></p>
      </div>
      <div class="footer-item">
        <h2>商品專區</h2>

        <p
          class="link"
          v-for="(item, index) in productData"
          @click="
            store.commit('handleChangeCart', productData[index].items);
            store.commit('changeCategoryIndex', index);
            scrollToOffset(0);
          "
        >
          <router-link to="/product">
            {{ item.title }}
          </router-link>
        </p>
      </div>
      <div class="footer-item">
        <h2>聯絡我們</h2>
        <p><fa icon="phone" /> Tel │04-9291-9528</p>
        <p><fa icon="print" /> Fax │04-9291-9778</p>
        <p><fa icon="envelope" /> E-mail│ conas.choc@gmail.com</p>
        <p><fa icon="map-marker" /> 台北市信義區信福路6段6巷66號6樓</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { scrollToOffset } from "../util/helper";
const store = useStore();
const productData = computed(() => store.state.productData);
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 300px;
  background-color: rgb(21, 10, 67);
  margin: auto;
  .footer-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
    padding: 30px;
    margin: auto;
    .footer-item {
      color: #fff;
      .link {
        cursor: pointer;
      }
      h2 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
      span {
        font-size: 12px;
        color: hsla(0, 0%, 100%, 0.6);
      }
      a {
        color: #fff;
      }
    }
  }
}
</style>
