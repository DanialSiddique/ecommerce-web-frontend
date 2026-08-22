import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { asyncdeleteproduct, asyncupadateproduct } from "../store/Reducer/actionproduct";
import { toast } from "react-toastify";
import { asyncupdateddata } from "../store/Reducer/Actionapi";
import { motion } from "framer-motion"
const Productdetails = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.productReducer.products)
    const user = useSelector((state) => state.usersReducer.users)
    const productDetails = product?.find((pro) => {
        return pro.id == id
    })
    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title: productDetails?.title,
            image: productDetails?.image,
            price: productDetails?.price,
            discription: productDetails?.discription,
            catagory: productDetails?.catagory
        }
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitform = (product) => {
        dispatch(asyncupadateproduct(product, productDetails.id));
        navigate("/product")
        reset();
        toast.success("Product UPDATED SuccessFully", 'success')
    }
    const deletehandler = () => {
        dispatch(asyncdeleteproduct(productDetails.id));
        navigate("/product")
    }
    const handlecartpositive = (product) => {
        if (!user) return navigate("/login");

        const cpydata = { ...user, cart: [...user.cart] }

        const index = cpydata.cart.findIndex((c) => c.product.id === product.id);
        if (index === -1) {
            cpydata.cart.push({
                product,
                quantity: 1
            })
        }
        else {
            cpydata.cart[index] = {
                ...cpydata.cart[index],
                quantity: cpydata.cart[index].quantity + 1,
            }
        }
        dispatch(asyncupdateddata(cpydata, user.id));
    };

    return productDetails ? (
        <div className="flex flex-col items-center-safe md:flex-row md:justify-center md:items-start md:mx-5 md:ms-10 lg:max-w-300 ">
            <div className="w-10/12 mx-auto border p-4 glass shadow-[0px_0px_10px] px-6 my-10  hover:scale-101 duration-200 ">
                <motion.div key={productDetails.id}
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 2
                    }}
                    viewport={{
                        once: true
                    }}
                    animate={{
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                    className="">
                    <div className="text-2xl text-center cart-title text-red-400 p-1 my-3 md:text-3xl">{productDetails.title}</div>
                    <div ><motion.img
                        whileHover={{
                            scale: 1.03,
                            rotate: 8,
                            y: -10
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                        src={productDetails.image} alt={productDetails.title} className=" my-1 " /></div>
                    <hr className="shadow-[0px_10px_30px_10px_black] text-black " />
                    <div className="text-sm md:text-lg md:py-4 text-red-400 py-2 my-3">{productDetails.discription}</div>
                    <div>
                        <div className="text-xl md:text-2xl md:py-4 text-yellow-400 hover:scale-101 hover:rotate-3 duration-150 -hover:rotate-3">{productDetails.price} $</div>
                    </div>
                    <div className="py-1 my-2 text-3xl md:text-4xl animate-pulse text-red-500">{productDetails.catagory}</div>
                </motion.div>
                {user?.isadmain ? "" : <button className="bg-slate-900 rounded-3xl text-white px-3 py-2 hover:bg-white hover:text-slate-900 border-white hover:border-black" onClick={() => handlecartpositive(productDetails)}>Add to Cart</button>
                }
                <br />
            </div>
            {user && user?.isadmain ?
                <div className="w-[85%] mx-8 bg-[rgba(255,255,255,0.2)] overflow-hidden backdrop-blur-3xl rounded-3xl border md:min-h-193 md:text-2xl lg:max-w-170 md:my-9">
                    <form onSubmit={handleSubmit(submitform)}
                        className="flex flex-col gap-5 p-10 py-5 my-4 md:gap-7     ">
                        <input type="text" {...register("title", {
                            required: ("discribe the title of product")
                        })}
                            className="border-b py-2 px-1 hover:bg-slate-600 rounded-2xl text-white"
                            placeholder="Title" />
                        <small className="text-red-500 h-3">{errors?.title?.message}</small>
                        <input type="url" {...register("image", { required: ("Enter the Image of product") })} placeholder="Enter the image url"
                            className="border-b py-2 px-1 hover:bg-slate-600 rounded-2xl text-white" />
                        <small className="text-red-500 h-3">{errors?.image?.message}</small>

                        <input type="text" {...register("price", {
                            required: ("enter the price")
                        })}
                            placeholder="Price"
                            className="border-b py-2 px-1 hover:bg-slate-600 rounded-2xl text-white"
                        />
                        <small className="text-red-500 h-3">{errors?.price?.message}</small>

                        <input type="text" {...register("discription", {
                            required: ("Enter Product Discripton")
                        })}
                            placeholder="Discription"
                            className="border-b py-2 px-1 hover:bg-slate-600 rounded-2xl text-white" />
                        <small className="text-red-500 h-3">{errors?.discription?.message}</small>

                        <select
                            {...register("catagory")}
                            className="py-2 px-3 bg-slate-900 rounded-2xl text-white"
                        >
                            <option value="catagory" selected disabled>Category</option>

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
                        <button className="bg-slate-900 p-2 rounded-3xl border border-transparent hover:border-white hover:bg-gray-500 hover:scale-102 duration-200 ">Update Product</button>
                        <button className="bg-slate-900 p-2 rounded-3xl border border-transparent hover:border-white hover:bg-gray-500 hover:scale-102 duration-200 " type="button" onClick={deletehandler}>Delete Product</button>
                    </form>
                </div>
                : <div className="hero-text text-3xl flex justify-center items-center text-center md:h-150">Admain Authorized Aera....!</div>}
        </div>
    ) : "Loading!...."
}

export default Productdetails
