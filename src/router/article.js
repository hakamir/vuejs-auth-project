export default {
  path: "/articles",
  meta: { requiresAuth: true },
  children: [
    {
      path: "",
      name: "article",
      component: () => import("@views/article/List.vue"),
    },
    {
      path: "create",
      name: "article_create",
      component: () => import("@views/article/Create.vue"),
    },
    {
      path: "edit/:id",
      name: "article_edit",
      component: () => import("@views/article/Edit.vue"),
    },
    {
      path: "show/:id",
      name: "article_show",
      component: () => import("@views/article/Show.vue"),
    },
  ],
};
