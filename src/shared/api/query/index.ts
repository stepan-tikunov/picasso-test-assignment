import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Post } from "shared/api";

export const postsApi = createApi({
    reducerPath: "posts",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/posts/",
    }),

    endpoints: (builder) => ({
        getPostById: builder.query<Post, string>({
            query: (id) => id,
        }),

        listPosts: builder.query<Post[], number>({
            query: (pageNumber) => `?_limit=10&_page=${pageNumber}`,
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch: ({ currentArg, previousArg }) => {
                if (currentArg === undefined || previousArg === undefined) {
                    return true;
                }

                return currentArg > previousArg;
            },
        }),
    }),
});

export const { useGetPostByIdQuery, useListPostsQuery } = postsApi;
