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
        return {
          id: a.id,
          ...a.data,
        };
      });
    } catch (error) {
      console.log(error.response.status);
      console.log("error de chargement");
      throw error;
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
      throw error;
    }
  };

  const getArticle = async (id) => {
    try {
      const resp = await instance.get(articleService.getArticle(id));
      form.value.clear();
      Object.assign(form.value, {
        id,
        ...resp.data.data.data,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const updateArticle = async () => {
    form.value.busy = true;
    const { id, ...rest } = form.value.data();
    console.log(rest);
    try {
      await instance.put(articleService.updateArticle(form.value.id), {
        data: rest,
      });
      form.value.busy = false;
    } catch (error) {
      form.value.busy = false;
      throw error;
    }
  };

  const deleteArticle = async (id) => {
    try {
      await instance.delete(articleService.deleteArticle(id));
    } catch (error) {
      throw error;
    }
  };
  return {
    articles,
    getArticles,
    form,
    addArticle,
    getArticle,
    updateArticle,
    deleteArticle,
  };
});
