<template>
  <div class="p-2">
    <h2 class="m-0 mb-4">Channel Shortcuts</h2>
    <div v-for="channel in myChannels?.channel" :key="channel.id" class="mb-2">
      <p-button
        :label="channel.title"
        :class="channel.id === selectedChannelId ? 'p-button-outlined' : ''"
        class="p-button-warning p-button-sm"
        @click="selectedChannelId = channel.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentPosts } from "../../../hooks/posts";

const { myChannels, selectedChannelId } = useCurrentPosts();
</script>
