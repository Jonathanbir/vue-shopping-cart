<template>
  <div
    class="modal-content"
    :style="props.auto && { width: '800px', height: '80vh' }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(["auto"]);
</script>

<style lang="scss" scoped>
.modal-content {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  margin: auto;
  display: flex;
  width: 500px;
  height: 250px;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
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
}
@media (max-width: 530px) {
  .modal-content {
    width: 90%;
  }
}
</style>
