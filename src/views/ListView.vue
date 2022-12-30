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
      <thead role="rowgroup">
        <!---->
        <tr role="row">
          <th role="columnheader" scope="col" aria-colindex="1">
            <div>商品資訊</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="2">
            <div>單件價格</div>
          </th>
          <th
            v-show="route.params.listName == 'cart'"
            role="columnheader"
            scope="col"
            aria-colindex="3"
          >
            <div>數量</div>
          </th>
          <th
            v-show="route.params.listName == 'cart'"
            role="columnheader"
            scope="col"
            aria-colindex="3"
          >
            <div>小計</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="3">
            <div>刪除</div>
          </th>
        </tr>
      </thead>
      <tbody
        role="rowgroup"
        v-if="
          route.params.listName == 'cart'
            ? cartList.length > 0
            : favoriteList.length > 0
        "
      >
        <tr
          role="row"
          v-for="list in route.params.listName == 'cart'
            ? cartList
            : favoriteList"
        >
          <td aria-colindex="1" role="cell" class="name td-01">
            <h2>{{ list.name }}</h2>
          </td>
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
          <td
            v-show="route.params.listName == 'cart'"
            aria-colindex="2"
            role="cell"
          >
            NT${{ list.price }}
          </td>
          <td
            v-show="route.params.listName == 'cart'"
            aria-colindex="3"
            role="cell"
          >
            <div class="increase icon">
              <fa
                icon="circle-plus"
                @click="
                  store.commit('addCartItem', list);
                  store.commit('cartTotal');
                  store.commit('priceTotal');
                "
              />
            </div>
            {{ list.quantity }}
            <div
              class="decrease icon"
              @click="
                store.commit('removeCartItem', list);
                store.commit('cartTotal');
                store.commit('priceTotal');
              "
            >
              <fa icon="circle-minus" />
            </div>
          </td>
          <td aria-colindex="4" role="cell">NT${{ list.price }}</td>
          <td aria-colindex="5" role="cell">
            <fa
              class="icon"
              icon="trash-can"
              @click="
                store.commit('changeIsAlertBoxOpen', [true, false]);
                store.commit('addRemoveItem', list);
              "
            />
          </td>
        </tr>
        <tr>
          <td aria-colindex="4" role="cell" colspan="5">
            <div
              class="primary btn"
              :style="route.params.listName == 'cart' ? { float: 'left' } : {}"
              @click="store.commit('changeIsAlertBoxOpen', [false, true])"
            >
              {{
                route.params.listName == "cart" ? "清空購物車" : "清空收藏清單"
              }}
            </div>
            <div v-show="route.params.listName == 'cart'" class="price-total">
              總計:NT$ <span>{{ priceTotal }}</span>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody role="rowgroup" v-else>
        <td aria-colindex="1" role="cell" colspan="5">
          <h3>
            {{
              route.params.listName == "cart"
                ? "購物車目前沒有商品"
                : "收藏清單目前沒有商品"
            }}
          </h3>
          <router-link to="/product"
            ><div
              class="primary btn"
              @click="store.commit('changeisListOpen', [false, false])"
            >
              前往商品頁
            </div></router-link
          >
        </td>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();
const cartList = computed(() => store.state.cartList);
const favoriteList = computed(() => store.state.favoriteList);
const priceTotal = computed(() => store.state.priceTotal);
</script>

<style lang="scss" scoped>
.list-container {
  position: relative;
  top: 100px;
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

  span {
    font-size: 20px;
    font-weight: 800;
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
  .name {
    h2 {
      font-weight: 900;
      font-size: 16px;
    }
  }

  .price-total {
    margin-top: 8px;
    float: right;
  }
}
</style>
