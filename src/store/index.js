import { createStore, createLogger } from "vuex";
import SHOP_DATA from "../shop-data";

export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false, // 默認展開
    }),
  ],
  state() {
    return {
      isCartOpen: false,
      productData: SHOP_DATA,
      productList: SHOP_DATA[0].items,
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
