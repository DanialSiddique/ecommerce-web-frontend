import {configureStore} from '@reduxjs/toolkit'
import userslice from './Reducer/usersslice'
import productslice from './Reducer/productsslice'
import cartslice from './Reducer/cartsslice'
 export const store = configureStore({
    reducer:{
        usersReducer:userslice,
        productReducer:productslice,
        cartReducer:cartslice,  
    },
})
