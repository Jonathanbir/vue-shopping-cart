<template>
  <header v-if="screen > 530">
    <div
      class="nav-wrapper"
      :style="scroll && { background: '#150A43', top: '-15px' }"
      @click="
        store.commit('changeisListOpen', [false, false]);
        store.commit('changeIsAlertBoxOpen', false);
      "
    >
      <nav class="nav">
        <div class="nav-container">
          <RouterLink @click="scrollToOffset(0)" to="/"
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
          <RouterLink @click="scrollToOffset(0)" to="/product"
            >商品區</RouterLink
          >
          <RouterLink @click="scrollToOffset(0)" to="/rank"
            >巧克力排名</RouterLink
          >
          <RouterLink @click="scrollToOffset(0)" to="/share">分享區</RouterLink>
          <RouterLink @click="scrollToOffset(0)" to="/about"
            >關於我們</RouterLink
          >
        </div>
        <div
          class="cart-container"
          :style="scroll && { color: '#ccb7a5', top: '-8px' }"
        >
          <div class="icon-item">
            <fa class="icon" icon="user" />
          </div>
          <div class="icon-item">
            <fa
              class="icon"
              icon="cart-shopping"
              @click.stop="
                store.commit('changeisListOpen', [!isListOpen[0], false])
              "
            />
            <div
              class="total-num"
              :style="
                cartTotal !== 0 && {
                  backgroundColor: 'rgb(204, 183, 165)',
                  color: '#000',
                }
              "
            >
              {{ cartTotal }}
            </div>
          </div>
          <div class="icon-item">
            <fa
              class="icon"
              icon="heart"
              @click.stop="
                store.commit('changeisListOpen', [false, !isListOpen[1]])
              "
            />
            <div
              class="total-num"
              :style="
                favoriteList.length !== 0 && {
                  backgroundColor: 'rgb(204, 183, 165)',
                  color: '#000',
                }
              "
            >
              {{ favoriteList.length }}
            </div>
          </div>
        </div>
      </nav>
    </div>
    <RouterView />
  </header>
  <header v-else>
    <div
      class="nav-wrapper"
      :style="scroll && { background: '#150A43', top: '-15px' }"
      @click="
        store.commit('changeisListOpen', [false, false]);
        store.commit('changeIsAlertBoxOpen', false);
      "
    >
      <nav class="nav">
        <div
          class="navtoggle"
          :style="scroll && { top: '8px' }"
          @click="store.commit('handleChangeMenuMobileActive', !mobileActive)"
        >
          <b
            ><i
              :class="scroll && 'line'"
              :style="
                mobileActive && { width: '23px', transform: 'rotate(45deg)' }
              "
            ></i
            ><i
              :class="scroll && 'line'"
              :style="
                mobileActive && {
                  opacity: '0',
                  width: '23px',
                  transitionDuration: '.1s',
                }
              "
            ></i
            ><i
              :class="scroll && 'line'"
              :style="
                mobileActive && { width: '23px', transform: 'rotate(-45deg)' }
              "
            ></i
          ></b>
        </div>
        <div class="nav-container">
          <RouterLink @click="scrollToOffset(0)" to="/"
            ><div
              class="sprite-nav-logo"
              :style="
                scroll && {
                  transform: 'translate(10px, 4px)',
                  top: '16px',
                  width: '64px',
                  height: '22px',
                }
              "
            ></div
          ></RouterLink>
        </div>
        <div
          class="cart-container"
          :style="scroll && { color: '#ccb7a5', top: '8px' }"
        >
          <div class="icon-item">
            <fa class="icon" icon="user" />
          </div>
          <div class="icon-item">
            <fa
              class="icon"
              icon="cart-shopping"
              @click.stop="
                store.commit('changeisListOpen', [!isListOpen[0], false])
              "
            />
            <div
              class="total-num"
              :style="
                cartTotal !== 0 && {
                  backgroundColor: 'rgb(204, 183, 165)',
                  color: '#000',
                }
              "
            >
              {{ cartTotal }}
            </div>
          </div>
          <div class="icon-item">
            <fa
              class="icon"
              icon="heart"
              @click.stop="
                store.commit('changeisListOpen', [false, !isListOpen[1]])
              "
            />
            <div
              class="total-num"
              :style="
                favoriteList.length !== 0 && {
                  backgroundColor: 'rgb(204, 183, 165)',
                  color: '#000',
                }
              "
            >
              {{ favoriteList.length }}
            </div>
          </div>
        </div>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterLink, RouterView } from "vue-router";
import { scrollToOffset } from "../util/helper";

const store = useStore();
const scroll = ref(false);
const screen = ref(document.documentElement.scrollWidth);
const cartTotal = computed(() => store.state.cartTotal);
const isListOpen = computed(() => store.state.isListOpen);
const favoriteList = computed(() => store.state.favoriteList);
const mobileActive = computed(() => store.state.mobileActive);
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
  background-color: rgb(247, 247, 247);
  transition: all 0.5s ease-in-out;
  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 1100px;
    font-size: 12px;
    text-align: center;
    margin-top: 30px;
    transition: all 0.5s ease-in-out;

    .cart-container {
      position: relative;
      top: -8px;
      display: flex;

      .icon-item {
        position: relative;
        margin: auto 10px;

        .total-num {
          position: absolute;
          right: -8px;
          top: 5px;
          width: 18px;
          height: 18px;
          font-size: 10px;
          line-height: 1.1rem;
          color: #fff;
          background-color: #bf7f5a;
          border-radius: 100%;
        }
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
  }
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
    background-color: rgb(247, 247, 247);
    nav {
      width: 100%;
      margin-top: 0;
      .navtoggle {
        position: relative;
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
          .line {
            background-color: #fff;
          }
          i {
            position: absolute;
            left: 0;
            top: 50%;
            width: 19px;
            height: 2px;
            overflow: hidden;
            margin-top: -1px;
            background: #000;
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
      .cart-container {
        top: 0;
      }

      .sprite-nav-logo {
        position: absolute;
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
