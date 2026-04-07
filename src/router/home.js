export default {
  path: "/",
  name: "home",
  component: () => import("@views/HomePage.vue"),
  meta: { requiresAuth: false },
};
