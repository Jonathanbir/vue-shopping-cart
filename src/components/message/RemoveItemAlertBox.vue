<template>
  <AlerBoxModal>
    <div class="modal-header text-dark py-4 border-0">
      <fa
        class="btn-close"
        icon="close"
        @click="store.commit('changeIsAlertBoxOpen', false)"
      />
    </div>
    <div class="modal-body">
      <p class="text-dark text-center">確定要移除商品嗎？</p>
      <p class="text-sm text-info text-center">(刪除後將無法恢復)</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-warning"
        data-bs-dismiss="modal"
        @click="store.commit('changeIsAlertBoxOpen', false)"
      >
        取消</button
      ><button
        type="button"
        class="btn btn-warning text-white"
        @click="
          scrollToOffset(0);
          removeFunction(removeItem);
          store.commit('changeIsAlertBoxOpen', false);
        "
      >
        確認刪除
      </button>
    </div></AlerBoxModal
  >
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AlerBoxModal from "./AlerBoxModal.vue";
import { scrollToOffset } from "../../util/helper";
const route = useRoute();
const store = useStore();
const removeItem = computed(() => store.state.removeItem);

const removeFunction = (list) => {
  if (route.params.listName == "cart") {
    store.commit("clearCartItem", list);
    store.commit("cartTotal");
    store.commit("priceTotal");
  } else {
    store.commit("addFavoriteItem", list);
  }
};
</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    cursor: pointer;
  }
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  .text-center {
    text-align: center;
  }
  .text-dark {
    color: #242424;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .text-info {
    color: #cdcdcd;
  }
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  .btn-warning {
    color: #fff;
    background-color: #901824;
    border-color: #901824;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #901824;
      border-color: #901824;
    }
  }
  .btn-outline-warning {
    color: #901824;
    border-color: #901824;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #901824;
      border-color: #901824;
    }
  }
  .btn {
    padding: 0.375rem 0.75rem;
    margin: 5px;
  }
}
</style>
