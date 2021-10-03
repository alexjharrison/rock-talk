<template>
  <toast />
  <div class="flex flex-column min-h-screen">
    <app-header />
    <main class="m-auto flex-grow-1 w-full">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="scss">
body {
  background-color: var(--surface-a);
  color: var(--text-color);
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  max-width: 1440px;
  margin: auto;
}

a {
  text-decoration: none;
}

.p-card {
  background-color: var(--surface-c);
}
</style>
