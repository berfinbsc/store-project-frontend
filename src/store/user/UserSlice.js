
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
user : {},
isAuthenticated: false,

}


const userSlice = createSlice({

    name : "user",
    initialState,
    reducers : {
        login : (state,action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logOut : (state) => {
            state.user = {};
            state.isAuthenticated = false;
        }
    },
})

export const { login, logOut } = userSlice.actions
export default userSlice.reducer

