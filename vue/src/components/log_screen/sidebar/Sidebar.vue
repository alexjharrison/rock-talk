<template>
  <aside class="h-full">
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
