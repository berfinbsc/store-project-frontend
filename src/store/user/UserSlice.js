
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    
user : {},
isAuthenticated: false,
userLiked : [],

}


const userSlice = createSlice({

    name : "user",
    initialState,
    reducers : {
        loginReduc : (state,action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.userLiked = action.payload.userLiked;
        },
        logOutReduc : (state) => {
            state.user = {};
            state.isAuthenticated = false;
            state.userLiked = [];
        },
        addLiked :(state,action) => {
            state.userLiked = action.payload
           
        },
        removeLiked :(state,action) => {

        
            state.userLiked = action.payload
        

        },  
    },
})

export const { loginReduc, logOutReduc,addLiked,removeLiked } = userSlice.actions
export default userSlice.reducer

