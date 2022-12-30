import { createStore, createLogger } from "vuex";
import DATA from "../data";

export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false, // 默認展開
    }),
  ],
  state() {
    return {
      isAlertBoxOpen: false,
      isListOpen: [false, false],
      isToastifyOpen: [false, false, false, false],
      productData: DATA,
      productList: DATA[0].items,
      categoryIndex: 0,
      cartList: [],
      favoriteList: [],
      removeItem: [],
      cartTotal: 0,
      priceTotal: 0,
    };
  },
  mutations: {
    handleChangeCart(state, value) {
      state.productList = value;
    },
    addRemoveItem(state, value) {
      state.removeItem = value;
    },
    addCartItem(state, productToAdd) {
      const existingCartItem = state.cartList.find(
        (cartItem) => cartItem.id == productToAdd.id
      );
      if (existingCartItem) {
        state.cartList = state.cartList.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartList = [...state.cartList, { ...productToAdd, quantity: 1 }];
        state.isToastifyOpen = [true, false, false, false];
        setTimeout(() => {
          state.isToastifyOpen = [false, false, false, false];
        }, 1500);
      }
    },
    removeCartItem(state, cartItemToRemove) {
      // find the cart item to remove
      const existingCartItem = state.cartList.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );
      // check if quantity is equal to 1, if it is remove that item from the cart
      if (existingCartItem.quantity == 1) {
        state.isToastifyOpen = [false, false, false, true];
        setTimeout(() => {
          state.isToastifyOpen = [false, false, false, false];
        }, 1500);
        state.cartList = state.cartList.filter(
          (cartItem) => cartItem.id !== cartItemToRemove.id
        );
      } else {
        // return back cartList with matching cart item with reduced quantity
        state.cartList = state.cartList.map((cartItem) =>
          cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    },
    clearCartItem(state, cartItemToClear) {
      state.isToastifyOpen = [false, false, false, true];
      setTimeout(() => {
        state.isToastifyOpen = [false, false, false, false];
      }, 1500);
      state.cartList = state.cartList.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id
      );
    },
    clearCartList(state) {
      state.cartList = [];
    },
    clearFavoriteList(state) {
      state.favoriteList = [];
    },
    addFavoriteItem(state, productToAdd) {
      const existingCartItem = state.favoriteList.find(
        (favoriteItem) => favoriteItem.id == productToAdd.id
      );
      if (existingCartItem) {
        state.isToastifyOpen = [false, false, true, false];
        setTimeout(() => {
          state.isToastifyOpen = [false, false, false, false];
        }, 1500);
        state.favoriteList = state.favoriteList.filter(
          (favoriteItem) => favoriteItem.id !== productToAdd.id
        );
      } else {
        state.isToastifyOpen = [false, true, false, false];
        setTimeout(() => {
          state.isToastifyOpen = [false, false, false, false];
        }, 1500);
        state.favoriteList = [...state.favoriteList, { ...productToAdd }];
      }
    },
    cartTotal(state) {
      state.cartTotal = state.cartList.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
    },
    priceTotal(state) {
      state.priceTotal = state.cartList.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    },
    changeCategoryIndex(state, payload) {
      state.categoryIndex = payload;
    },
    changeisListOpen(state, payload) {
      state.isListOpen = payload;
    },
    changeIsAlertBoxOpen(state, payload) {
      state.isAlertBoxOpen = payload;
    },
  },
});
