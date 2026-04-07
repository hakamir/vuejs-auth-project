import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../stores";

import homeRoutes from "./home";
import aboutRoutes from "./about";
import articleRoutes from "./article";
import loginRoutes from "./login";

const routes = [
  homeRoutes,
  aboutRoutes,
  articleRoutes,
  loginRoutes,
  {
    path: "/403",
    name: "error_403",
    component: () => import("@views/errors/403Page.vue"),
  },
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("@views/errors/404Page.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const store = useAuth();

  if (to.meta.requiresAuth && !store.isLoggedin) {
    return {
      name: "error_403",
    };
  }
});
