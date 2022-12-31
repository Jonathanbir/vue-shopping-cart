<template>
  <div
    id="toastContainer"
    class="toastContainer"
    :style="
      props.color && { color: props.color[0], background: props.color[1] }
    "
    @click="store.commit('handleIsToastifyOpen')"
  >
    <p>
      <slot></slot>
      <span id="close">
        <fa icon="close" class="closebtn" onclick="closetoast()" />
      </span>
    </p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["color"]);
const borderColor = props.color ? props.color[0] : "#8db48c";
</script>

<style lang="scss" scoped>
body {
  background-color: rgb(23, 27, 38);
}

.toastContainer {
  position: fixed;
  top: 10px;
  right: 15px;
  margin: auto;
  margin-top: 10px;
  margin-right: 10px;
  width: 200px;
  height: auto;
  padding: 2px;
  padding-left: 20px;
  font-size: 15px;
  color: #437c45;
  background-color: #dff0d9;
  border-radius: 5px;
  z-index: 9999;
  cursor: pointer;
}
.toastContainer:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 0;
  border-bottom: 2px solid v-bind(borderColor);
  animation: border_anim 1.5s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

#close {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  right: 1;
}
.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0);
  border-style: none;
  color: #437c45;
  cursor: pointer;
}

#close :hover {
  transition: 0.5s;
  color: black;
}
</style>
