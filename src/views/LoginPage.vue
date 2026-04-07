<template>
  <div class="container mt-5" style="max-width: 400px">
    <h1 class="mb-4">Login</h1>

    <form @submit.prevent="handleLogin">
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <div class="mb-3">
        <label class="form-label fw-bold">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>

    <p v-if="succesMessage" class="mt-3 text-success">
      {{ succesMessage }}
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "@stores";
import { ref } from "vue";

const email = ref("demo@gmail.com");
const succesMessage = ref("");
const errorMessage = ref("");

const store = useAuth();
const router = useRouter();

const handleLogin = () => {
  if (!email.value) {
    errorMessage.value = "Erreur de connexion";
    return;
  }

  const resp = store.login(email.value);
  console.log(resp);
  if (resp.isSuccess) {
    succesMessage.value = `Logged in with ${email.value}`;

    router.push({
      name: "home",
    });
  } else {
    errorMessage.value = "Erreur de connexion";
  }
};
</script>