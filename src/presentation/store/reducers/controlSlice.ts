import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: "",
}

const controlSlice = createSlice({
    name: "control",
    initialState,
    reducers: {
        setSearch: (
            state,
            { payload, }
        ) => ({ ...state, search: payload, }),
    },
})

export const { setSearch, } = controlSlice.actions

export default controlSlice.reducer
