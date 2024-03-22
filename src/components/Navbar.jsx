import { useState } from 'react'
import { useStateValues } from '../Utils/Provider'
import { FaSignOutAlt, FaShopify, FaList, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate, } from "react-router-dom";
import { MdClose, MdContactSupport } from "react-icons/md";
import { HiHome, HiMenuAlt2 } from "react-icons/hi";
import { TbMenuOrder } from "react-icons/tb";
import { BiHeart, BiSearch,BiUserCircle } from 'react-icons/bi';
import logo from '../assests/logo.png'
import axios from 'axios'

export default function Navbar() {

  const [{ token, cartData, hamburger }, dispatch] = useStateValues();
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  const getResult = () => {
    const data = axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/product/search`, { query: searchQuery });
    console.log(data);
  }

  const logoutHandler = async () => {
    try {
      if (token) {
        dispatch({
          type: "SET_TOKEN",
          token: "",
        })
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_HAMBURGER",
          hamburger: false,
        })
        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        localStorage.removeItem("user");
        navigate('/');
      }
      toast.success("Sign Out Successfully");
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      getResult();
    }
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    getResult();
  };


  return (

    <div
      className="w-full h-[60px] fixed bg-white top-0 z-50 border-b-[1px] border-b-gray-200 ">
      <nav className="h-full px-4  mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link className='flex gap-2 items-center' to="/">
            <img className="w-[3.2rem] h-[3.2rem] rounded-[1rem] md:ml-[2rem] object-fit"
              src={logo} alt='' />
            <p className='font-extrabold text-[1rem] md:text-[1.2rem]'>Go Cart </p>
          </Link>

          {/* laptop view navigation*/}
          <ul
            className=" items-center w-auto z-50 p-0 hidden sm:flex gap-2" >
            <Link
              className="flex font-normal hover:font-bold  h-6 justify-center items-center px-3 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
              to={'/'} >
              <li>{"Home"}</li>
            </Link>
            <Link
              className="flex font-normal hover:font-bold  h-6 justify-center items-center px-3 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
              to={'/product'} >
              <li>{"Shop"}</li>
            </Link>
            <Link
              className="flex font-normal hover:font-bold  h-6 justify-center items-center px-3 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
              to={'/contact'} >
              <li>{"Contact"}</li>
            </Link>
            <Link
              className="flex font-normal hover:font-bold  h-6 justify-center items-center px-3 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
              to={'/about'} >
              <li>{"About"}</li>
            </Link>
          </ul>



          <div className='flex h-full lg:gap-5  gap-2 items-center'>
            <div className='flex lg:gap-3 items-center'>
              <input
                className="flex-1 pb-[0.3rem] outline-none border-b-[2px] border-black w-[2rem]  mb:w-[8rem] md:w-[2rem] lg:w-[13rem]  placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                value={searchQuery}
                onKeyPress={handleSearchSubmit}
                placeholder="Search your products here"
              />
              <BiSearch size={25} />

            </div>
            {
              (token ?
                (<div className='flex lg:gap-4 gap-2 items-center'>
                  <Link to={'/profile'} className='hidden md:block'>
                    <BiUserCircle size={30}/>
                  </Link>
                  <Link className='relative' to={'/cart'} >
                    <div className=' flex md:ml-[0rem] items-center  px-2 py-2  text-white font-semibold  gap-2 rounded-full bg-red-600'>
                      <FaShoppingCart /><span className='hidden sm:flex'>Cart</span>
                    </div>
                    <div className='absolute  -top-3 -right-3 animate-bounce  bg-green-500 px-[0.5rem] py-0 rounded-full text-white'
                    >{cartData.length}</div>
                  </Link>

                </div>)
                :
                (<Link to={'/login'} className=' flex md:ml-[0rem] items-center  px-2 py-2  text-white font-semibold  gap-2 rounded-full bg-red-600'>
                  <FaUserAlt /><span className='hidden sm:flex'>Login</span>
                </Link>)
              )
            }
            {
              !hamburger ?
                (<HiMenuAlt2
                  onClick={() => dispatch({
                    type: "SET_HAMBURGER",
                    hamburger: true,
                  })}
                  className="inline-block sm:hidden cursor-pointer w-8 h-6"
                />) :
                (
                  <MdClose
                    onClick={() => dispatch({
                      type: "SET_HAMBURGER",
                      hamburger: false,
                    })}
                    className="inline-block md:hidden cursor-pointer w-8 h-6"
                  />
                )
            }
            {/* mobile menu*/}
            {hamburger && (

              <div className="fixed md:hidden top-[4rem] right-0 py-2  px-6 bg-gray-200 bg-opacity-90 rounded-md z-100">
                <div className=" mt-2 relative" >

                  <ul className=" flex flex-col gap-3 ">
                    <Link className='flex border-b-[1px] items-center gap-2'
                      to={'/'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    > <HiHome size={20} /><span>Home</span>
                    </Link>

                    {token &&
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/'}>
                        <BiHeart size={20} /><span>Favorites</span>
                      </Link>
                    }
                    {token &&
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/orders'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger: false,
                        })}
                      >
                        <TbMenuOrder />{"My Orders"}
                      </Link>
                    }


                    <Link className='flex border-b-[1px] items-center gap-2'
                      to={'/shop'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <FaShopify />{"Shop"}
                    </Link>

                    {token &&
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/profile'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger: false,
                        })}
                      >
                        <BiUserCircle />{"My Account"}
                      </Link>

                    }
                    <Link className='flex  items-center gap-2'
                      to={'/contact'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <MdContactSupport /> {"Contact Us"}
                    </Link>
                    <Link className='flex items-center gap-2'
                      to={'/about'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <FaList size={15} /> {"About"}
                    </Link>
                    {token &&
                      <div className='flex items-center gap-2'
                        onClick={logoutHandler}
                      >
                        <FaSignOutAlt /> {"Log Out"}
                      </div>
                    }

                  </ul>
                  <div className="mt-3 mx-1">
                    <h1
                      onClick={() => setCategory(!category)}
                      className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Category{" "}
                      <span className="text-lg">{category ? "-" : "+"}</span>
                    </h1>
                    {category && (
                      <ul
                        className="text-sm flex flex-col gap-4"
                      >
                        <li className="">New Arrivals</li>
                        <li className="">Gudgets</li>
                        <li className="">Accessories</li>
                        <li className="">Electronics</li>
                        <li className="">Others</li>
                      </ul>
                    )}
                  </div>
                  <div className="mt-3 mx-1">
                    <h1
                      onClick={() => setBrand(!brand)}
                      className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Brand
                      <span className="text-lg">{brand ? "-" : "+"}</span>
                    </h1>
                    {brand && (
                      <ul
                        className="text-sm flex flex-col gap-4"
                      >
                        <li className="">New Arrivals</li>
                        <li className="">Gudgets</li>
                        <li className="">Accessories</li>
                        <li className="">Electronics</li>
                        <li className="">Others</li>
                      </ul>
                    )}
                  </div>

                </div>

              </div>

            )}
          </div>
        </div>
      </nav >
    </div >
  )
}
