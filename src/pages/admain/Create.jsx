import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { asyncproductstore } from "../../store/Reducer/actionproduct";
import { nanoid } from "nanoid";
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const { register, reset, formState:{errors}, handleSubmit}=useForm();
    const dispatch = useDispatch();
    const navi = useNavigate()
    const user = useSelector((state)=> state.usersReducer.users)
    const submitform = (product)=>{
        product.id = nanoid()
       dispatch(asyncproductstore(product));
        reset();
        navi("/product")
        toast.success("Product Created SuccessFully",'success')
    }
    return (
    <div className="flex justify-center ">
    {user && user?.isadmain ? 
    <form onSubmit={handleSubmit(submitform)}
      className="flex flex-col gap-3 w-130 p-5 m-5 mx-10 glass rounded-4xl shadow-[0_0_20px_5px]">
        <input type="text" {...register("title",{
            required:("discribe the title of product")})}
            placeholder="Title" className=" border-b px-4 py-3 text-xl font-thin focus:outline-none"/>
        <span className="h-1"><small className="text-red-500 text-center text-thin">{errors?.title?.message}</small></span>
        <input type="url" {...register("image",{required:("Enter the Image of product")})} placeholder="Enter the image url" 
        className=" border-b px-4 py-3 text-xl font-thin focus:outline-none"/>
        <span className="h-1"><small className="text-red-500 text-center text-thin">{errors?.image?.message}</small></span>

        <input type="text" {...register("price",{
            required:("enter the price")})}
            placeholder="Price"
            className=" border-b px-4 py-3 text-xl font-thin focus:outline-none"/>
        <span className="h-1"><small className="text-red-500 text-center text-thin">{errors?.price?.message}</small></span>

        <input type="text" {...register("discription",{
            required:("Enter Product Discripton")})}
            placeholder="Discription"
            className=" border-b px-4 py-3 text-xl font-thin focus:outline-none"/>
        <span className="h-1 mb-4"><small className="text-red-500 text-center text-thin ">{errors?.discription?.message}</small></span>
        <span className="text-end">
            <select {...register("catagory")} className="text-black bg-white/30 backdrop-blur-2xl px-4 py-2 rounded-full hover:bg-gray-900/2 focus-outline-none transition-all duration-200 create-cate-select">
                <option value="" selected disabled>Category</option>
                                            <option value="electronics">Electronics</option>
                            <option value="mobile-phones">Mobile Phones</option>
                            <option value="laptops">Laptops</option>
                            <option value="tablets">Tablets</option>
                            <option value="computers">Computers</option>
                            <option value="computer-accessories">Computer Accessories</option>
                            <option value="gaming">Gaming</option>
                            <option value="cameras">Cameras</option>
                            <option value="headphones">Headphones</option>
                            <option value="smartwatches">Smartwatches</option>

                            <option value="mens-clothing">Men's Clothing</option>
                            <option value="womens-clothing">Women's Clothing</option>
                            <option value="kids-clothing">Kids' Clothing</option>
                            <option value="shoes">Shoes</option>
                            <option value="bags">Bags</option>
                            <option value="watches">Watches</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="sunglasses">Sunglasses</option>
                            <option value="accessories">Fashion Accessories</option>
                            <option value="sportswear">Sportswear</option>

                            <option value="furniture">Furniture</option>
                            <option value="home-decor">Home Decor</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="home-appliances">Home Appliances</option>
                            <option value="lighting">Lighting</option>
                            <option value="bathroom">Bathroom</option>
                            <option value="bedding">Bedding</option>
                            <option value="gardening">Gardening</option>
                            <option value="tools">Tools</option>
                            <option value="storage">Storage & Organization</option>

                            <option value="beauty">Beauty</option>
                            <option value="skincare">Skincare</option>
                            <option value="haircare">Haircare</option>
                            <option value="makeup">Makeup</option>
                            <option value="perfumes">Perfumes</option>
                            <option value="personal-care">Personal Care</option>
                            <option value="health">Health</option>
                            <option value="fitness">Fitness</option>
                            <option value="sports">Sports</option>
                            <option value="outdoor">Outdoor</option>

                            <option value="books">Books</option>
                            <option value="stationery">Stationery</option>
                            <option value="toys">Toys</option>
                            <option value="baby-products">Baby Products</option>
                            <option value="pet-supplies">Pet Supplies</option>
                            <option value="automotive">Automotive</option>
                            <option value="motorcycles">Motorcycles</option>
                            <option value="groceries">Groceries</option>
                            <option value="office-supplies">Office Supplies</option>
                            <option value="travel">Travel & Luggage</option>
                            <option value="other">Other</option>
            </select>
        </span>
      <span className="text-center "><button className="bg-white/30 backdrop-blur-2xl px-4 py-2 rounded-full hover:bg-gray-900/2  create-cate-select ">Submit Product</button></span>
      </form>: <div className="hero-text text-4xl flex justify-center items-center h-150 ">Admain Authorized Aera....!</div>}
      
    </div>
  )
}

export default Create
