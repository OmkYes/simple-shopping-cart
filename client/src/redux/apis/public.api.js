import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
        placeOrder: builder.mutation({
            query: (data) => ({
                url: "/checkout",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetProductsQuery, usePlaceOrderMutation } = publicApi;
