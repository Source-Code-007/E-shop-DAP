import { createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { app } from "../../../../firebase.config"



const initialState = {
    user: null,
    isAuthLoading: false,
    error: null,

}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthLoading = false;
            state.error = null;
          },
          clearUser: (state) => {
            state.user = null;
            state.isAuthLoading = false;
            state.error = null;
          },
          setAuthLoading: (state, action) => {
            state.isAuthLoading = action.payload;
          },
    }
})


export const { setUser, clearUser, setAuthLoading } = authSlice.actions
export default authSlice.reducer