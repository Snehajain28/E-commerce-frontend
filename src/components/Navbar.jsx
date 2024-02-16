import { useState } from 'react'
import { useStateValues } from '../Utils/Provider'
import { FaSignOutAlt, FaShopify, FaList, FaShoppingCart, FaUserAlt, } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, } from "react-router-dom";
import { MdClose, MdContactSupport } from "react-icons/md";
import { HiHome, HiMenuAlt2 } from "react-icons/hi";
import { TbMenuOrder } from "react-icons/tb";
import { BiUserCircle } from 'react-icons/bi';



export default function Navbar() {

  const [{ token, cartData, hamburger }, dispatch] = useStateValues();
  const showMenu = true;
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);


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
          hamburger:false,
        })
        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        localStorage.removeItem("user");

      }
      toast.success("Sign Out Successfully");
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };


  return (

    <div
      className="w-full h-[60px] fixed bg-white top-0 z-50 border-b-[1px] border-b-gray-200 ">
      <nav className="h-full px-4  mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <img className="w-[4.9rem] h-[4rem]  rounded-full -mt-[0.5rem] md:ml-[2rem] object-fit" src="data:image/png;base64,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" alt='' />
          </Link>
          <div className='flex h-full items-center'>
            {showMenu && (
              <ul
                className=" items-center w-auto z-50 p-0 hidden sm:flex gap-2" >
                <Link
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  to={'/'} >
                  <li>{"Home"}</li>
                </Link>
                <Link
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  to={'/product'} >
                  <li>{"Shop"}</li>
                </Link>
                <Link
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  to={'/contact'} >
                  <li>{"Contact"}</li>
                </Link>
                <Link
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  to={'/about'} >
                  <li>{"About"}</li>
                </Link>
              </ul>
            )}
            {
              (token ?
                (<Link to={'/cart'} >
                  <div className=' flex items-center w-[5rem] px-2 py-2  text-white font-semibold ml-[-7rem] md:ml-[0rem] gap-1 rounded-full bg-red-600'>
                    <FaShoppingCart /> Cart
                  </div>
                  <div className='absolute md:top-1 top-0 animate-bounce md:right-3 right-8 bg-green-500 px-[0.5rem] py-0 rounded-full text-white'
                  >{cartData.length}</div>
                </Link>) :
                (<Link to={'/login'} className=' flex md:ml-[0rem] items-center w-[5rem] px-2 py-2  text-white font-semibold ml-[-7rem] gap-2 rounded-full bg-red-600'>
                  <FaUserAlt />Login
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
                  className="inline-block sm:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
                />) :
                (
                  <MdClose
                  onClick={() => dispatch({
                    type: "SET_HAMBURGER",
                    hamburger:false,
                  })}
                    className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
                  />
                )
            }

            {hamburger && (

              <div className="fixed md:hidden top-[4rem] right-2 px-4 bg-gray-300 bg-opacity-80 z-50">
                <div
                  className=" relative" >
                  <div className="p-7">

                    <ul className=" flex flex-col gap-5 ">
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger:false,
                        })}
                      > <HiHome size={20} /><span>Home</span>
                      </Link>
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/shop'}
                         onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger:false,
                        })}
                      >
                        <FaShopify />{"Shop"}
                      </Link>
                      {token &&
                        <Link className='flex border-b-[1px] items-center gap-2'
                          to={'/orders'}
                          onClick={() => dispatch({
                            type: "SET_HAMBURGER",
                            hamburger:false,
                          })}
                        >
                          <TbMenuOrder />{"My Orders"}
                        </Link>
                      }
                      {token &&
                        <Link className='flex border-b-[1px] items-center gap-2'
                          to={'/profile'}
                          onClick={() => dispatch({
                            type: "SET_HAMBURGER",
                            hamburger:false,
                          })}
                        >
                          <BiUserCircle />{"My Account"}
                        </Link>

                      }
                      <Link className='flex  items-center gap-2'
                        to={'/contact'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger:false,
                        })}
                      >
                        <MdContactSupport /> {"Contact"}
                      </Link>
                      <Link className='flex items-center gap-2'
                        to={'/about'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger:false,
                        })}
                      >
                        <FaList /> {"About"}
                      </Link>
                      {token && <div className='flex items-center gap-2'
                        onClick={logoutHandler}
                      >
                        <FaSignOutAlt /> {"Log Out"}
                      </div>
                      }
                    </ul>
                    <div className="mt-3 ">
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
                    <div className="mt-4">
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
              </div>
            )}
          </div>
        </div>
      </nav >
    </div >
  )
}
