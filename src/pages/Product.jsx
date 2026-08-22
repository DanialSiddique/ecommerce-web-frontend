import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncupdateddata } from "../store/Reducer/Actionapi";
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const Product = () => {

  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [catagory, setCatagory] = useState("");
  const dispatch = useDispatch();
  const navi = useNavigate();

  const user = useSelector(
    (state) => state.usersReducer.users
  );


  const fetchMoreData = async () => {

    if (search.trim() || catagory.trim()) return;

    try {

      const start = products.length;

      const { data } = await axios.get(
        `/products?_limit=6&_start=${start}`
      );


      if (data.length === 0) {

        setHasMore(false);

      } else {

        setProducts(prev => {

          // remove duplicate ids
          const ids = new Set(prev.map(p => p.id))
          console.log("collect the products ids in ids useing new set", ids)
          const newData = data.filter((items) =>
          (
            !ids.has(items.id)
          ))
          console.log(!ids.has(data.id))
          return [...prev, ...newData]
        });

      }

    } catch (err) {
      console.log(err);
    }

  }



  const loadInitialProduct = async () => {

    try {

      const { data } = await axios.get(
        "/products?_limit=12&_start=0"
      );

      setProducts(data);
      setHasMore(true);

    } catch (err) {
      console.log(err);
    }

  }



  useEffect(() => {

    loadInitialProduct();

  }, []);



  const handleSearch = async (value) => {

    setSearch(value);


    if (value.trim()) {

      const { data } = await axios.get(
        `/products?title_like=${value}`
      );


      setProducts(data);
      setHasMore(false);



    } else {

      loadInitialProduct();

    }

  }

  const handlecatagory = async (value) => {

    setCatagory(value);
    if (value.trim()) {
      try {
        const { data } = await axios.get(`/products?catagory_like=${value}`
        );
        console.log(data)
        setProducts(data)
        setHasMore(false)
      }
      catch (err) {
        console.log(err)
      }
    } else {
      loadInitialProduct();
    }
  }

  const handlecart = (product) => {

    if (!user) return navi("/login");


    const copy = {
      ...user,
      cart: [...user.cart]
    }


    const index =
      copy.cart.findIndex(
        c => c.product.id === product.id
      );


    if (index === -1) {

      copy.cart.push({
        product,
        quantity: 1
      });

    } else {

      copy.cart[index] = {
        ...copy.cart[index],
        quantity:
          copy.cart[index].quantity + 1
      }

    }


    dispatch(
      asyncupdateddata(copy, user.id)
    );

  }




  return (
    <>
      <div className="my-4 flex flex-row justify-center gap-4 px-4 ">
        <input
          type="search"
          placeholder="Search item"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-3/4 sm:w-72 md:w-80 bg-slate-400 px-4 py-2 rounded-full text-black text-base md:text-lg font-bold"
        />
        <input list="catagory" placeholder="Select" value={catagory}
          onChange={(e) => handlecatagory(e.target.value)}
          className="w-1/4 sm:w-72 md:w-80 bg-slate-400 px-4 py-2 rounded-full text-black text-base md:text-lg font-bold" />
        <datalist id="catagory">
          <option value="men's clothing"></option>
          <option value="women's clothing"></option>
          <option value="electronics"></option>
          <option value="bags"></option>
          <option value="jewelery"></option>
          <option value="accessories"></option>
          <option value="furniture"></option>
        </datalist>

      </div>



      <InfiniteScroll

        dataLength={products.length}

        next={fetchMoreData}

        hasMore={!search.trim() && hasMore}

        loader={<h4 className="text-red-600 text-2xl py-20 text-center">Loading...</h4>}

        endMessage={products.length> 0 ? <p className="text-5xl animate-pulse text-green-700 py-10 text-center ">YUP!! you watch all products</p>: null}

      >

        {products.length > 0 ?

          (
            <div className="container flex flex-wrap gap-5 justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-auto">


              {
                products.map((product) => (


                  <div
                    key={product.id}
                    className="w-1/4 sm:w-1/5 p-2 md:w-1/5 lg:w-1/6 glass shadow-[0_0_5px] hover:scale-101 flex flex-col justify-between rounded-lg text-center gap-2 max-h-100 md:max-h-115 md:min-h-115 md:gap-2 lg:min-h-120 lg:max-h-120 xl:min-h-130 xl:max-h-130 2xl:min-h-140 2xl:max-h-140 transition-all duration-200 product-card"
                  >


                    <img
                      className="py-2 w-full min-h-40 max-h-40 rounded-2xl md:min-h-50 md:max-h-50 lg:min-h-55 lg:max-h-55"
                      src={product.image}
                      alt={product.title}

                      onError={(e) => {
                        e.target.src =
                          "https://picsum.photos/300/300"
                      }}

                    />
                    <div className=" text-[12px] sm:text-[15px] md:text-[18px] lg:text-[22px] text-red-300 font-bold">{product.title.slice(0, 20)} <Link
                      to={`/product-details/${product.id}`} className="text-blue-300"
                    >
                      More...
                    </Link></div>







                    <div className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-yellow-300 hover:text-yellow-500">
                      {product.price} $
                    </div>





                    {
                      !user?.isadmain &&


                      <button
                        onClick={() => handlecart(product)}
                        className="bg-slate-900 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-2 py-1 rounded-full my-2 hover:bg-gray-500 border border-transparent hover:border-white hover:scale-115 duration-150"
                      >
                        Cart item
                      </button>
                    }

                    <Link
                      className="bg-slate-900 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-2 py-1 rounded-full my-2 hover:bg-gray-500 border border-transparent hover:border-white hover:scale-115 duration-150"

                      to={`/product-details/${product.id}`}
                    >
                      Details
                    </Link>


                  </div>



                ))
              }
            </div>
          )
          : (
            <p className="text-5xl animate-pulse text-red-700 py-10 text-center">
              No products found
            </p>
          )
        }
      </InfiniteScroll>


    </>
  )
}


export default Product;