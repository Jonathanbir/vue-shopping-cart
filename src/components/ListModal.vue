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
  }
}
</style>
