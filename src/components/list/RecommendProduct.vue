<template>
  <div class="recommend-product">
    <table role="table" class="table b-table table-striped table-hover">
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader" scope="col" colspan="3">
            <div>推薦商品</div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <fa
          class="arrow arrow-left"
          icon="circle-chevron-left"
          @click="
            changeRecommend();
            store.commit('handleAnimation');
          "
        />
        <fa
          class="arrow arrow-right"
          icon="circle-chevron-right"
          @click="
            changeRecommend();
            store.commit('handleAnimation');
          "
        />
        <tr role="row">
          <td
            aria-colindex="1"
            role="cell"
            class="recommend-item"
            v-for="(list, idx) in DATA[index].items"
            v-show="screen > 530 ? idx < 3 : idx < 1"
          >
            <Transition name="fadeAndShow" mode="out-in">
              <div v-show="animation">
                <div class="img-container">
                  <div
                    class="img"
                    :style="
                      'background-image:url(' +
                      list.imageUrl +
                      ');background-size:cover;background-position:center;background-repeat:no-repeat'
                    "
                  ></div>
                </div>
                <h2 class="name">
                  {{ list.name }}
                </h2>
                <p
                  v-show="route.params.listName == 'cart'"
                  aria-colindex="2"
                  role="cell"
                >
                  NT${{ list.price }}
                </p>
                <div class="recommend-btn">
                  <fa
                    class="favorite"
                    icon="heart"
                    :style="
                      favoriteList.find((index) => index.id == list.id) && {
                        color: '#dc3545',
                      }
                    "
                    @click="store.commit('addFavoriteItem', list)"
                  />
                  <div
                    class="shopping-btn btn"
                    @click="
                      store.commit('addCartItem', list);
                      store.commit('cartTotal');
                      store.commit('priceTotal');
                    "
                  >
                    加到購物車
                  </div>
                </div>
              </div>
            </Transition>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, Transition } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import DATA from "../../data/data";
const route = useRoute();
const store = useStore();
const index = ref(0);
const animation = computed(() => store.state.animation);
const favoriteList = computed(() => store.state.favoriteList);
const screen = ref(document.documentElement.scrollWidth);

const changeRecommend = () => {
  index.value = Math.floor(Math.random() * 6);
};
</script>

<style lang="scss" scoped>
.recommend-product {
  tbody {
    position: relative;

    .arrow {
      position: absolute;
      z-index: 2;
      top: 141px;
      font-size: 30px;
      color: #b3b6b9;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    .arrow-left {
      left: 5px;
    }

    .arrow-right {
      right: 5px;
    }
  }

  .table {
    margin: 30px auto;
    td {
      width: 300px;
    }
  }
  .recommend-item {
    .img-container {
      width: 200px;
      height: 150px;
      margin: auto;
      overflow: hidden;
      .img {
        width: 200px;
        height: 150px;
        margin: auto;
        transition: all 0.5s ease-in-out;
      }
    }
    h2 {
      font-size: 13px;
      padding: 0;
      margin: 0 auto;
    }
    p {
      font-size: 12px;
      padding: 5px;
      margin: 0 auto;
    }
    .name {
      width: 100%;
    }
    .recommend-btn {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .favorite {
        color: #fff;
        background-color: rgb(21, 10, 67);
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
      }

      .shopping-btn {
        width: 100px;
        margin: 10px;
        color: #fff;
        background-color: rgb(21, 10, 67);
        border-color: rgb(21, 10, 67);
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #ccb7a5;
        }
      }
    }
  }
  .recommend-item:hover .img {
    transform: scale(1.1);
  }
}
</style>
