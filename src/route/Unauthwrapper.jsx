import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const Unauthwrapper = (props) => {
    const {users} = useSelector((state)=>state.usersReducer)
  return users ? <Navigate to="*"/> : props.childern
}

export default Unauthwrapper
