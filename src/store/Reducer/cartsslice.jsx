import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
}
const cartslice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        loadcart:(state,action)=>{
            state.carts = action.payload
        },
    }
})
export default cartslice.reducer
export const { loadcart } = cartslice.actions