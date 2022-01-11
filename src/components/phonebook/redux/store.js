import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phoneReducer from './phonebook/phoneReducer'
import filterReducer from "./filter/filterReducer";

const persistConfig = {
    key: 'phone',
    version: 1,
    storage,
    whitelist: ['phone'],
}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});

const rootReducer = combineReducers({
    phoneReducer,
    filterReducer,
});

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store);

export default store;