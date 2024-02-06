import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from './../../Configs/Firebase_Config/Firebase.config';

export const userSlice = createSlice({
      name: 'user',
      initialState: {
            currentUser: null,
            loading: true,
            error: null
      },
      reducers: {
            setUser: (state, action) => {
                  state.currentUser = action.payload; // Store serializable user data
                  state.loading = false;
                  state.error = null;
            },
            setLoading: (state, action) => {
                  state.loading = action.payload;
            },
            setError: (state, action) => {
                  state.error = action.payload;
                  state.loading = false;
            }
      }
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const loginUser = (email, password) => async dispatch => {
      try {
            dispatch(setLoading(true));
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            //     const user = extractUserData(userCredential); // Extract serializable data
            const dataObj = { Name: userCredential.user.displayName, Email: userCredential.user.email, Photo: userCredential.user.photoURL, UID: userCredential.user.uid }
            dispatch(setUser(dataObj));
      } catch (error) {
            dispatch(setError(error.message));
      }
};

export const register = (email, password) => async dispatch => {
      try {
            dispatch(setLoading(true));
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const dataObj = { Name: userCredential.user.displayName, Email: userCredential.user.email, Photo: userCredential.user.photoURL, UID: userCredential.user.uid }
            dispatch(setUser(dataObj));
      } catch (error) {
            dispatch(setError(error.message));
      }
};

export const logoutUser = () => async dispatch => {
      try {
            // No need to dispatch loading and setUser actions if not used
      } catch (error) {
            dispatch(setError(error.message));
      }
};

// Utility function to extract serializable user data
const extractUserData = user => {
      return {
            uid: user.uid,
            email: user.email,
            // Add any other necessary user data here
      };
};

export default userSlice.reducer;
