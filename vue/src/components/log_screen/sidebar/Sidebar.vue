<template>
  <aside class="h-full">
    <div class="px-2">
      <p class="underline mb-1">Mission Dashboard</p>
      <h1 class="text-4xl m-0">Artemis III</h1>
    </div>
    <divider type="dashed" />
    <channel-shortcuts />
    <divider type="dashed" />
    <now-viewing />
  </aside>
</template>

<script setup lang="ts">
import ChannelShortcuts from "./ChannelShortcuts.vue";
import NowViewing from "./NowViewing.vue";
import Divider from "primevue/divider";
</script>

<style lang="scss" scoped></style>
