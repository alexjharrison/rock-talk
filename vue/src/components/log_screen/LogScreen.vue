<template>
  <div class="flex h-full">
    <Sidebar class="sidebar w-24rem flex-grow-1 w-full h-full" />
    <div class="flex-grow-1 w-full h-full">
      <LogScreenList />
      <PostForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./sidebar/Sidebar.vue";
import LogScreenList from "./view_logs/LogScreenList.vue";
import PostForm from "./post_form/PostForm.vue";
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--surface-c);
  border-right: 2px solid var(--surface-d);
}
</style>
