// authApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../../firebase.config';
import { clearUser, setAuthLoading, setUser } from '../features/auth/authSlice';
import { Bounce, toast } from 'react-toastify';
// import store from '../store';

// Initialize Firebase auth instance
const auth = getAuth(app);

// Set up Firebase authentication observer
export const setupAuthListener = (dispatch) => {
    dispatch(setAuthLoading(true));
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            dispatch(setAuthLoading(false));
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
        } else {
            dispatch(setAuthLoading(false));
            // User is signed out
            dispatch(clearUser());
        }
    });
};

// Define a custom API for Firebase authentication
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Customize this to interact with Firebase
    endpoints: (builder) => ({

        createUserWithEmailAndPassword: builder.mutation({
            query: ({ email, password, name, photo }) => {
                // store.dispatch(setAuthLoading(true))
                return createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // return userCredential.user
                        const user = userCredential.user;
                        return updateProfile(user, { displayName: name, photoURL: photo })
                            .then(() => {
                                // store.dispatch(setAuthLoading(false))
                                toast('User created successfully!', {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Bounce,
                                });
                                window.location.href = '/'
                                return { name, photo }
                            })
                            .catch((error) => {
                                // store.dispatch(setAuthLoading(false))

                                toast.error(error.message || 'Something wrong to signup!', {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Bounce,
                                });
                                throw new Error(error.message);
                            });
                    })
                    .catch((error) => {
                        // store.dispatch(setAuthLoading(false))
                        toast.error(error.message || 'Something wrong to signup!', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        throw new Error(error.message);
                    });
            },
        })
        ,
        signInWithEmailAndPassword: builder.mutation({
            query: ({ email, password }) => {
                // store.dispatch(setAuthLoading(true))
                return signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        window.location.href = '/'
                        return userCredential.user
                    })
                    .catch((error) => {
                        // store.dispatch(setAuthLoading(false))
                        toast.error(error.message || 'Something wrong to signin!', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        throw new Error(error.message);
                    });
            },
        }),
        signOut: builder.mutation({
            query: () => {
                // store.dispatch(setAuthLoading(true))
                return signOut(auth)
                    .then(() => {
                        toast('Signout successfully!', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    })
                    .catch((error) => {
                        // store.dispatch(setAuthLoading(false))
                        toast.error(error.message || 'Something wrong to signout!', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        throw new Error(error.message);
                    });
            },
        }),
    }),
});

// Export the generated hooks for usage in components
export const { useCreateUserWithEmailAndPasswordMutation, useSignInWithEmailAndPasswordMutation, useSignOutMutation } = authApi;
