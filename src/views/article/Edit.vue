<template>
  <h1>Edit article</h1>
  <Form context="edit" />
</template>
<script setup>
import { onMounted } from "vue";
import { useArticleStore } from "../../stores/article";
import Form from "./components/Form.vue";
import { useRoute } from "vue-router";

const store = useArticleStore()
const route = useRoute()

onMounted(() => {
  store.getArticle(route.params.id)
})
</script>