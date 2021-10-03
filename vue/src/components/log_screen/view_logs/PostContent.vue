<template>
  <div class="post-container mt-3 p-2 relative">
    <div class="absolute flex justify-content-end top-0 right-0">
      <small class="mr-2 mt-2">
        {{ props.post?.user.first_name }} {{ props.post?.user.last_name }},
        {{ timeFunc(props.post?.updated_at) }}
      </small>
    </div>
    <p>{{ props.post?.text }}</p>
    <div class="meta">
      <div>
        <Chippy
          v-for="meta in props.post?.meta_fields"
          :metakey="meta.meta_key.title"
          :value="meta.value"
          :key="meta.id"
        />
        <Chippy
          v-for="tag in props.post?.post_tags"
          :tagtitle="tag.tag.title"
          :key="tag.id"
        />
      </div>
      <div class="mt-2 flex justify-content-end">
        <p-button label="Copy Post Id" class="p-button-sm" />
        <p-button
          v-if="user.id == post.user_id"
          label="Edit"
          class="ml-2 p-button-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chippy from "./Chippy.vue";
import { defineProps } from "vue";
import { PostsStreamSubscription } from "../../../api";
import { useAuth } from "../../../hooks/auth";
const { user } = useAuth();
const props = defineProps<{ post: PostsStreamSubscription["post"] }>();
const timeFunc = (updated: string) => {
  let dateTime = new Date(updated);
  let date = dateTime.toLocaleDateString();
  let time = dateTime.toLocaleTimeString();
  return date + " - " + time;
};
</script>

<style lang="scss" scoped>
::v-deep {
  .meta * {
    font-size: 0.7rem;
  }
}
.post-container {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
