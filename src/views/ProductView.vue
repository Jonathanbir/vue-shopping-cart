<template>
  <div class="product-container">
    <div class="sticky-top">
      <ul class="list-group mb-3 category" v-for="(item, index) in productData">
        <li
          @click="
            store.commit('handleChangeCart', item.items);
            store.commit('changeCategoryIndex', index);
            scrollToOffset(0);
          "
          class="list-group-item"
          :style="
            item.idx == categoryIndex && {
              background: 'rgb(21, 10, 67)',
              color: '#fff',
            }
          "
        >
          {{ item.title }}
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
import { scrollToOffset } from "../util/helper";

const store = useStore();
const productData = computed(() => store.state.productData);
const categoryIndex = computed(() => store.state.categoryIndex);
</script>

<style lang="scss" scoped>
.product-container {
  position: relative;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
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
    margin: 0 auto;
    margin-bottom: 200px;
  }
}
</style>
