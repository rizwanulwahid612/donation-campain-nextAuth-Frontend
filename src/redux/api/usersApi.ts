import { tagTypes } from "@/redux/tag-types";
import { IDonation, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const USERS_URL = "/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic departments
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: USERS_URL,
          method: "GET",
          params: arg,
        };
      },
    }),
  }),
});

export const {
  useUsersQuery,
  //useAddCategoryMutation,
  //useCategoryQuery,
  //useDeleteCategoryMutation,
  //useUpdateCategoryMutation,
} = usersApi;
