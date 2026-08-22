import { useDispatch, useSelector } from "react-redux"
import { asyncupdateddata } from "../store/Reducer/Actionapi"
import { motion } from 'framer-motion'
const Cart = () => {
    const user = useSelector((state) => state.usersReducer.users)
    const dispatch = useDispatch()
    const handleitemnegative = (c, index) => {
        const cpydata = { ...user, cart: [...user.cart] }
        if (cpydata.cart[index]?.quantity > 1) {
            cpydata.cart[index] = {
                ...cpydata.cart[index],
                quantity: cpydata.cart[index].quantity - 1,
            }
        }
        else {
            cpydata.cart.splice(index, 1)
        }

        dispatch(asyncupdateddata(cpydata, user.id))
    }

    const handleitempositive = (c, index) => {
        const cpydata = { ...user, cart: [...user.cart] }

        cpydata.cart[index] = {
            ...cpydata.cart[index],
            quantity: cpydata.cart[index].quantity + 1,
        }

        dispatch(asyncupdateddata(cpydata, user.id))
    }
    const cartsitems = user.cart.map((c, index) => (
        <div key={c.product?.id} className="flex p-8 gap-3 glass my-10 mx-10 md:mx-30 shadow-[0px_0px_25px] jsutify-center items-center flex-col sm:flex-row">
            <div className="sm:w-1/2">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileHover={{
                        scale: 1.08,
                        rotate: 8,
                        y: -10
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,

                    }}
                    animate={{
                        y:0,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 1
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <li><img src={c.product?.image} alt={c.product?.title}
                    /></li>

                </motion.div>
            </div>
            <motion.div className="sm:w-1/2"
                initial={{
                    opacity: 0,
                    y: 200
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1
                }}
                viewport={{
                    once: true
                }}
            >
                <li className="text-3xl pt-2 pb-4 font-semibold cart-title">{c.product?.title}</li>
                <hr />
                <li className="text-2xl text-yellow-300 py-3">{c.product?.price}$</li>
                <li className="py-2 sm:text-lg">{c.product?.discription}</li>
                <li className="py-2 text-lg sm:text-xl">{c.product?.catagory}</li>
                <li >
                    <span onClick={() => handleitemnegative(c, index)} className="border px-5 ">-</span>
                    <span className="mx-3 text-xl">{c.quantity}</span>
                    <span onClick={() => handleitempositive(c, index)} className="border px-5" >+</span>
                </li>
            </motion.div>

        </div>
    ))

    return <ul className="">{cartsitems}</ul>
}

export default Cart
