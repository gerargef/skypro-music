import { createSlice } from '@reduxjs/toolkit'
import { tracksPainassasinApi } from '../../services/tracks'

const initialState = []

const slice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => state.push(action.payload.id),
        deleteFavorite: (state, action) => {
            const id = action.payload.id
            return state.filter((track) => track.id !== id)
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            tracksPainassasinApi.endpoints.getAllTracks.matchFulfilled,
            (state, action) => {
                const favoriteTracks = action.payload.favTracks
                favoriteTracks.forEach((track) => state.push(track.id))
            }
        )
    },
})

export default slice.reducer
