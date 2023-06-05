import { configureStore } from '@reduxjs/toolkit'
import { rootApi } from '../services/rootApi'
// import { loginAndAuthApi } from '../services/loginAndAuth'
import token from './slices/tokenSlice'
import favorites from './slices/favoriteTracksSlice'
import user from './slices/userSlice'

// export const store = configureStore({
//     reducer: {
//         [rootApi.reducerPath]: rootApi.reducer,
//         [loginAndAuthApi.reducerPath]: loginAndAuthApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(rootApi.middleware),
// })

export const store = configureStore({
    reducer: {
        [rootApi.reducerPath]: rootApi.reducer,
        token,
        favorites,
        user,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
})
