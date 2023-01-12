<template>
  <Transition name="fadeAndShowBackGround" mode="out-in">
    <div
      :class="screen > 530 ? 'list-body' : 'list-body list-mobile'"
      :style="scroll && { top: '57px' }"
      @click="store.commit('changeisListOpen', [false, false])"
    >
      <Transition name="fadeAndShow" mode="out-in">
        <div
          :class="screen > 530 ? 'list-message' : 'list-message message-mobile'"
          :style="
            screen > 530 ? scroll && { top: '60px' } : scroll && { top: '34px' }
          "
        >
          <div class="list-box" :style="listHeightStyle">
            <slot></slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, Transition } from "vue";
import { useStore } from "vuex";
const store = useStore();
const scroll = ref(false);
const screen = ref(document.documentElement.scrollWidth);
const props = defineProps(["data"]);

const listHeightStyle = computed(() => {
  if (props.data.length > 5) {
    return "height:450px";
  } else if (props.data.length == 0) {
    return "height:150px";
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
.list-body {
  position: fixed;
  top: 81px;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  .list-message {
    position: fixed;
    z-index: 100;
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
}

@media (max-width: 530px) {
  .list-mobile {
    .message-mobile {
      top: 48px;
      right: 0;
      left: 0;
      margin: auto;
    }
  }
}
</style>
