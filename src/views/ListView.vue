<template>
  <div class="list-container">
    <table
      role="table"
      aria-busy="false"
      aria-colcount="3"
      class="table b-table table-striped table-hover"
      id="__BVID__1798"
    >
      <!----><!---->
      <thead role="rowgroup" class="">
        <!---->
        <tr role="row" class="">
          <th role="columnheader" scope="col" aria-colindex="1" class="">
            <div>商品資訊</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="2" class="">
            <div>單件價格</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="3" class="">
            <div>數量</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="3" class="">
            <div>小計</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="3" class="">
            <div>刪除</div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr role="row" class="" v-for="list in cartList">
          <td aria-colindex="1" role="cell" class="td-01">
            <div
              class="img"
              :style="
                'background-image:url(' +
                list.imageUrl +
                ');background-size: 100%;background-position:center;background-repeat:no-repeat'
              "
            ></div>
          </td>
          <td aria-colindex="1" role="cell" class="td-01">
            <h2>{{ list.name }}</h2>
          </td>
          <td aria-colindex="2" role="cell" class="">NT${{ list.price }}</td>
          <td aria-colindex="3" role="cell" class="">{{ list.quantity }}</td>
          <td aria-colindex="4" role="cell" class="">NT${{ list.price }}</td>
          <td aria-colindex="5" role="cell" class="">
            <fa class="icon" icon="trash-can" />
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
const cartList = computed(() => store.state.cartList);
</script>

<style lang="scss" scoped>
.list-container {
  position: relative;
  top: 200px;
  max-width: 1320px;
  width: 1200px;
  margin: auto;

  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }

  table {
    border-collapse: collapse;
  }

  thead {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .table td,
  .table th {
    padding: 0.75rem;
    vertical-align: center;
    border: 1px solid #dee2e6;
    text-align: center;
  }

  .td-01 {
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 120px;
      height: 120px;
      margin: 5px;
    }

    h2 {
      font-size: 12px;
      margin: 5px;
    }
  }
  .icon {
    cursor: pointer;
  }
}
</style>
