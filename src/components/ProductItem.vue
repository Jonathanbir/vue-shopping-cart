<template>
  <div class="product-item" v-for="item in productList">
    <fa
      class="favorite"
      icon="heart"
      :style="
        favoriteIndex.find((index) => index == item.id) && {
          color: '#dc3545',
        }
      "
      @click="
        store.commit('addFavoriteItem', item);
        store.commit('favoriteIndex');
      "
    />
    <div
      class="img"
      :style="
        'background-image:url(' +
        item.imageUrl +
        ');background-size: 100%;background-position:center;'
      "
    ></div>
    <h2>{{ item.name }}</h2>
    <div class="price">$ {{ item.price }}</div>
    <div class="product-more">
      <div class="more-btn btn">查看更多</div>
      <div
        class="shopping-btn btn"
        @click="
          store.commit('addCartItem', item);
          store.commit('cartTotal');
          store.commit('priceTotal');
        "
      >
        加到購物車
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const productList = computed(() => store.state.productList);
const favoriteIndex = computed(() => store.state.favoriteIndex);
</script>

<style lang="scss" scoped>
.product-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 8px 24px #e2e2e2;
  }

  .img {
    width: 100%;
    height: 200px;
  }

  h2 {
    width: 280px;
    font-size: 16px;
    margin: 0;
    padding-top: 10px;
  }

  .price {
    width: 100%;
    font-size: 1.25rem;
    color: #dc3545;
    text-align: right;
    padding: 10px;
    margin-right: 10px;
  }

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #aaa;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .product-more {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.75rem 0.1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);

    .btn {
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
      border: 1px solid transparent;
      transition: all 0.5s ease-in-out;
    }
    .more-btn {
      color: #6c757d;
      border-color: #6c757d;

      &:hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      }
    }
    .shopping-btn {
      color: #dc3545;
      border-color: #dc3545;

      &:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
      }
    }
  }
}
</style>
