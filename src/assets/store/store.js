import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice"
import cardsSlice from "./slices/cardsSlice"
const store = configureStore({
    reducer: {
        user: userSlice,
        cards: cardsSlice
    },
});

export default store;
