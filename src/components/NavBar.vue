<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{name: 'home'}">Navbar</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{name: 'about'}">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{name: 'article'}">Articles</RouterLink>
          </li>
          <li class="nav-item" v-if="!store.isLoggedin">
            <RouterLink class="nav-link" :to="{name: 'login'}">Login</RouterLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useAuth } from "@stores";
const store = useAuth();


</script>