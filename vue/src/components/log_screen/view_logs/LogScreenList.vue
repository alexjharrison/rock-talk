<template>
  <section class="p-2">
    <h1 class="mb-4">View Logs</h1>
    <div class="px-3">
      <div class="p-inputgroup">
        <!-- <span class="p-inputgroup-addon">
            </span> -->
        <span class="p-float-label p-input-icon-left w-full">
          <i class="pi pi-search" />
          <InputText
            id="search"
            type="text"
            v-model="searchInput"
            class="w-full"
          />
          <label for="search">Search</label>
        </span>
        <p-button
          icon="pi pi-caret-down"
          label="Advanced"
          class="p-button-warning"
        />
      </div>
    </div>
    <!-- <AdvancedSearch /> -->
  </section>
  <PostContent />
</template>

<script setup lang="ts">
import PostContent from "./PostContent.vue";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import AdvancedSearch from "./AdvancedSearch.vue";

const searchInput = ref("");
const isAdvancedShowing = ref(false);
</script>

<style lang="scss" scoped></style>
