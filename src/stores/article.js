import { defineStore } from "pinia";
import { ref } from "vue";
import articleService from "@api/articleService";
import { instance } from "@api/axios";
import Form from "vform";

export const useArticleStore = defineStore("article", () => {
  const articles = ref([]);

  const form = ref(
    new Form({
      name: null,
      price: null,
      quantity: null,
    }),
  );

  const getArticles = async () => {
    try {
      const resp = await instance.get(articleService.getArticles);

      articles.value = resp.data.data.map((a) => {
        return a.data;
      });
    } catch (error) {
      console.log(error.response.status);
      console.log("error de chargement");
    }
  };

  const addArticle = async () => {
    form.value.busy = true;

    try {
      await instance.post(articleService.createArticle, {
        data: form.value.data(),
      });

      setTimeout(() => {
        form.value.busy = false;
      }, 3000);
    } catch (error) {
      form.value.busy = false;
    }
  };

  return { articles, getArticles, form, addArticle };
});
