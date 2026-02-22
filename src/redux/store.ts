import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./features/member/member";
import toastReducer from "./features/toast/toast";

export const makeStore = () => {
	return configureStore({
		reducer: {
			toast: toastReducer,
			member: memberReducer,
		},
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
