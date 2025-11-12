import { configureStore } from "@reduxjs/toolkit";
// import slices from "./import"
// import { persistStore, persistReducer } from 'redux-persist'
// import { baseApi } from "@shared/api/baseApi";


// const slicesReducers = Object.fromEntries(
//     Object.values(slices).map((slice) => [ slice.name, slice.reducer])
// );

const store = configureStore({
    reducer:{
        // ...slicesReducers,
        // [baseApi.reducerPath]: baseApi.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    //         ignoredPaths: ['register', 'rehydrate'],
    //       },
    // }).concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store