import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';
const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        // console.log('Full API URL:', `${getBaseUrl()}/api/getBooks`);
        if (token) {
            Headers.set("authorization", `bearer ${token}`)
        }
        return Headers;
    }
})

export const orderApi = createApi({
    reducerPath: "orderApi",
    tagTypes: ["Orders"],
    baseQuery: baseQuery,
    endpoints: (builder) =>
    ({
        createOrder: builder.mutation
            ({
                query: (newOrder) => ({
                    url: "/createOrder",
                    method: "POST",
                    body: newOrder
                }),
                invalidatesTags: ["Orders"]
            }),
        getOrderByEmail: (builder.query)({
            query: (email) => ({
                url: `/email/${email}`,
                method: "GET"
            }),
            providesTags: ['Orders']
        })
    })
})

export const
    {
        useCreateOrderMutation,
        useGetOrderByEmailQuery
    } = orderApi;