<template>
  <header v-if="screen > 530">
    <div
      class="nav-wrapper"
      :style="scroll && { background: '#000', top: '-15px' }"
    >
      <nav>
        <RouterLink to="/"
          ><div
            class="sprite-nav-logo"
            :style="
              scroll && {
                transform: 'translate(10px, 4px)',
                width: '64px',
                height: '32px',
              }
            "
          ></div
        ></RouterLink>
        <RouterLink class="commodity" to="/commodity">商品頁</RouterLink>
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/">會員優惠</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>
  <header v-else>
    <div class="nav-wrapper"></div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterLink, RouterView } from "vue-router";

const store = useStore();
const scroll = ref(false);
const screen = ref(document.documentElement.scrollWidth);
const mobileActive = computed(() => store.state.menu.mobileActive);

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
.black {
  background-color: #000;
}
.nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  nav {
    position: relative;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    transition: all 0.5s ease-in-out;

    .menu {
      position: relative;
      padding: 5px 20px;
      border-left: none;

      &:hover .arrow-triggle {
        transform: rotate(180deg);
      }
      .arrow-triggle {
        position: absolute;
        top: 6px;
        right: 4px;
        width: 10px;
      }
    }

    .location {
      position: relative;
      padding: 5px 20px;

      &:hover .arrow-triggle {
        transform: rotate(180deg);
      }
      .arrow-triggle {
        position: absolute;
        top: 6px;
        right: 4px;
        width: 10px;
      }
    }

    a {
      display: inline-block;
      vertical-align: top;
      margin: 0 3px;
      padding: 5px 10px;
      line-height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: #ccb7a5;
      text-decoration: none;
    }

    .router-link-exact-active:hover {
      background-color: transparent;
    }

    .small {
      display: inline-block;
      vertical-align: top;
      margin: 0 3px;
      padding: 5px 10px;
      line-height: 14px;
      font-size: 12px;
      font-weight: 400;
      color: #ccb7a5;
      border-left: none;
    }

    .sprite-nav-logo {
      position: relative;
      top: -10px;
      left: -10px;
      width: 82px;
      height: 41px;
      background-image: url("https://thumbs.dreamstime.com/b/print-175602698.jpg");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .sprite-nav-logo:hover {
      background-image: url("data:image/png;base64,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");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .button-rectangle {
      position: relative;
      box-sizing: border-box;
      margin-top: -3px;
      margin-left: 20px;
      border: 1px solid #ffe87f;
      padding: 5px 10px;
      margin-right: 20px;
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      transition: border-color 0.1s ease-out;

      .text {
        display: inline-block;
        margin-right: 3px;
        pointer-events: none;
        color: #ffe87f;
        font-size: inherit;
        letter-spacing: inherit;
        position: relative;
        z-index: 2;
        color: #cdb8a5;
        font-size: 12px;
        letter-spacing: 1px;
        -webkit-transition: color 0.1s ease-out;
        transition: color 0.1s ease-out;
      }
    }
  }
}

.button-rectangle::before {
  content: "";
  background: #ffe87f;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: -webkit-transform 0.2s ease-out;
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}

.button-rectangle:hover:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
.button-rectangle:hover .text {
  color: #2e2822;
}
nav a:first-of-type {
  border: 0;
}

nav a:nth-child(2),
nav a:nth-child(3) {
  border: 0;
}

nav a:hover {
  color: #fff;
}
@media (max-width: 530px) {
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-top: 0;
    background-color: rgba(0, 0, 0, 0.85);
    nav {
      margin-top: 0;
      .navtoggle {
        width: 48px;
        height: 48px;
        b {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 19px;
          height: 19px;
          i {
            position: absolute;
            left: 0;
            top: 50%;
            width: 19px;
            height: 2px;
            overflow: hidden;
            margin-top: -1px;
            background: #cdb8a5;
            opacity: 1;
            -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
            transition: 0.1s ease-out;

            &:first-child {
              top: 1px;
            }

            &:last-child {
              top: 17px;
            }
          }
        }
      }
      .sprite-nav-logo {
        top: 5px;
        left: 0;
        right: 0;
        width: 50px;
        height: 40px;
        margin: auto;
      }
      .btn-reserve {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        padding: 0 1em;
        margin: 0;
        font-size: 0.9375em;
        text-align: center;
        line-height: 48px;
        white-space: nowrap;
        background: #89422e;
        color: #cdb8a5;
      }
    }
  }
}
</style>
