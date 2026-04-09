<template>
  <div class="container mt-4">
    <h1>{{ t('article.form.title') }}</h1>

    <form @submit.prevent="handleSubmit" class="mt-3">
      <div class="mb-3">
        <label class="form-label">{{  t('article.form.inputs.name') }}</label>
        <input
          type="text"
          class="form-control"
          v-model="form.name"
          :placeholder="t('article.form.inputs.namePlaceholder')"
          :class="{ 'is-invalid': form.errors.has('name') }"
        />
        <div class="invalid-feedback" v-html="form.errors.get('name')" />
      </div>

      <div class="mb-3">
        <label class="form-label">{{ t('article.form.inputs.price') }}</label>
        <input
          type="number"
          class="form-control"
          v-model="form.price"
          :placeholder="t('article.form.inputs.pricePlaceholder')"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">{{ t('article.form.inputs.quantity') }}</label>
        <input
          type="number"
          class="form-control"
          v-model="form.quantity"
          :placeholder="t('article.form.inputs.quantityPlaceholder')"
        />
      </div>

      <button class="btn btn-primary" :disabled="form.busy">
        <span
          v-if="form.busy"
          class="spinner-border spinner-border-sm me-2"
          role="status"
        />

        {{ form.busy ? t('article.form.btnSaveProcessing') : t('article.form.btnSave') }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useArticleStore } from "@stores";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
defineProps({
  context: {
    type: String,
    required: true,
  },
});

const store = useArticleStore();
const { t } = useI18n();

const form = store.form;

const router = useRouter();

console.log(form.errors.has("name"));

const handleSubmit = () => {
  if (!form.name) {
    const errors = form.errors;
    errors.set("name", "Le nom est obligatoire");
    return;
  }

  store.addArticle();
  // form.reset();
  // router.push({
  //   name: "article",
  // });
};
</script>