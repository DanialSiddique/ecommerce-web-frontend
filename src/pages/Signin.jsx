import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterdata } from '../store/Reducer/Actionapi';
import { useRef, useState } from 'react';

const Login = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [profile, setProfile] = useState("");
  const fileInputRef = useRef(null);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loginhandler = (user) => {
    user.id = nanoid();
    user.isadmain = false;
    user.cart = [];
    user.profile = profile;
    dispatch(asyncRegisterdata(user))
    navigate("/login")
    reset()
  }

  const imageHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };
  return (
    <div className='flex justify-center mt-20'>
      <div>
        <form onSubmit={handleSubmit(loginhandler)}
          className='rounded-3xl shadow-[0px_0px_45px_lightblue] flex flex-col px-5 sm:px-10 py-4 sm:py-10 w-80 sm:w-100 h-115 sm:h-125
     mx-10 mt-10 bg-gradient-to-tl from blue-500 to-blue-500 '
        >
          <div className="flex justify-center mb-3">

            <img
              src={profile || "download (1).jpg"}
              alt="profile"
              onClick={openFilePicker}
              className="w-24 h-24 rounded-full object-cover cursor-pointer border-2 border-gray-300"
            />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={imageHandler}
              className="hidden"
            />

          </div>
          <input type="text" placeholder="john doe"
            className='text-lg sm:text-2xl font-thin border-b-2 px-2 sm:px-4 py-2 sm:py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] '
            {...register("name", {
              required: "username is required",
              pattern: {
                value: /^[a-zA-Z0-9_]{3,20}$/,
                message: "Username must be 3-20 characters and contain only letters, numbers, and underscores"
              }
            })}
          />
          <small className='text-red-600 font-thin h-9 mb-2'>{errors?.name?.message}</small>

          <input type="email" placeholder="john@doe"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email"
              }
            })} className='text-lg sm:text-2xl font-thin border-b-2 px-2 sm:px-4 py-2 sm:py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] '
          />
          <small className='text-red-600 font-thin h-5'>{errors?.email?.message}</small>

          <input type="password" placeholder="*****"
            {...register("password", {
              required: "Enter strong Password",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
              }
            })} className=' text-lg sm:text-2xl font-thin border-b-2 px-2 sm:px-4 py-2 sm:py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] '
          />
          <small className='text-red-600 font-thinh-9'>{errors?.password?.message}</small>

          <button className='bg-pink-950 border border-transparent transition-all hover:bg-transparent hover:border-white duration-200 w-30 px-5 py-2 rounded-3xl mt-5 mb-5 mx-20 sm:mx-25'>Signin</button>

        </form>
        <p className='text-lg font-thin mt-5 mx-15 '>Did you have alreday Accont? <Link className='text-blue-700
      font-bold ' to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Login
