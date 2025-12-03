import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: "toast",
    initialState: { status: false, message:"" },
    reducers: {
        visible: (state) => {
            state.status = true;
        },
        noneVisible: (state) => {
            state.status = false;
        },
        setMessage: (state, actions)=>{
            state.message = actions.payload
        },
    },
});

export const { visible, noneVisible, setMessage } = toastSlice.actions
export default toastSlice.reducer;