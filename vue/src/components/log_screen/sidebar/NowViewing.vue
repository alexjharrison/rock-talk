<template>
  <div class="p-2">
    <h2 class="m-0 mb-1">Now Viewing</h2>
    <p>Channels</p>
    <div v-for="group in groups" :key="group.id">
      <Chip :label="group.title" />
    </div>
    <p>Users</p>
  </div>
</template>

<script setup lang="ts">
import { useCurrentPosts } from "../../../hooks/posts";
import Chip from "primevue/chip";
import { useGroupsQuery, useUsersQuery } from "../../../api";
import { computed, watchEffect } from "vue";

const { selectedGroups: groups } = useCurrentPosts();

watchEffect(() => console.log(groups.value));

// const { data: groups } = useGroupsQuery({
//   variables: computed(() => ({
//     where: {
//       _or: [...selectedGroupIds.value.map((id) => ({ id: { _eq: id } }))],
//     },
//   })),
// });
const { data: users } = useUsersQuery({ variables: computed(() => ({})) });
</script>
