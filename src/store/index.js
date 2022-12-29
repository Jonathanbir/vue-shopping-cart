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
      isListOpen: [false, false],
      productData: DATA,
      productList: DATA[0].items,
      categoryIndex: 0,
      cartList: [],
      favoriteList: [],
      cartTotal: 0,
      favoriteIndex: [],
    };
  },
  mutations: {
    handleChangeCart(state, value) {
      state.productList = value;
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
      }
    },
    addFavoriteItem(state, productToAdd) {
      const existingCartItem = state.favoriteList.find(
        (favoriteItem) => favoriteItem.id == productToAdd.id
      );
      if (existingCartItem) {
        state.favoriteList = state.favoriteList.filter(
          (favoriteItem) => favoriteItem.id !== productToAdd.id
        );
      } else {
        state.favoriteList = [...state.favoriteList, { ...productToAdd }];
      }
    },
    cartTotal(state) {
      state.cartTotal = state.cartList.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
    },
    favoriteIndex(state) {
      state.favoriteIndex = state.favoriteList.map((item) => item.id);
    },
    changeCategoryIndex(state, payload) {
      state.categoryIndex = payload;
    },
    changeisListOpen(state, payload) {
      state.isListOpen = payload;
    },
  },
});
