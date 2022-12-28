<template>
  <div class="product-item" v-for="item in productList">
    <img :src="item.imageUrl" />
    <h2>{{ item.name }}</h2>
    <div class="price">${{ item.price }}</div>
    <div class="product-more">
      <div class="more-btn btn">查看更多</div>
      <div class="shopping-btn btn">加到購物車</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const productList = computed(() => store.state.productList);
console.log("productList", productList.value);
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
  }

  h2 {
    margin: 0;
  }

  .product-more {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.75rem 0.5rem;
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
