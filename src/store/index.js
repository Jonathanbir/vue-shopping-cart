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
  },
  actions: {},
});
