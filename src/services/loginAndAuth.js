// import {
//     // createApi,
//     fetchBaseQuery,
// } from '@reduxjs/toolkit/query/react'
import { rootApi } from './rootApi'
const BASE_URL = 'https://painassasin.online'
export const loginAndAuthApi = rootApi.injectEndpoints({
    // reducerPath: 'loginAndAuthApi',
    // baseQuery: fetchBaseQuery({
    //     baseUrl: BASE_URL,
    // }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: `${BASE_URL}/user/signup/`,
                method: 'POST',
                body,
            }),
            // providesTags: ['LoginAndAuth'],
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `${BASE_URL}/user/login/`,
                method: 'POST',
                body,
            }),
            // providesTags: ['LoginAndAuth'],
        }),
        getToken: builder.mutation({
            query: (body) => ({
                url: `${BASE_URL}/user/token/`,
                method: 'POST',
                body,
            }),
            // providesTags: ['LoginAndAuth'],
        }),
        refreshToken: builder.mutation({
            query: (body) => ({
                url: `${BASE_URL}/user/token/refresh/`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body,
            }),
            // providesTags: ['LoginAndAuth'],
        }),
    }),
})

export const {
    useLoginMutation,
    useGetTokenMutation,
    useSignupMutation,
    useRefreshTokenMutation,
} = loginAndAuthApi
