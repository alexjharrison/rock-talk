import { Order_By, usePostsStreamSubscription } from "../api";
import { computed } from "vue";
import { useAuth } from "./auth";

export const useCurrentPosts = () => {
  const { user } = useAuth();

  const { data: currentPosts } = usePostsStreamSubscription({
    variables: computed(() => ({
      // where: { user_id: { _eq: user.value?.id } },
      order_by: { created_at: Order_By.Asc },
    })),
  });

  return { currentPosts };
};
