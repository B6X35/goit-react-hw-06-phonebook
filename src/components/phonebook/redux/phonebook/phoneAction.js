import { createAction } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const addPhone = createAction('phone/add', (phone) => {
    return {
        payload: {
            ...phone,
            id: uniqid.time()
        }
    }
})

export const removePhone = createAction('phone/remove')