import { useEffect } from "react"
import Nav from "./component/Nav"
import Mainroute from "./route/Mainroute"
import { asynccurrentuser } from "./store/Reducer/Actionapi"
import { useDispatch, useSelector } from "react-redux"
import { asyncloadproduct } from "./store/Reducer/actionproduct"
import "./app.css"
const App = () => {
  const user = useSelector((state)=>state.usersReducer.users)
  const {products ,loading} = useSelector((state)=>state.productReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    !user && dispatch(asynccurrentuser());
  },[user])
  useEffect(() => {
    if(products.length == 0 && !loading){
       dispatch(asyncloadproduct());
    }
  },[products,loading,dispatch])
  return (
    <div className="relative text-white min-h-screen overflow-hidden bg-slate-900">
      <Nav />
      <Mainroute />
      <div className=" absolute top-0 left-0 h-96 w-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className=" absolute top-0 right-0 h-96 w-96 bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className=" absolute bottom-0 left-70 h-96 w-96 bg-pink-500/30 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  )
}

export default App
