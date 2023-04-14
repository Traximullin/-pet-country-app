import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { countryApi } from "./services/country/countryApi"
import controlReducer from "./reducers/controlSlice"

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
        controls: controlReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
