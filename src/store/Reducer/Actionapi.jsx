
import { toast } from "react-toastify";
import axios from "../../api/axiosconfig"
import { loaduser, removeuser } from "./usersslice";

//for registration of users
export const asyncRegisterdata = (user) => async (dispatch,getState)=>{
    try{
        const response = await axios.post("/users",user);
        console.log(response)
        toast.success("you have successfully signin")
       // dispatch(loaduser(response.data))
    }
    catch(error){
        console.log(error)
        toast.warning("did't signin","warning")
    }

}
//for check user are login and also put the data of user in the local storate
export const asynclogindata = (user) => async (dispatch,getState)=>{
    try{
        const {data}= await axios.get(`/users?email=${user.email}&password=${user.password}`)
        if(data[0]){
            localStorage.setItem("users",JSON.stringify(data[0]));
            dispatch(loaduser(data[0]))
            console.log(data[0]);
            toast.success("Login in Sucessfully","success");
            return true;
        }else{
            toast.warning("Invaid email and account","warning");
            console.log("Invild email and password");
            return false;
    }
    }
    catch(error){
        console.log(error)
        toast.error("something went wrong","error")
    }
}
//logout from the page and also remove it from the localstorage
export const asynclogoutdata = (user) => async (dispatch,getState)=>{
    try{
        if(user){
            localStorage.removeItem('users')
            toast.success("user successfully logout")
            console.log("user successfully logout")
            dispatch(removeuser())
        }else{
            console.log("user not logged out!")
        }
    }
    catch(error){
        console.log(error)
    }
}
//current user and send data into user slice loaduser
export const asynccurrentuser = () => async (dispatch,getState)=>{
    try{
        const user =JSON.parse(localStorage.getItem("users"))
        if(user){
            dispatch(loaduser(user));
            }
        else{
            console.log("user not logged in!")
        }
    }
    catch(error){
        console.log(error)
    }

}

export const asyncupdateddata = (users,id)=> async (dispatch)=>{
    try{
        const response = await axios.patch(`/users/${id}`,users)
        //update data in user reduce
        dispatch(loaduser(response.data)) ;
        //updata data in local storate and chage on page run time
        localStorage.setItem("users",JSON.stringify(response.data))
    }
    catch(error){
        console.log("error in update of users details------>",error)
    }
}

export const deleteuserprofile = (id)=> async (dispatch) =>{
    try{
        const res= await axios.delete(`/users/${id}`)
        localStorage.removeItem("users",res)
        //data remover on reducer state
        dispatch(removeuser());
        toast.success("deleted successfylly")
    }
    catch(error){
        console.log(error)
    }
}