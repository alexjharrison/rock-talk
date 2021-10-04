import {
  Order_By,
  useChannelsQuery,
  useGroupsQuery,
  usePostsStreamSubscription,
} from "../api";
import { computed, ref, watchEffect } from "vue";
import { useAuth } from "./auth";

export const useCurrentPosts = () => {
  const { user } = useAuth();

  const { data: myChannels } = useChannelsQuery({
    variables: computed(() => ({
      where: { owner_id: { _eq: user.value?.id } },
    })),
  });

  const { data: currentPosts } = usePostsStreamSubscription({
    variables: computed(() => ({
      // where: { user_id: { _eq: user.value?.id } },
      order_by: { created_at: Order_By.Asc },
    })),
  });

  const selectedChannelId = ref<number | undefined>();

  const selectedGroupIds = ref<number[]>([]);
  const selectedUserIds = ref<number[]>([]);

  const { data: allGroups } = useGroupsQuery({
    variables: computed(() => ({
      where: {
        _or: [...selectedGroupIds.value.map((id) => ({ id: { _eq: id } }))],
      },
    })),
  });

  watchEffect(() => {
    console.log(allGroups.value);
  });
  const selectedGroups = computed(() => {
    console.log(allGroups.value);
    return [];
  });

  watchEffect(() => {
    selectedChannelId.value = myChannels.value?.channel[0].id;
    // selectedGroupIds.value =
    //   myChannels.value?.channel
    //     .find((channel) => channel.id === selectedChannelId.value)
    //     ?.channel_groups.map(({ id }) => id) || [];
  });

  // const selectedGroups = computed(() => {
  //   console.log(
  //     myChannels.value?.channel
  //       .find((channel) => channel.id === selectedChannelId.value)
  //       ?.channel_groups.map(({ id }) => id)
  //   );
  //   return myChannels.value?.channel.find(
  //     (channel) => channel.id === selectedChannelId.value
  //   )?.channel_groups;
  // });

  // const selectedGroupIds = computed(() =>
  //   myChannels.value?.channel
  //     .find((channel) => channel.id === selectedChannelId.value)
  //     ?.channel_groups.map(({ id }) => id)
  // );

  watchEffect(() => {
    // console.log({ selectedGroups: selectedGroups.value });
  });

  return {
    currentPosts,
    myChannels,
    selectedChannelId,
    selectedGroups,
  };
};
