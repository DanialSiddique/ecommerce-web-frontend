import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { asyncupdateddata, deleteuserprofile } from "../../store/Reducer/Actionapi";
import { useRef, useState } from "react";
const UpdateProfile = () => {
    const user = useSelector((state) => state.usersReducer.users)
    const [profile, setProfile] = useState(user.profile);
    const fileInputRef = useRef(null)
    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            password: user?.password,
        }
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const updatedaccount = async (users) => {
        await dispatch(asyncupdateddata(users, user.id));
        navigate("/admain/users-profile")
        console.log('data send for updation')
        reset();
    }
    const deletedaccount = () => {
        dispatch(deleteuserprofile(user.id))
        navigate("/")
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
        user ?
            <div className="flex justify-center mt-20">
                <form onSubmit={handleSubmit(updatedaccount)}
                    className="rounded-3xl shadow-[0px_0px_45px_lightblue] flex flex-col px-5 py-5 sm:px-10 sm:py-10 w-100 h-125
                mx-10 mt-10 bg-gradient-to-tl from blue-500 to-blue-500">
                    <div className="flex justify-center mb-3">

                        <img
                            src={profile || "../download (1).jpg"}
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
                    <input className='text-2xl font-thin border-b-2 px-4 py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] ' {...register("name", {
              required: "username is required",
              pattern: {
                value: /^[a-zA-Z0-9_]{3,20}$/,
                message: "Username must be 3-20 characters and contain only letters, numbers, and underscores"
              }
            })}
                        placeholder="User name" />
          <small className='text-red-600 font-thin h-9'>{errors?.name?.message}</small>
                    <input type="email" {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email"
              }
            })} className='text-2xl font-thin border-b-2 px-4 py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] '/>
          <small className='text-red-600 font-thin h-5'>{errors?.email?.message}</small>

                    <input type="text" {...register("password", {
              required: "Enter strong Password",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
              }
            })} className=' text-2xl font-thin border-b-2 px-4 py-3 focus:outline-none
          transition-all duration-200 hover:scale-[1.015] '
          />
          <small className='text-red-600 font-thinh-9'>{errors?.password?.message}</small>
                  <div className="flex justify-between">
                   <span><button  className='bg-pink-950 border border-transparent transition-all hover:bg-transparent hover:border-white duration-200 w-30 px-5 py-2 rounded-3xl mt-5'>Update</button></span>
                   <span><button type="button" onClick={deletedaccount}  className='bg-pink-950 border border-transparent transition-all hover:bg-transparent hover:border-white duration-200 w-30 px-5 py-2 rounded-3xl mt-5'>Delete </button></span>
                  </div>
                </form>
            </div> : "user not loggin"
    )
}

export default UpdateProfile
