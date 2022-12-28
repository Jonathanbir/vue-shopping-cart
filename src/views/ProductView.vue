<template>
  <div class="product-container">
    <div class="sticky-top">
      <ul class="list-group mb-3 category">
        <li
          @click="store.commit('handleChangeCart', productData[0].items)"
          class="list-group-item"
        >
          全部商品
        </li>
        <li
          @click="store.commit('handleChangeCart', productData[0].items)"
          class="list-group-item"
        >
          上半身
        </li>
        <li
          @click="store.commit('handleChangeCart', productData[3].items)"
          class="list-group-item"
        >
          下半身
        </li>
        <li
          @click="store.commit('handleChangeCart', productData[1].items)"
          class="list-group-item"
        >
          鞋
        </li>
        <li
          @click="store.commit('handleChangeCart', productData[2].items)"
          class="list-group-item"
        >
          外套
        </li>
        <li
          @click="store.commit('handleChangeCart', productData[4].items)"
          class="list-group-item"
        >
          配件
        </li>
      </ul>
      <!-- <form  class="input-group mb-3">
        <input
          
          type="search"
          placeholder="search"
          class="form-control"
        />
        <div  class="input-group-append">
          <button  class="input-group-text bg-light">
            <i  class="fas fa-search"></i>
          </button>
        </div>
      </form> -->
    </div>
    <div class="product">
      <ProductItemVue />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ProductItemVue from "../components/ProductItem.vue";
const store = useStore();
const productData = computed(() => store.state.productData);
</script>

<style lang="scss" scoped>
.product-container {
  position: relative;
  top: 100px;
  display: flex;
  width: 1200px;
  margin: auto;
  .sticky-top {
    max-width: 16.66667%;
    margin-right: 100px;
    .list-group-item {
      position: relative;
      display: block;
      padding: 0.75rem 1.25rem;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.125);
      font-size: 0.8rem;
      width: 100%;
      color: #495057;
      text-align: inherit;
      cursor: pointer;

      &:hover {
        z-index: 1;
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
        font-weight: 800;
      }
    }
  }
  .product {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
    margin: auto;
  }
}
</style>
