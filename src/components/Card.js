import React, { useState } from 'react'
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';

export default function Card({ item }) {

    const navigate = useNavigate();
    const [click, setClick] = useState(true)
    const [{ user, count }, dispatch] = useStateValues();

    const handleClick = () => {

        if (user) {
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
        if (!user) {
            navigate('/')
            return;
        }
        let cnt;
        if (click) {
            cnt = count + 1
        }
        else {
            cnt = count - 1
        }
        dispatch({
            type: "SET_COUNT",
            count: cnt,
        });

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
                    <p className='text-green-400'>{item.discountedPrice}</p>
                    <p className='line-through'>{item.price}</p>

                </div>
            </div>
            <button onClick={handleCart} className='w-11/12 mx-auto rounded-md h-[2rem] text-white font-semibold  bg-blue-500 my-4 '>
                {click ? ("Add to Cart") : ("Remove from Cart")}
            </button>
        </div>
    )
}
