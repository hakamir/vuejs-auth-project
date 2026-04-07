import { useAuth } from "@stores";

export default {
  path: "/login",
  name: "login",
  component: () => import("@views/LoginPage.vue"),
  meta: { requiresAuth: false },
  beforeEnter: (_to, _from) => {
    const store = useAuth();
    if (store.isLoggedin) {
      return {
        name: "home",
      };
    }
  },
};
