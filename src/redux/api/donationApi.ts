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
    }),
    deleteDonation: build.mutation({
      query: (id) => ({
        url: `${DONATION_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.donations],
    }),
    // transformResponse: (response: IDonation[], meta: IMeta) => {
    //   return {
    //     donations: response,
    //     meta,
    //   };
    // },
    //   providesTags: [tagTypes.donations],
    // }),
    // // get single academic department
    donation: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${DONATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.donations],
    }),
    // // create a new academic department
    addDonation: build.mutation({
      query: (data) => ({
        url: "/donations/create-donate",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.donations],
    }),
    // // update ac department
    updateDonation: build.mutation({
      query: (data) => ({
        url: `${DONATION_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.donations],
    }),

    // // delete ac department
  }),
});

export const {
  useAddDonationMutation,
  useDonationsQuery,
  useDonationQuery,
  useUpdateDonationMutation,
  useDeleteDonationMutation,
  //useDeleteDonatMutation,
  //useCategoryQuery,
  //useDeleteCategoryMutation,
  //useUpdateCategoryMutation,
} = donationApi;
