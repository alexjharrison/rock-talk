<template>
  <div class="flex h-full">
    <Sidebar class="sidebar w-24rem flex-grow-1 w-full h-full" />
    <div class="flex-grow-1 w-full">test</div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--surface-c);
  border-right: 2px solid var(--surface-d);
}
</style>
