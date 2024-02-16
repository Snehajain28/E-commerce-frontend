import React, { useState, useEffect } from 'react'
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';

export default function Card({ item }) {

    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    const [{ token, cartData }, dispatch] = useStateValues();

    useEffect((() => {

        if (cartData?.length > 0) {
            cartData.forEach(element => {

                if (element.image === item.image) {
                    setClick(true)
                }
            });
        }
    }), [cartData, item.image])

    const handleClick = () => {

        if (token) {
            dispatch({
                type: "SET_PRODUCT_DETAILS",
                productDetails: item,
            })
            navigate('/product-details')

        }
        else {
            navigate('/login')
        }

    }

    const handleCart = () => {
        setClick(!click)
        if (!token) {
            navigate('/login')
            return;
        }

        if (!click) {

            let arr = cartData;

            arr?.push(item)
            dispatch({
                type: "SET_CART_DATA",
                cartData: arr,
            })

        }
        else {

            let i = cartData.indexOf(item)
            cartData.splice(i, 1)

            dispatch({
                type: "SET_CART_DATA",
                cartData: cartData,
            })
        }

        localStorage.setItem("cart", JSON.stringify(cartData));

    }

    return (
        <div className=" cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-[15rem]  mx-3">
            <div onClick={handleClick}>
                <div className="h-[15rem] w-[10rem]"
                >
                    <img className="object-cover object-top w-full rounded-md h-full "
                        alt="" src={item.image}></img>

                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{((item.title).substring(0, 15))}</h3>

                </div>
                <div className='flex justify-between mx-auto w-10/12'>
                    <p className='line-through'>₹{item.price}</p>
                    <p className='text-green-400'>₹{item.discountedPrice}</p>
                </div>
            </div>
            <button onClick={handleCart} className='w-11/12 mx-auto rounded-md h-[2rem] text-white font-semibold  bg-blue-500 my-4 '>
                {click ? ("Remove from Cart") : ("Add to Cart")}
            </button>
        </div>
    )
}
