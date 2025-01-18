import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import getBaseUrl from '../../../utils/baseURL';



const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            Headers.set("authorization", `bearer ${token}`)
        }
        return Headers;
    }
})
export const bookAPI = createApi({
    reducerPath: 'bookApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => `/getBoooks`,
        }),
    }),
})

export const {useGetAllBooksQuery}=bookAPI;
export {bookAPI};