import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
}
const productsslice = createSlice({
    name:"products",
    initialState,
    reducers:{
        loadproduct:(state,action)=>{
            state.products = action.payload
        }
    }
})
export default productsslice.reducer
export const {loadproduct} = productsslice.actions