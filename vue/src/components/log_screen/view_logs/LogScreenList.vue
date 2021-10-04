<template>
  <section class="p-2">
    <div class="flex justify-content-between align-items-center">
      <h1 class="mb-4">View Logs</h1>
      <p-button label="Lock posts" class="p-button-warning" />
      <!-- <ConfirmDialog /> -->
    </div>
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
      <Loading v-if="!currentPosts?.post" />
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
import { useCurrentPosts } from "../../../hooks/posts";
import Loading from "./Loading.vue";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import ConfirmDialog from "primevue/confirmdialog";

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

// const confirm = useConfirm();
// const toaster = useToast();
// const confirmLock = () => {
//   confirm.require({
//     message: "Are you ready to confirm your logs to date",
//     header: "Confirmation",
//     icon: "pi pi-exclamation-triangle",
//     accept: () => {
//       toaster.add({
//         severity: "info",
//         summary: "Confirmed",
//         detail: "Logs have been confirmed",
//         life: 3000,
//       });
//     },
//     reject: () => {
//       toaster.add({
//         severity: "warn",
//         summary: "Canceled",
//         detail: "You may continue editing",
//         life: 3000,
//       });
//     },
//   });
// };
</script>

<style lang="scss" scoped>
.panel-container {
  border-radius: 15px;
}
.scroll-panel {
  height: 45vh;
}
</style>
