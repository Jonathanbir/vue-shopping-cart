<template>
  <div class="order-information">
    <table role="table" class="table b-table table-striped table-hover">
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader" scope="col" colspan="3">
            <div>訂單資訊</div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr role="row">
          <td aria-colindex="1" role="cell" class="oder-num">
            <p class="count">
              <span>商品數量:</span> <span>共 {{ cartTotal }} 件</span>
            </p>
            <p class="total">
              <span> 小計:</span>
              <span>NT${{ priceTotal }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="total">
              <span class="total-money"> 總計:</span>
              <span class="total-money">NT${{ priceTotal }}</span>
            </p>
            <div class="primary btn" @click="">前往結帳</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cartTotal = computed(() => store.state.cartTotal);
const priceTotal = computed(() => store.state.priceTotal);
</script>

<style lang="scss" scoped>
.order-information {
  margin: 0 20px;
  .table td {
    text-align: left;
    width: 400px;

    .count,
    .total {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .total-money {
      font-size: 18px;
      font-weight: 900;
    }
  }
}
</style>
