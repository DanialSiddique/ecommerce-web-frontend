 import { toast } from "react-toastify";
import axios from "../../api/axiosconfig"
import { loadproduct } from "./productsslice"
export const asyncproductstore = (product) => async(dispatch)=>{
    try{
        await axios.post("/products",product)
        dispatch(asyncloadproduct());
        console.log("data go to database")
    }
    catch(error){
        console.log(error)
    }
}
//directly updata the data of product 
export const asyncloadproduct = () => async(dispatch)=>{
    try{
        const {data} =await axios.get("/products")
        //send data into loadreducer 
        dispatch(loadproduct(data));
        console.log("data goes to reducer")
    }
    catch(error){
        console.log(error)
    }
}
export const asyncupadateproduct = (product, id) => async (dispatch) => {
    try {
        await axios.patch(`/products/${id}`, product);
        dispatch(asyncloadproduct());
    } catch (error) {
        console.log(error);
    }
};
export const asyncdeleteproduct = ( id) => async (dispatch) => {
    try {
        await axios.delete(`/products/${id}`);
        dispatch(asyncloadproduct());
        toast.success("Product Deleted")
    } catch (error) {
        console.log(error);
    }
};

