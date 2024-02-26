import { tagTypes } from "@/redux/tag-types";
import { IDonation, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const USERS_URL = "/users";
const AUTH_URL = "/auth";
export const usersApi = baseApi.injectEndpoints({
  //i did not use this login
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
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
    resetPassword: build.mutation({
      query: (resetPasswordPayload) => ({
        url: `/auth/reset-password`,
        method: "POST",
        data: resetPasswordPayload,
      }),
    }),
    forgotPassword: build.mutation({
      query: (forgotPasswordPayload) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        data: forgotPasswordPayload,
      }),
    }),
  }),
});

export const {
  useUsersQuery,
  useCreateUserDataMutation,
  useCreateAdminDataMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = usersApi;
