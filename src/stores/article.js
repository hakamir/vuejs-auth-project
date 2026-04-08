import { defineStore } from "pinia";
import { ref } from "vue";
import articleService from "@api/articleService";
import { instance } from "@api/axios";
import Form from "vform";

export const useArticleStore = defineStore("article", () => {
  const articles = ref([]);

  const form = new Form({
    name: null,
    price: null,
    qty: null,
  });

  const getArticles = async () => {
    const resp = await instance.get(articleService.getArticles);
    articles.value = resp.data;
    console.log(articles.value);
  };

  const addArticle = () => {
    //TODO : create article
  };

  return { articles, getArticles, form, addArticle };
});
