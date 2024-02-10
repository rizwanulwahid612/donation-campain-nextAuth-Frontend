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
    createUserData: build.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        data,
        // contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createAdminData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        // contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useUsersQuery,
  useCreateUserDataMutation,
  useCreateAdminDataMutation,
  //useAddCategoryMutation,
  //useCategoryQuery,
  //useDeleteCategoryMutation,
  //useUpdateCategoryMutation,
} = usersApi;
