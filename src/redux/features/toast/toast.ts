import { createSlice } from "@reduxjs/toolkit";

export interface ToastState {
	status: boolean;
	message: string;
}

const initialState: ToastState = {
	status: false,
	message: "",
};

export const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		visible: (state) => {
			state.status = true;
		},
		noneVisible: (state) => {
			state.status = false;
		},
		setMessage: (state, actions) => {
			state.message = actions.payload;
		},
	},
});

export const { visible, noneVisible, setMessage } = toastSlice.actions;
export default toastSlice.reducer;
