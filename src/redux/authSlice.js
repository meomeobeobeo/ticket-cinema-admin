import {createSlice} from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name : 'auth',

    initialState:{
        status : "idle",
        authData :null
    },
    reducers:{
        logout : (state, action) =>{
            state.status = 'idle'
            state.authData = null
            localStorage.removeItem('profile')
        },
        setUserData : (state, action) =>{
            state.authData = action.payload
        }
    },
    extraReducers:(builder)=>{
        
           

        

    }


})
export const {setUserData , logout} = authSlice.actions