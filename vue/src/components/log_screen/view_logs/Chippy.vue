<template>
  <Chip
    v-if="typeof props.metakey != 'undefined'"
    :label="`${props.metakey}: ${props.value}`"
    class="mr-2 mb-1 chippy"
  />
  <Chip
    v-if="typeof props.tagtitle != 'undefined'"
    :label="`${props.tagtitle}`"
    class="mr-2 mb-1 chippy"
  />
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import Chip from "primevue/chip";
const props =
  defineProps<{ metakey?: string; value?: string; tagtitle?: string }>();

onMounted(() => {
  console.log(props.tagtitle);
  console.log(typeof props.tagtitle == "undefined");
});
</script>

<style lang="scss" scoped>
.chippy {
  background-color: lightgrey;
  color: black;
}
</style>
