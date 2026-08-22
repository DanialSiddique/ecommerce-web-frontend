import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {  asynclogoutdata } from "../../store/Reducer/Actionapi"

const UserProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=>state.usersReducer.users)
    const handlelogout = ()=>{
        dispatch(asynclogoutdata(user))
        navigate("/");
    }
    console.log(user)
  

  return (
    <div className="flex justify-center items-center h-150 mx-10">
        <div className="userprofile-animate">
            <img src={user.profile || "download (1).jpg"}  className="bg-cover h-30 rounded-full w-35 border-double border-2 border-pink-700" alt="profile" />
            <div className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ">{user?.name}</div>
            <div className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent py-3" >{user?.email}</div>
        <div >
            <button className="me-1 border border-transparent transition:all duration-900 rounded-full px-4 py-1 text-sm bg-slate-950 hover:bg-transparent hover:border-white" onClick={handlelogout}>Logout</button>
            <Link to="/admain/users-update" className="me-1 border border-transparent transition:all duration-900 rounded-full px-4 py-1 text-sm bg-slate-950 hover:bg-transparent hover:border-amber-50">Modify Account</Link>
        </div>
        </div>
    </div>
  )
}

export default UserProfile
