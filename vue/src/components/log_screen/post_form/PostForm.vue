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
      </div>

      <p-button
        type="submit"
        label="submit"
        class="mt-1 p-button-sm align-self-end"
      />
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import { Post_Insert_Input, useCreatePostMutation } from "../../../api";
import { useToast } from "primevue/usetoast";
import FieldAdder from "./FieldAdder.vue";

const toaster = useToast();
const isEditing = ref(false);
const { executeMutation } = useCreatePostMutation();

const object = ref<Post_Insert_Input>({
  created_at: new Date(),
  post_tags: { data: [] },
});

const handleSubmit = async () => {
  const { data, error } = await executeMutation({ object: object.value });
  if (data) {
    toaster.add({ summary: "Post Submitted", life: 5000, severity: "success" });
    object.value = {};
  } else if (error) {
    toaster.add({
      summary: "Error Submitting Submitted",
      life: 5000,
      severity: "danger",
    });
  }
  console.log({ data, error });
};
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
