import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: "toast",
    initialState: { value: false },
    reducers: {
        visible: (state) => {
            state.value = true;
        },
        non_visible: (state) => {
            state.value = false;
        }
    },
});

export const { visible, non_visible } = toastSlice.actions
export default toastSlice.reducer;