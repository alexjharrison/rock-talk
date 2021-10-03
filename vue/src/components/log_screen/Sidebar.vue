<template>
  <div class="h-full">
    <channel-shortcuts />
    <divider type="dashed" />
    <now-viewing />
  </div>
</template>

<script setup lang="ts">
import ChannelShortcuts from "./sidebar/ChannelShortcuts.vue";
import NowViewing from "./sidebar/NowViewing.vue";
import Divider from "primevue/divider";
</script>

<style lang="scss" scoped></style>
