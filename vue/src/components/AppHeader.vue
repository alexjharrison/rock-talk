<template>
  <div
    id="app-header"
    class="border-bottom-1 border-primary py-2 px-4 flex-grow-0"
  >
    <div class="flex align-items-center" v-if="isLoggedIn">
      <router-link :to="{ name: 'Home' }">
        <img
          style="height: 3rem"
          class="mr-4 mt-1"
          alt="Rock Talk Logo"
          src="../assets/logo2.svg"
        />
      </router-link>
      <router-link :to="{ name: 'Dashboard' }">
        <p-button label="Dashboard" class="p-button-sm" />
      </router-link>
      <p-button label="Logout" @click="logout()" class="p-button-sm" />
      <p class="ml-auto">Hello {{ user?.first_name }}</p>
    </div>
    <div class="flex align-items-center" v-else>
      <router-link :to="{ name: 'Home' }">
        <img
          style="height: 3rem"
          class="mr-4 mt-1"
          alt="Rock Talk Logo"
          src="../assets/logo2.svg"
        />
      </router-link>
      <form @submit.prevent="login">
        <input type="text" class="hidden" v-model="formValues.email" />
        <input type="text" class="hidden" v-model="formValues.password" />
        <p-button label="Guest Login" type="submit" class="p-button-sm" />
      </form>
      <router-link :to="{ name: 'Login' }">
        <p-button label="Login" class="p-button-sm" />
      </router-link>
      <router-link :to="{ name: 'Register' }">
        <p-button label="Register" class="p-button-sm" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "../hooks/auth";

const { logout, login, user, isLoggedIn, formValues } = useAuth();
formValues.email = "guest@nasa.gov";
formValues.password = "password";
</script>

<style scoped lang="scss">
#app-header {
  background-color: var(--surface-c);
  & > div {
    max-width: 1440px;
    margin: auto;
  }
}
.p-button {
  margin-right: 1em;
}
</style>
