//import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://donation-server-opal.vercel.app/api/v1`,
    //baseUrl: `http://localhost:5000/api/v1`,
  }),
  endpoints: () => ({}),

  tagTypes: tagTypesList,
});
