<template>
  <router-link :to="props.path">
    <button
      class="seemore color-2"
      :class="props.color == 'orange' && 'oreange-color'"
      @click="scrollToOffset(0)"
    >
      {{ props.title }}
    </button></router-link
  >
</template>

<script setup>
import { scrollToOffset } from "../../util/helper";
const props = defineProps(["color", "title", "path"]);
</script>

<style lang="scss" scoped>
.seemore {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-size: 300% 100%;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgb(45 54 65 / 75%);

  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
    transform: translateY(-5px);
  }
}

.oreange-color {
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 2px 5px 0 rgb(229 66 10 / 75%);
}
</style>
