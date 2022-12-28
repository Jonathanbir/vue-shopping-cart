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
      isCartOpen: false,
      productData: DATA,
      productList: DATA[0].items,
      cartItems: [],
    };
  },
  mutations: {
    handleChangeCart(state, value) {
      state.productList = value;
    },
    addCartItem(state, productToAdd) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...productToAdd, quantity: 1 },
        ];
      }
    },
  },
  actions: {},
});
