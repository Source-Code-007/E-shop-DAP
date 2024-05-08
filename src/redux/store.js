import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import { authApi, setupAuthListener } from "./api/authAPI"

const store =  configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})


// Set up Firebase authentication listener
setupAuthListener(store.dispatch);


export default store;