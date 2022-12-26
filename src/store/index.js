import { createStore, createLogger } from "vuex";

export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false, // 默認展開
    }),
  ],
  state() {
    return {
      isCartOpen: false,
      cartItems: [],
    };
  },
  mutations: {},
  actions: {},
});
