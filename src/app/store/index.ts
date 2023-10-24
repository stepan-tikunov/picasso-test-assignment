import { configureStore } from "@reduxjs/toolkit";

import { postsApi } from "shared/api";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: (gDM) => gDM().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
