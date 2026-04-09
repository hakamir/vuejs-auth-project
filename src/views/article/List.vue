<template>
  <div class="container mt-4">
    <h1>{{ t("article.list.title") }}</h1>

    <RouterLink
      class="btn btn-sm btn-primary"
      :to="{ name: 'article_create' }"
      >{{ t("article.create.btnCreate") }}</RouterLink
    >

    <table class="table table-bordered table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>{{ t("article.list.table.head.name") }}</th>
          <th>{{ t("article.list.table.head.price") }}</th>
          <th>{{ t("article.list.table.head.qty") }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="article in store.articles" :key="article.id">
          <td>{{ article.name }}</td>
          <td>{{ article.price }}</td>
          <td>{{ article.quantity }}</td>
        </tr>

        <!-- Cas vide -->
        <tr v-if="store.articles.length === 0">
          <td colspan="3" class="text-center">
            {{ t("article.list.table.noData") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useArticleStore } from "@stores";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const store = useArticleStore();
const { t } = useI18n();

onMounted(() => {
  store.getArticles();
});
</script>