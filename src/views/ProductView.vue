<template>
  <div class="product-container">
    <div data-v-573c6fd0="" class="sticky-top">
      <ul data-v-573c6fd0="" class="list-group mb-3 category">
        <li data-v-573c6fd0="" class="list-group-item">全部商品</li>
        <li data-v-573c6fd0="" class="list-group-item">上半身</li>
        <li data-v-573c6fd0="" class="list-group-item">下半身</li>
        <li data-v-573c6fd0="" class="list-group-item">鞋</li>
        <li data-v-573c6fd0="" class="list-group-item">飾品</li>
        <li data-v-573c6fd0="" class="list-group-item">配件</li>
      </ul>
      <!-- <form data-v-573c6fd0="" class="input-group mb-3">
        <input
          data-v-573c6fd0=""
          type="search"
          placeholder="search"
          class="form-control"
        />
        <div data-v-573c6fd0="" class="input-group-append">
          <button data-v-573c6fd0="" class="input-group-text bg-light">
            <i data-v-573c6fd0="" class="fas fa-search"></i>
          </button>
        </div>
      </form> -->
    </div>
    <div class="product">
      <ProductItemVue v-for="n in 10" />
    </div>
  </div>
</template>

<script setup>
import ProductItemVue from "../components/ProductItem.vue";
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
