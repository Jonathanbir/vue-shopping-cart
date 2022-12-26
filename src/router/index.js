import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/commodity",
      name: "menu",
      component: () => import("../views/CommodityView.vue"),
    },
    {
      path: "/:id",
      name: "userdata",
      component: () => import("../views/[id].vue"),
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
      path: "/:domain(.*)*",
      name: "NotFound",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
