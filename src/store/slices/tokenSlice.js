import { createSlice } from '@reduxjs/toolkit'
import { loginAndAuthApi } from '../../services/loginAndAuth'

const initinalState = {
    token: {
        access: '',
        refresh: '',
    },
}

const slice = createSlice({
    name: 'token',
    initialState: initinalState,
    reducers: {
        logout: () => initinalState,
        refreshAccessToken: (state, action) => {
            state.token.access = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            loginAndAuthApi.endpoints.getToken.matchFulfilled,
            (state, action) => {
                state.token.access = action.payload.access
                state.token.refresh = action.payload.refresh
            }
        )
    },
})

export default slice.reducer
export const { logout, refreshAccessToken } = slice.actions
