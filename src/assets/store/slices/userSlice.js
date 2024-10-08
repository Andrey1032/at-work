import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
    name: "Ivan1234",
    avatar_path: require("../../files/avatar.png"),
    status: "loading",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    selectors: {
        selectorUser: (state) => state
    },
    reducers: (create) => ({
    }),
});

// export const {
// } = userSlice.actions;
export const {
    selectorUser,
} = userSlice.selectors;
export default userSlice.reducer;
