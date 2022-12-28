<template>
  <header v-if="screen > 530">
    <div
      class="nav-wrapper"
      :style="scroll && { background: '#000', top: '-15px' }"
    >
      <nav>
        <div class="nav-container">
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
          <RouterLink to="/">會員優惠 </RouterLink>
        </div>
        <div class="cart-container">
          <fa class="icon" icon="user" />
          <fa class="icon" icon="cart-shopping" />
          <fa class="icon" icon="heart" />
        </div>
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

.icon {
  margin: auto 5px;
  font-size: 15px;
  cursor: pointer;
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
    display: flex;
    justify-content: space-between;
    width: 1100px;
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
  color: #ccc;
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
