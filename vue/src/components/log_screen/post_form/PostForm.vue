<template>
  <section class="px-2 mt-auto">
    <form @submit.prevent="handleSubmit" class="flex flex-column">
      <h2 class="my-2">{{ isEditing ? "Edit" : "Create" }} Post</h2>
      <label for="post-form-text">Log Entry</label>
      <Textarea
        id="post-form-text"
        v-model="object.text"
        rows="2"
        cols="60"
        class="mb-0"
      /><br />
      <div class="flex align-items-end">
        <div class="flex flex-column">
          <label for="post-created-at">Post Created At</label>
          <Calendar
            id="post-created-at"
            v-model="object.created_at"
            :showTime="true"
            :showSeconds="true"
            :show-button-bar="true"
          />
        </div>
        <FieldAdder
          @add:tag="object.post_tags?.data.push({ tag_id: $event })"
        />

        <Chip
          v-for="tag in tagChips"
          :key="tag.id"
          :label="tag.title"
          removable
          class="ml-1"
          @remove="removeTag(tag.id)"
        />
      </div>

      <div class="flex justify-content-between mt-2">
        <div class="flex align-items-center">
          <FileUpload
            choose-label="Upload File"
            class="p-button-sm"
            mode="basic"
            name="file"
            url="/files/upload"
            :auto="true"
            @before-send="addToken"
            @upload="handleFileUpload"
          />
          <span class="ml-4"> {{ filename }} </span>
        </div>

        <p-button
          type="submit"
          label="submit"
          class="mt-1 p-button-sm align-self-end"
        />
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import Chip from "primevue/chip";
import FileUpload from "primevue/fileupload";
import {
  Post_Insert_Input,
  useCreatePostMutation,
  useTagsQuery,
} from "../../../api";
import { useToast } from "primevue/usetoast";
import FieldAdder from "./FieldAdder.vue";
import { useAuth } from "../../../hooks/auth";

const toaster = useToast();
const isEditing = ref(false);
const { executeMutation } = useCreatePostMutation();

const object = ref<Post_Insert_Input>({
  created_at: new Date(),
  post_tags: { data: [] },
});

const { data: tags } = useTagsQuery();
const currentTagIds = computed(() =>
  object.value.post_tags?.data.map(({ tag_id }) => tag_id)
);
const tagChips = computed(() =>
  tags.value?.tag
    .filter((tag) => currentTagIds.value?.includes(tag.id))
    .map((tag) => ({
      id: tag.id,
      title: tag.title,
    }))
);

const removeTag = (id: number) => {
  if (object.value.post_tags?.data) {
    object.value.post_tags.data = object.value.post_tags?.data.filter(
      ({ tag_id }) => tag_id !== id
    );
  }
};

const handleSubmit = async () => {
  const { data, error } = await executeMutation({ object: object.value });
  if (data) {
    toaster.add({ summary: "Post Submitted", life: 5000, severity: "success" });
    object.value = {
      created_at: new Date(),
      post_tags: { data: [] },
    };
  } else if (error) {
    toaster.add({
      summary: "Error Submitting Submitted",
      life: 5000,
      severity: "danger",
    });
  }
  console.log({ data, error });
};

const filename = ref("");
const handleFileUpload = (event: { xhr: XMLHttpRequest; files: File[] }) => {
  console.log(event);
  toaster.add({
    summary: "File Uploaded",
    life: 5000,
    severity: "success",
    detail: event.files[0].name + " created",
  });
  filename.value = event.files[0].name;
};

const { token } = useAuth();

const addToken = ({ xhr }: { xhr: XMLHttpRequest }) =>
  xhr.setRequestHeader("Authorization", `Bearer ${token.value}`);
</script>

<style lang="scss" scoped>
* {
  font-size: 0.9rem;
}
label {
  margin-bottom: 0.2rem;
}
form {
  max-width: 60rem;
}
</style>
