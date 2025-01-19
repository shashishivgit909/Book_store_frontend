import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';
import { deleteABook, UpdateBook } from '../../../../../../backend/Book_store_Backend/controllers/controler';


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
            query: (id) => `getBook/{id}`,
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
            query:(id)=>({
                url:`/deleteABook/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Books"]
        })
    }),
})

export const { useGetAllBooksQuery ,
    useGetBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteABookMutation
} = bookAPI;


//NOte:  When an update or post API invalidates a tag, all get APIs that provide the same tag are refetched to ensure the data is up-to-date.