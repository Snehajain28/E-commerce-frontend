import React, { useState, useEffect } from 'react'
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

export default function Card({ item }) {

    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    const [Favclick, setFavClick] = useState(false)
    const [{ token, favorites, cartData }, dispatch] = useStateValues();


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

    const handleFavClick = () => {
        setFavClick(!Favclick)
        if (!token) {
            navigate('/login')
            return;
        }

        if (!Favclick) {
            let arr = favorites;
            arr?.push(item)
            dispatch({
                type: "SET_FAVORITES",
                favorites: arr,
            })
        }
        else {
            let i = favorites.indexOf(item)
            favorites.splice(i, 1)

            dispatch({
                type: "SET_FAVORITES",
                favorites: favorites,
            })
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }


    return (
        <div className="cursor-pointer border rounded-lg gap-2 flex flex-col items-center shadow-lg overflow-hidden w-[12rem] p-1">
            <div className="h-[12rem]  relative  w-[10rem]">
                <img onClick={handleClick} className="object-cover object-top w-full rounded-md h-full "
                    alt="" src={item.image}></img>

                <button onClick={handleFavClick}
                    className='absolute rounded-full bg-white  p-2  border-[1px]  border-black  top-0 right-0'>{Favclick ? (<BiSolidHeart className=' text-red-600' />) : (<BiHeart />)} </button>
                <button onClick={handleCart}
                    className='absolute rounded-full bg-white  text-[1rem] border-black border-[1px]  top-10 right-0'>{click ? (<p className=' px-[0.4rem] py-[0.1rem] text-green-600'>✅︎</p>) : (<p className='py-[0.12rem] px-[0.6rem]'>+</p>)}</button>

            </div>
            <h3 className="text-lg font-semibold text-gray-900">{((item.title).substring(0, 15))}</h3>

            <div className='flex justify-between mx-auto w-7/12'>
                <p className='text-green-400'>₹{item.discountedPrice}</p>
                <p className='line-through'>₹{item.price}</p>
            </div>

        </div>
    )
}
