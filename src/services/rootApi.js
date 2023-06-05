import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token.token.access
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    tagTypes: ['LoginAndAuth', 'TracksPainassasin', 'Tracks'],
    endpoints: () => ({}),
})
