<template>
  <section class="p-2">
    <h1 class="mb-4">View Logs</h1>
    <div class="px-3">
      <div class="p-inputgroup">
        <span class="w-full p-float-label p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            id="search"
            type="text"
            v-model="searchInput"
            class="w-full"
          />
          <label for="search">Search</label>
        </span>
        <!-- <p-button
          icon="pi pi-caret-down"
          label="Advanced"
          class="p-button-warning"
        /> -->
        <p-button
          icon="pi pi-caret-down"
          label="Advanced"
          class="p-button-outlined p-button-primary pr-5"
        />
      </div>
    </div>
    <AdvancedSearch v-if="isAdvancedShowing" />
  </section>
  <div class="px-3 py-1 mx-3 mt-3 border-1 border-primary panel-container">
    <ScrollPanel class="scroll-panel">
      <PostContent
        v-for="post in currentPosts?.post"
        :key="post.id"
        :post="post"
      />
    </ScrollPanel>
  </div>
</template>

<script setup lang="ts">
import PostContent from "./PostContent.vue";
import { ref, watchEffect, nextTick } from "vue";
import InputText from "primevue/inputtext";
import ScrollPanel from "primevue/scrollpanel";
import AdvancedSearch from "./AdvancedSearch.vue";
import { usePostsStreamSubscription } from "../../../api";
import { useCurrentPosts } from "../../../hooks/posts";

const searchInput = ref("");
const isAdvancedShowing = ref(false);

const { currentPosts } = useCurrentPosts();

watchEffect(() => {
  if (currentPosts.value) {
    nextTick(() => {
      const scrollPanel = document.querySelector(".p-scrollpanel-content");
      const windowHeight = scrollPanel?.scrollHeight;

      windowHeight && scrollPanel?.scrollTo(0, windowHeight);
    });
  }
});
</script>

<style lang="scss" scoped>
.panel-container {
  border-radius: 15px;
}
.scroll-panel {
  height: 45vh;
}
</style>
