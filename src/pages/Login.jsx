import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asynclogindata } from '../store/Reducer/Actionapi';
const Login = () => {
    const { register,reset,handleSubmit,formState:{error}
    } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const loginhandler = async (user)=>{
      const success =await dispatch(asynclogindata(user))
      reset();
      if(success){
        navigate("/product");
      }
    }
  return (
    <div className='flex justify-center mt-20'>
      <div>
      <form onSubmit={handleSubmit(loginhandler)}
      className='rounded-3xl shadow-[15px_5px_30px_lightblue] flex flex-col gap-3 sm:gap-0 px-10 py-10 sm:py-15 w-80 sm:w-100 h-85 sm:h-100
     mx-10 mt-10 bg-gradient-to-tl from blue-500 to-blue-500' 
      >
        <input type="email" placeholder="john@doe" 
        {...register("email",{
            required:"email is required"}
          )} className='my-2 sm:my-5 text-lg sm:text-2xl font-thin border-b-2 px-2 sm:px-4 py-2 sm:py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] autofill:bg-transparent'
        />
        <input type="password" placeholder="********" 
        {...register("password",{
            required:"password is required"
        })} className='my-5 text-lg sm:text-2xl font-thin border-b-2 px-2 py-2 sm:px-4 sm:py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015]'
        />
        <button className='bg-pink-950 border border-transparent transition-all hover:bg-transparent hover:border-white duration-200 w-30 px-5 py-2 rounded-3xl mt-5 mx-15 sm:mx-25 '>Login</button>
       
      </form>
      <p className='text-lg font-thin mt-5 mx-1' >Did you have not any Account? <Link className='text-blue-700
      font-bold ' to="/signin">Signin</Link></p>
      </div>
    </div>
  )
}

export default Login
