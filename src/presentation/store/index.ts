import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { countryApi } from "./services/country/countryApi"

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
