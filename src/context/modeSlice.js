import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: "sidebar",
    initialState: {
        value: false
    },
    reducers: {
        modeToggle(state) {
            state.value = !state.value
        },
    }
})

export const { modeToggle } = modeSlice.actions;

export default modeSlice.reducer;