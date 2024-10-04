import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
    cards: {
        active: [],
        archive: [],
    },
    status: "loading",
};
const cardsSlice = createSlice({
    name: "cards",
    initialState,
    selectors: {
        selectorCards: (state) => state.cards,
        selectorLoading: (state) => state.status
    },
    reducers: (create) => ({
        arhiveCard: create.reducer((state, action) => {
            state.cards.archive.push(state.cards.active.find(card => card.id === action.payload))
            state.cards.active = state.cards.active.filter(card => card.id !== action.payload);
        }),
        activeCard: create.reducer((state, action) => {
            state.cards.active.push(state.cards.archive.find(card => card.id === action.payload))
            state.cards.archive = state.cards.archive.filter(card => card.id !== action.payload);

        }),
        fetchUsers: create.asyncThunk(
            async ({ page, limit }) => {
                const res = await fetch(process.env.REACT_APP_FETCH_USERS + `/users?_page=${page}&_limit=${limit}`).then(
                    (data) => data.json()
                )
                return res
            },
            {
                pending: (state) => {
                    state.status = "loading";
                    state.cards = initialState.cards
                },
                fulfilled: (state, action) => {
                    state.status = "resolved";
                    state.cards.active = action.payload;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.errorMessage = action.payload;
                },
            }
        )
    }),
});

export const {
    arhiveCard,
    activeCard,
    fetchUsers
} = cardsSlice.actions;
export const {
    selectorCards,
    selectorLoading,
} = cardsSlice.selectors;
export default cardsSlice.reducer;
