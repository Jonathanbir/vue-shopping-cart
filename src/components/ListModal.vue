<template>
  <div class="list-message" :style="scroll && { top: '60px' }">
    <div class="list-box" :style="listHeightStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const scroll = ref(false);

const props = defineProps({
  data: Object,
});

const listHeightStyle = computed(() => {
  if (props.data.length > 5) {
    return "height:450px";
  } else if (props.data.length == 0) {
    return "height:50px";
  } else {
    return "height:" + props.data.length * 90 + "px";
  }
});

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 25) {
        scroll.value = true;
      } else {
        scroll.value = false;
      }
    },
    true
  );
});
</script>

<style lang="scss" scoped>
.list-message {
  position: fixed;
  z-index: 99;
  top: 80px;
  right: 180px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 40%);
  // opacity: 0;
  transition: all 0.5s;
  .list-box {
    overflow: scroll;

    .list-empty {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 286px;
      height: 50px;
      padding: 0 10px;
    }

    .list-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;

      h2 {
        width: 100px;
        font-size: 12px;
        margin: 5px;
      }

      .img {
        width: 80px;
        height: 80px;
        margin: 5px;
      }

      .price {
        font-size: 12px;
        margin: 5px;
      }
    }
  }
  .list-btn-container {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 40%);

    .list-btn {
      width: 150px;
      margin: auto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      margin-top: 7px;
      padding: 0.375rem 0.75rem;
      color: #fff;
      background: rgb(21, 10, 67);
      cursor: pointer;
    }
  }
}
</style>
