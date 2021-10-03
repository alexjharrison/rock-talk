<template>
  <p>{{ props.post }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PostsStreamSubscription } from "../../../api";
const props = defineProps<{ post: PostsStreamSubscription["post"] }>();
</script>

<style lang="scss" scoped></style>
