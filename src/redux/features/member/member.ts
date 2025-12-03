import { createSlice } from '@reduxjs/toolkit';

export type MemberType = "LILY" | "HAEWON" | "SULLYOON" | "BAE" | "JIWOO" | "KYUJIN";

export interface MemberState {
    member: MemberType;
}

const initialState: MemberState = {
    member: "LILY",
};

export const memberSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        setMember: (state, actions) => {
            state.member = actions.payload
        },
    },
});

export const { setMember } = memberSlice.actions
export default memberSlice.reducer;