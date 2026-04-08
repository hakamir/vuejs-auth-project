<template>
  <h1>List des articles</h1>
  <h3>La taille du tableau d'article est {{ store.articles.length }}</h3>
</template>
<script setup>
import { useArticleStore } from "@stores";
import { onMounted } from "vue";
const store = useArticleStore();

onMounted(() => {
  store.getArticles();
});
</script>