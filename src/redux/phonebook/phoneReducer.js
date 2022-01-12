import { createReducer } from "@reduxjs/toolkit";
import { addPhone, removePhone } from "./phoneAction";

const phoneReducer = createReducer([], {
    [addPhone]: (state, { payload }) => {
        const newPhone = [...state, payload];
        return newPhone;

    },
    [removePhone]: (state, { payload }) => {
        const newPhone = state.filter(({ id }) => id !== payload)
        return newPhone;
    },
});

export default phoneReducer;