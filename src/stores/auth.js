import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const db = [
    { id: 1, name: "Jean", email: "jean@demo.com" },
    { id: 2, name: "Celine", email: "celine@demo.com" },
  ];

  const currentUser = ref(null);
  const isLoggedin = computed(() => currentUser.value !== null);

  const login = (email) => {
    const user = db.find((u) => u.email === email);

    currentUser.value = user;
    return {
      isSuccess: user ? true : false,
    };
  };

  const logout = () => {
    currentUser.value = null;
  };

  return {
    currentUser,
    isLoggedin,
    login,
    logout,
  };
});
