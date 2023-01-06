<template>
  <div class="list-container">
    <h2>
      <router-link to="/list/cart">
        <span
          class="list-select-title"
          :style="
            route.params.listName == 'cart' && {
              color: 'rgb(21, 10, 67)',
              fontSize: '18px',
              fontWeight: '800',
            }
          "
          >購物清單</span
        ></router-link
      >
      <span>/</span>
      <router-link to="/list/favorite">
        <span
          class="list-select-title"
          :style="
            route.params.listName == 'favorite' && {
              color: 'rgb(21, 10, 67)',
              fontSize: '18px',
              fontWeight: '800',
            }
          "
          >收藏清單</span
        ></router-link
      >
    </h2>
    <table
      role="table"
      class="table b-table table-striped table-hover"
      v-if="screen > 530"
    >
      <thead role="rowgroup">
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
    <table role="table" class="table b-table table-striped table-hover" v-else>
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader" scope="col" aria-colindex="1">
            <div>商品資訊</div>
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
            role="columnheader"
            v-show="route.params.listName == 'cart'"
            class="td-01 td-row td-title"
          >
            <div class="td-title-item">單件價格</div>
            <div class="td-title-item">數量</div>
          </td>
          <td class="td-01 td-row" v-show="route.params.listName == 'cart'">
            <div class="td-row-item" v-show="route.params.listName == 'cart'">
              NT${{ list.price }}
            </div>
            <div
              v-show="route.params.listName == 'cart'"
              aria-colindex="3"
              role="cell"
              class="td-row-item"
            >
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
              {{ list.quantity }}
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
            </div>
          </td>
          <td
            aria-colindex="4"
            role="cell"
            v-show="route.params.listName == 'cart'"
          >
            NT${{ list.price }}
          </td>
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
    <div
      class="list-content"
      :style="
        route.params.listName == 'favorite' && { justifyContent: 'center' }
      "
    >
      <RecommendProduct />
      <OderInformation v-show="route.params.listName == 'cart'" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import RecommendProduct from "../components/list/RecommendProduct.vue";
import OderInformation from "../components/list/OderInformation.vue";
const route = useRoute();
const store = useStore();
const cartList = computed(() => store.state.cartList);
const favoriteList = computed(() => store.state.favoriteList);
const priceTotal = computed(() => store.state.priceTotal);
const screen = ref(document.documentElement.scrollWidth);
</script>

<style lang="scss" scoped>
.list-container {
  position: relative;
  max-width: 1320px;
  width: 1200px;
  margin: auto;
  margin-bottom: 100px;

  h2 {
    span {
      font-size: 15px;
      font-weight: 400;
      padding: 5px;
    }
    .list-select-title {
      cursor: pointer;
      color: #aaa;
    }
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
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
  .list-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    font-size: 20px;
    font-weight: 800;
  }
}

@media (max-width: 530px) {
  .list-container {
    width: 100%;
    margin-top: 60px;
    table {
      width: 95% !important;
      margin: auto;
      .td-row {
        .td-row-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          padding: 5px;
          text-align: center;
          font-weight: 500;

          .icon {
            margin: 5px;
          }
        }
      }

      .td-title {
        background-color: rgb(247, 247, 247);
        .td-title-item {
          width: 50%;
          padding: 0.75rem;
          text-align: center;
          font-weight: 500;
        }
      }
    }
    .list-content {
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
