<template>
  <ListModal :data="favoriteList">
    <div v-for="item in favoriteList" v-if="favoriteList.length > 0">
      <div class="list-item">
        <div
          class="img"
          :style="
            'background-image:url(' +
            item.imageUrl +
            ');background-size: 100%;background-position:center;background-repeat:no-repeat'
          "
        ></div>
        <h2>{{ item.name }}</h2>
        <div class="price">${{ item.price }}</div>
      </div>
    </div>
    <div class="list-empty" v-else>收藏清單目前沒有商品</div>
    <div
      class="list-btn-container"
      :style="favoriteList.length > 5 && { bottom: '-45px' }"
    >
      <router-link
        :to="favoriteList.length > 0 ? '/list/favorite' : '/product'"
      >
        <div
          class="primary btn"
          @click="store.commit('changeisListOpen', [false, false])"
        >
          {{ favoriteList.length > 0 ? "前往收藏清單" : "前往商品頁" }}
        </div></router-link
      >
    </div>
  </ListModal>
</template>

<script setup>
import { computed } from "vue";
import ListModal from "./ListModal.vue";
import { useStore } from "vuex";
const store = useStore();
const favoriteList = computed(() => store.state.favoriteList);
</script>

<style lang="scss" scoped></style>
