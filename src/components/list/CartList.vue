<template>
  <ListModal :data="cartList">
    <div v-for="item in cartList" v-if="cartList.length > 0">
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
        <div class="price">{{ item.quantity }}個</div>
      </div>
    </div>
    <div class="list-empty" v-else>購物車目前沒有商品</div>
    <div
      class="list-btn-container"
      :style="cartList.length > 5 && { bottom: '-45px' }"
    >
      <router-link :to="cartList.length > 0 ? '/list/cart' : '/product'"
        ><div
          class="primary btn"
          @click="store.commit('changeisListOpen', [false, false])"
        >
          {{ cartList.length > 0 ? "前往購物車" : "前往商品頁" }}
        </div></router-link
      >
    </div>
  </ListModal>
</template>

<script setup>
import { computed } from "vue";
import ListModal from "./ListModal.vue";
import { useStore } from "vuex";
const store = useStore();
const cartList = computed(() => store.state.cartList);
</script>

<style lang="scss">
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
    width: 305px;
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
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 40%);
  }
}
</style>
