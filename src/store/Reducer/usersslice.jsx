import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:null,
}
const usersslice = createSlice({
    name:"users",
    initialState,
    reducers:{
        loaduser:(state,action)=>{
            state.users = action.payload
        },
        removeuser:(state)=>{
            state.users = null
        }
    }
})
export default usersslice.reducer
export const {loaduser,removeuser} = usersslice.actions