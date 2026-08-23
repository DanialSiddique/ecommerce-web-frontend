import { lazy, Suspense } from 'react'
import { Routes , Route } from "react-router-dom"
import Unauthwrapper from './Unauthwrapper';
import AuthaticateRoute from './AuthaticateRoute';

const Cart = lazy(() => import("../pages/Cart"));
const Product = lazy(()=>import("../pages/Product"))
const Login = lazy(()=>import("../pages/Login"))
const Signin = lazy(()=>import("../pages/Signin"))
const Create = lazy(()=>import("../pages/admain/Create"))
const Productdetails = lazy(()=>import("../pages/Productdetails"))
const Notfound = lazy(()=>import("../pages/Notfound"))
const UserProfile = lazy(()=>import("../pages/user/UserProfile"))
const UpdateProfile = lazy(()=>import("../pages/user/UpdateProfile"))
import HOme from '../pages/HOme';

const Mainroute = () => {

  return (
    <Suspense fallback={<h2 className='text-red-700'>LOADING....!</h2>}>

    <Routes>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/" element={<HOme/>}/>
        <Route path="/product" element={<Product/>}/>

        <Route path="/create-product" element={
          <AuthaticateRoute>
            <Create/>
          </AuthaticateRoute>
        }/>
        <Route path="/admain/users-profile" element={
          <AuthaticateRoute>
            <UserProfile/>
          </AuthaticateRoute>
          }/>
        <Route path="/admain/users-update" element={
          <AuthaticateRoute>
            <UpdateProfile/>
          </AuthaticateRoute>
          }/>
        <Route path="/product-details/:id" element={
          <AuthaticateRoute>
            <Productdetails/>
          </AuthaticateRoute>
        }/> 
        <Route path="/cart" element={
          <AuthaticateRoute>
            <Cart/>
          </AuthaticateRoute>
        }/> 
        <Route path="/login" element={
          
            <Login/>
          
      }/> 
        
        <Route path="/signin" element={
          
            <Signin/>
          
  }/>
    </Routes>
    </Suspense>
  )
}

export default Mainroute
