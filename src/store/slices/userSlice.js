import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLogOut: () => initialState,
        setLogin: (state, { payload }) => {
            return {
                ...state,
                id: payload.id,
                isAuthenticated: true,
            }
        },
    },
})

export const { setLogout, setLogin } = userSlice.actions
export default userSlice.reducer
