import { rootApi } from './rootApi'

const PAINASSASIN_URL = 'https://painassasin.online'

export const tracksPainassasinApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            // query: () => ({
            // url: `${PAINASSASIN_URL}/catalog/track/all/`,
            // method: 'GET',
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const allTracks = await fetchWithBQ(
                    `${PAINASSASIN_URL}/catalog/track/all/`
                )
                if (allTracks.error) return { error: allTracks.error }
                // const user = randomResult.data
                const favTracks = await fetchWithBQ(
                    `${PAINASSASIN_URL}/catalog/track/favorite/all`
                )
                return {
                    data: {
                        allTracks: allTracks.data,
                        favTracks: favTracks.data,
                    },
                }
            },
        }),
        getFavoriteTracks: builder.query({
            query: () => ({
                url: `${PAINASSASIN_URL}/catalog/track/favorite/all`,
                method: 'GET',
            }),
            providesTags: (id) => [{ type: 'Favorite', id }],
        }),
        getTrackById: builder.query({
            query: (id) => ({
                url: `${PAINASSASIN_URL}/catalog/track/${id}/`,
                method: 'GET',
            }),
        }),
        addTrackToFavoritesById: builder.mutation({
            query: (id) => ({
                url: `${PAINASSASIN_URL}/catalog/track/${id}/favorite/`,
                method: 'POST',
            }),
            invalidatesTags: (id) => [{ type: 'Favorite', id: id }],
        }),
        deleteTrackFromFavoriteById: builder.mutation({
            query: (id) => ({
                url: `${PAINASSASIN_URL}/catalog/track/${id}/favorite/`,
                method: 'DELETE',
            }),
            invalidatesTags: (id) => [{ type: 'Favorite', id: id }],
        }),
        getAllCollections: builder.query({
            query: () => ({
                url: `${PAINASSASIN_URL}/selection/`,
                method: 'GET',
            }),
        }),
    }),
})

// const TRACKS_API = 'http://51.250.95.23:8000/catalog/track/'

// export const tracksApi = createApi({
//     reducerPath: 'tracksApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: TRACKS_API,
//     }),
//     endpoints: (builder) => ({
//         getTrackByName: builder.query({
//             query: (name) => ({
//                 url: `${name}`,
//                 method: 'GET',
//             }),
//         }),
//         getCollectionById: builder.query({
//             query: (id) => ({
//                 url: `/selection/${id}`,
//                 method: 'GET',
//             }),
//         }),
//     }),
// })

// export const {
//     useGetAllTracksQuery,
//     useGetTrackByIdQuery,
//     useAddTrackToFavoritesByIdMutation,
//     useDeleteTrackFromFavoriteByIdMutation,
//     useGetAllCollectionsQuery,
// } = tracksPainassasinApi

export const {
    useGetAllTracksQuery,
    useGetFavoriteTracksQuery,
    useAddTrackToFavoritesByIdMutation,
    useDeleteTrackFromFavoriteByIdMutation,
} = tracksPainassasinApi

// export const { useGetTrackByNameQuery, useGetCollectionByIdQuery } = tracksApi
