import { useSelector} from "react-redux"
import { NavLink } from "react-router-dom"
const Nav = () => {
  const user = useSelector( (state )=> state.usersReducer.users)
  
  return (
   <>
   <div className="flex gap-6 px-5 pt-5 text-lg pb-5 bg-slate-800 shadow-[0_15px_30px_rgb(156,56,100)]">
      <NavLink to="/" className={({isActive})=> isActive ? "text-purple-500 bg-slate-900 rounded-xl p-0.5 px-1" : "text-white"}>Home</NavLink>
      <NavLink to="/product" className={({isActive})=> isActive ? "text-purple-500 bg-slate-900 rounded-xl p-0.5" : "text-white"}>Products</NavLink>
      {user ? (
        <>
        {user ?. isadmain ?
          <NavLink to="/create-product" className={({isActive})=> isActive ? "text-purple-500 bg-slate-900 rounded-xl p-0.5 px-1" : "text-white"}>Product Add</NavLink> 
          :""
          }
          <NavLink to="/admain/users-profile" className={({isActive})=> isActive ? "text-purple-500 bg-slate-900 rounded-xl p-0.5" : "text-white"}>User</NavLink> 
          {user?.isadmain ? "" :<NavLink to="/cart" className={({isActive})=> isActive ? "textpurple-500 bg-slate-900 rounded-xl p-0.5":"text-white "}>Cart</NavLink>}
        </>
      ):(
        <NavLink to="/login" className={({isActive})=> isActive ? "text-purple-500 bg-slate-900 rounded-xl p-0.5" : 'text-white'}>Login</NavLink>
      )}
    </div>
    <hr className="text-slate-500 mb-5  "/>
    </>
  )
}

export default Nav
 