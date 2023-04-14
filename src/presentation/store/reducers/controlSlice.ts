import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: "",
    region: "",
}

const controlSlice = createSlice({
    name: "control",
    initialState,
    reducers: {
        setSearch: (
            state,
            { payload, }
        ) => ({ ...state, search: payload, }),
        setRegion: (
            state,
            { payload, }
        ) => ({ ...state, region: payload, }),
    },
})

export const { setSearch, setRegion, } = controlSlice.actions

export default controlSlice.reducer
