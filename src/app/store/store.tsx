import {configureStore} from "@reduxjs/toolkit";
import {portfolioReducer} from "./slices/portfolioSlice.tsx";
import {projectsReducer} from "./slices/projectsSlice.tsx";

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        projects: projectsReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
