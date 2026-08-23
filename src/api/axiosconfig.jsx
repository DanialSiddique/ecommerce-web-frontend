import axios from "axios"
const instance = axios.create({
    baseURL:"https://ecommerce-web-backend-8pen.onrender.com/"
})
export default instance