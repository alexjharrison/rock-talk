<template>
  <p-button
    icon="pi pi-plus"
    label="Add Field"
    class="ml-2 p-button-sm"
    type="button"
    @click="isPanelOpen = true"
  />
  <Dialog
    header="Select Field"
    v-model:visible="isPanelOpen"
    :modal="true"
    position="bottom"
  >
    <Dropdown
      :options="firstDropdownOptions"
      v-model="firstSelectedOptionId"
      class="mb-2"
      option-label="name"
      option-value="value"
      :filter="true"
      placeholder="Field"
      :showClear="true"
    ></Dropdown>
    <br />

    <Dropdown
      v-if="firstSelectedOptionId?.type === 'tag'"
      :options="tagOptions"
      v-model="selectedTagId"
      option-label="name"
      option-value="value"
      :filter="true"
      :showClear="true"
    ></Dropdown>

    <span
      class="p-float-label"
      v-else-if="firstSelectedOptionId?.type === 'meta'"
    >
      <InputText id="meta-value" type="text" v-model="metaValue" />
      <label for="meta-value">Value</label>
    </span>

    <template #footer>
      <p-button
        label="Add"
        icon="pi pi-plus"
        class="p-button-sm"
        :disabled="submitDisabled"
        @click="handleSubmit"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from "vue";
import Dialog from "primevue/dialog";
import { useMetaQuery, useTagCategoriesQuery } from "../../../api";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

const isPanelOpen = ref(false);

const emit = defineEmits<{
  (eventName: "add:tag", id: number): void;
  (
    eventName: "add:meta",
    value: { metaKeyId: number; metaFieldValue: string }
  ): void;
}>();

const firstDropdownOptions = computed(() =>
  tagCategories.value && metaKeys.value
    ? [
        ...tagCategories.value?.tag_category.map((category) => ({
          name: category.title,
          value: { type: "tag", id: category.id },
        })),
        ...metaKeys.value.meta_key.map((metaKey) => ({
          name: metaKey.title,
          value: { tag: "meta", id: metaKey.id },
        })),
      ]
    : []
);

const firstSelectedOptionId = ref<{ type: "tag" | "meta"; id: number }>();

const tagOptions = computed(() =>
  tagCategories.value?.tag_category
    .find((category) => category.id === firstSelectedOptionId.value?.id)
    ?.tags.map((tag) => ({ name: tag.title, value: tag.id }))
);
const selectedTagId = ref<number>();

const submitDisabled = computed(() => !Boolean(selectedTagId.value));

const metaValue = ref<string>();

const handleSubmit = () => {
  if (selectedTagId.value) emit("add:tag", selectedTagId.value);
  else if (firstSelectedOptionId.value?.id && metaValue.value)
    emit("add:meta", {
      metaKeyId: firstSelectedOptionId.value.id,
      metaFieldValue: metaValue.value,
    });
  isPanelOpen.value = false;
  selectedTagId.value =
    metaValue.value =
    firstSelectedOptionId.value =
      undefined;
};

const { data: tagCategories } = useTagCategoriesQuery();
const { data: metaKeys } = useMetaQuery();
</script>

<style lang="scss" scoped></style>
