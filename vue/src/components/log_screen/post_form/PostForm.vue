<template>
  <section class="px-2 mt-auto">
    <h2>{{ isEditing ? "Edit" : "Create" }} Post</h2>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isEditing = ref(false);
</script>

<style lang="scss" scoped></style>
