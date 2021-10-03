import {
  ChannelsQuery,
  Order_By,
  useChannelsQuery,
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

  watchEffect(() => {
    selectedGroupIds.value =
      myChannels.value?.channel
        .map(({ channel_groups }) => channel_groups.map(({ id }) => id))
        .flat() || [];
    selectedUserIds.value =
      myChannels.value?.channel
        .map(({ channel_users }) => channel_users.map(({ id }) => id))
        .flat() || [];
  });

  return { currentPosts, myChannels, selectedChannelId };
};
