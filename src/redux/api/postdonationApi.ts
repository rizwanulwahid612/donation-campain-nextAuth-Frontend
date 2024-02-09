import { tagTypes } from "@/redux/tag-types";
import { IDonation, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const POSTDONATION_URL = "/postdonations";

export const postdonationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSingledonationpost: build.mutation({
      query: ({ id, data }) => ({
        url: `/postdonations/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.postdonation],
    }),
  }),
});
export const {
  //useAddCategoryMutation,
  useAddSingledonationpostMutation,
  //useCategoryQuery,
  //useDeleteCategoryMutation,
  //useUpdateCategoryMutation,
} = postdonationApi;
