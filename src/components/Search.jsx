import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import toast from "react-hot-toast";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useStateValues } from "../Utils/Provider";


const Search = () => {

    const [show, setShow] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const navigate = useNavigate();
    const [{ cartData, token }, dispatch] = useStateValues();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

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
                localStorage.removeItem("token");
                localStorage.removeItem("cartData");
            }
            toast.success("Sign Out Successfully");
        } catch (error) {
            toast.error("Sign Out Fail");
        }
    };



    useEffect(() => {
        //   const filtered = paginationItems.filter((item) =>
        //   item.productName.toLowerCase().includes(searchQuery.toLowerCase())
        //);
        // setFilteredProducts(filtered);
    }, [searchQuery]);

    return (
        <div className="w-full bg-[#F5F5F3] mt-[4rem] relative">
            <div className="max-w-container mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
                    <div
                        onClick={() => setShow(!show)}
                        className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
                    >
                        <HiOutlineMenuAlt4 className="w-5 h-5" />
                        <p className="text-[14px] font-normal">Shop by Category</p>

                        {show && (
                            <ul
                                className="absolute top-[3rem] lg:top-[4rem] z-50 bg-gray-200 bg-opacity-90 w-auto text-black h-auto p-4 "
                            >
                                <li className=" px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Accessories
                                </li>
                                <li className=" px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Furniture
                                </li>
                                <li className=" px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Electronics
                                </li>
                                <li className=" px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Clothes
                                </li>
                                <li className=" px-4 py-2 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Bags
                                </li>
                                <li className="px-4 py-2 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Home appliances
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                        <input
                            className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                            type="text"
                            onChange={handleSearch}
                            value={searchQuery}
                            placeholder="Search your products here"
                        />
                        <FaSearch className="w-5 h-5" />
                        {searchQuery && (
                            <div
                                className={`w-full mx-auto  bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                            >
                                {searchQuery &&
                                    filteredProducts.map((item) => (
                                        <div
                                            onClick={() =>
                                                navigate(
                                                    `/product/${item.productName
                                                        .toLowerCase()
                                                        .split(" ")
                                                        .join("")}`,
                                                    {
                                                        state: {
                                                            item: item,
                                                        },
                                                    }
                                                ) &
                                                setShowSearchBar(true) &
                                                setSearchQuery("")
                                            }
                                            key={item._id}
                                            className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                                        >
                                            <img className="w-24" src={item.img} alt="productImg" />
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold text-lg">
                                                    {item.productName}
                                                </p>
                                                <p className="text-xs">{item.des}</p>
                                                <p className="text-sm">
                                                    Price:{" "}
                                                    <span className="text-primeColor font-semibold">
                                                        ${item.price}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 ml-[90%] lg:ml-0  mt-5 lg:mt-0 items-center pr-6 cursor-pointer relative">
                        <div onClick={() => setShowUser(!showUser)} className="flex">
                            <FaUser />
                            <FaCaretDown />
                        </div>
                        {showUser && (
                            <ul
                                className="absolute top-7 right-1 z-50 bg-gray-200 bg-opacity-90 text-black w-[10rem] border-[2px] p-4 "
                            >
                                {!token &&
                                    <Link to="/login">
                                        <li className="text-gray-400 px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Login
                                        </li>
                                    </Link>}
                                {!token &&
                                    <Link to="/">
                                        <li className="text-gray-400 px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Sign Up
                                        </li>
                                    </Link>}
                                <Link to={'/profile'} onClick={() => setShowUser(false)}>
                                    <li className="text-gray-400 px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Account
                                    </li>
                                </Link>
                                <Link to={'/orders'}>
                                    <li className="text-gray-400 px-4 py-2 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        My Orders
                                    </li>
                                </Link>
                                {token &&
                                    <div>
                                        <li onClick={logoutHandler} className="text-gray-400 px-4 py-2 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Log Out
                                        </li>
                                    </div>}

                            </ul>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;