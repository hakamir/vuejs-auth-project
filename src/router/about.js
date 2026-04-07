export default {
  path: "/about",
  name: "about",
  component: () => import("@views/AboutPage.vue"),
  meta: { requiresAuth: false },
};
