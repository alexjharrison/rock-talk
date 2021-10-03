<template>
  <div class="p-2">
    <h2>Channel Shortcuts</h2>
    <p-button label="button" class="p-button-outlined p-button-warning" />
    {{ myChannels }}
  </div>
</template>

<script setup lang="ts">
import { useCurrentPosts } from "../../../hooks/posts";

const { myChannels } = useCurrentPosts();
</script>
