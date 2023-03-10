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
      path: "/product",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("../views/RankView.vue"),
    },
    {
      path: "/share",
      name: "share",
      component: () => import("../views/ShareView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/list/:listName",
      name: "list",
      component: () => import("../views/ListView.vue"),
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
