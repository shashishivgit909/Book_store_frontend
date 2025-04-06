import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';


//note:1. { credentials: "include"}
//  option in your fetchBaseQuery setup is used to ensure that cookies are sent along with the request.
// This is particularly important for handling sessions, authentication, or any server-side mechanism that relies on cookies for 
// tracking user states (such as an authentication token stored in a cookie).

//2. Customizing Headers (If Needed):
//If, in some cases, you need to add specific headers for certain endpoints (e.g., a different authorization scheme or a special 
// header for a specific query), you can always override the prepareHeaders for that particular endpoint, but that's not needed if the logic for all endpoints is the same (which is your case).
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

export const bookAPI = createApi({
    reducerPath: 'bookApi',
    tagTypes: ["Books"],
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => `/getBooks`,
            providesTags: ["Books"]
        }),
        getBookById: builder.query({
            query: (id) => `/getBook/${id}`,
            providedTags: (result, error, id) => [{ type: "Books", id }]   // we can customize provided like this also , since we are getting id.

        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: "/postBook",
                method: "POST",  // nned to give method on all other except than get API 
                body: newBook,
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/updateBook/${id}`,
                method: "PATCH",
                body: rest
            }),
            invalidatesTags: ["Books"]
        }),

        deleteABook: builder.mutation({
            query: (id) => ({
                url: `/deleteABook/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        })
    }),
})

export const {
    useGetAllBooksQuery,
    useGetBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteABookMutation
} = bookAPI;


//NOte:  When an update or post API invalidates a tag, all get APIs that provide the same tag are refetched to ensure the data is up-to-date.