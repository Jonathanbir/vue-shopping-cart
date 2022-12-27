<template>
  <div class="product-item">
    <div class="img"></div>
    <h2>巧克力</h2>
    <div class="price">$100</div>
    <div class="product-more">
      <div class="more-btn btn">查看更多</div>
      <div class="shopping-btn btn">加到購物車</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 10px;

  .img {
    width: 100%;
    height: 200px;
    background-image: url("https://www.conas-choc.com/upload/fac_product_list_pic/tw_fac_product_list_19g09_83gdf62m3i.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
