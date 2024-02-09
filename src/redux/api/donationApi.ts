import { tagTypes } from "@/redux/tag-types";
import { IDonation, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const DONATION_URL = "/donations";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic departments
    donations: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: DONATION_URL,
          method: "GET",
          params: arg,
        };
      },

      // transformResponse: (response: IDonation[], meta: IMeta) => {
      //   return {
      //     donations: response,
      //     meta,
      //   };
      // },
      //   providesTags: [tagTypes.donations],
      // }),
      // // get single academic department
      // category: build.query({
      //   query: (id: string | string[] | undefined) => ({
      //     url: `${DONATION_URL}/${id}`,
      //     method: "GET",
      //   }),
      //   providesTags: [tagTypes.category],
      // }),
      // // create a new academic department
      // addCategory: build.mutation({
      //   query: (data) => ({
      //     url: "/services/create-service",
      //     method: "POST",
      //     data,
      //   }),
      //   invalidatesTags: [tagTypes.category],
      // }),
      // // update ac department
      // updateCategory: build.mutation({
      //   query: (data) => ({
      //     url: `${DONATION_URL}/${data.id}`,
      //     method: "PATCH",
      //     data: data.body,
      //   }),
      //   invalidatesTags: [tagTypes.category],
      // }),

      // // delete ac department
      // deleteCategory: build.mutation({
      //   query: (id) => ({
      //     url: `${DONATION_URL}/${id}`,
      //     method: "DELETE",
      //   }),
      //   invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  //useAddCategoryMutation,
  useDonationsQuery,
  //useCategoryQuery,
  //useDeleteCategoryMutation,
  //useUpdateCategoryMutation,
} = donationApi;
