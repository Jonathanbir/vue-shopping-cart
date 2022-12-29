<template>
  <ListModal :data="favoriteList">
    <div v-for="item in favoriteList" v-if="favoriteList.length > 0">
      <div class="list-item">
        <div
          class="img"
          :style="
            'background-image:url(' +
            item.imageUrl +
            ');background-size: 100%;background-position:center;background-repeat:no-repeat'
          "
        ></div>
        <h2>{{ item.name }}</h2>
        <div class="price">${{ item.price }}</div>
      </div>
    </div>
    <div class="list-empty" v-else>購物車目前沒有商品</div>
    <div
      class="list-btn-container"
      :style="favoriteList.length > 5 && { bottom: '-45px' }"
    >
      <div class="list-btn">前往收藏清單</div>
    </div>
  </ListModal>
</template>

<script setup>
import { computed } from "vue";
import ListModal from "./ListModal.vue";
import { useStore } from "vuex";
const store = useStore();
const favoriteList = computed(() => store.state.favoriteList);
</script>

<style lang="scss" scoped>
.list-message {
  .list-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 286px;
    height: 50px;
    padding: 0 10px;
  }

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    h2 {
      width: 100px;
      font-size: 12px;
      margin: 5px;
    }

    .img {
      width: 80px;
      height: 80px;
      margin: 5px;
    }

    .price {
      font-size: 12px;
      margin: 5px;
    }
  }
  .list-btn-container {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 40%);

    .list-btn {
      width: 150px;
      margin: auto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      margin-top: 7px;
      padding: 0.375rem 0.75rem;
      color: #fff;
      background: rgb(21, 10, 67);
      cursor: pointer;
    }
  }
}
</style>
