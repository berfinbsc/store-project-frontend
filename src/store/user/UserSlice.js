
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
user : {},
isAuthenticated: false,


}


const userSlice = createSlice({

    name : "user",
    initialState,
    reducers : {
        loginReduc : (state,action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logOutReduc : (state) => {
            state.user = {};
            state.isAuthenticated = false;
        }
    },
})

export const { loginReduc, logOutReduc } = userSlice.actions
export default userSlice.reducer

