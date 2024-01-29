import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { useStateValues } from "../Utils/Provider";


function Cart() {

    const [totalamount, settoalamout] = useState(0);
    const [{ cartData }, dispatch] = useStateValues();

    useEffect((
        () => {
            let amt = 0;

            cartData?.map((item) => {
                let num = parseInt(item.price)
                amt = amt + num

            })
            settoalamout(amt)

        }
    ), [cartData])


    return (
        <div className="w-[100vw] h-[100vh] ">
            {cartData?.length > 0 ?
                (<div className="flex flex-col  justify-center items-center ">
                    <div className="font-bold h-[2rem]  w-full text-2xl fixed top-3 text-center underline ">
                        <p>Your Cart Summary</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-10">
                        <div className="w-[50vw] h-[80vh] mt-[5rem] overflow-y-auto">
                            {cartData?.map((item) => {
                             return(   <CartItem key={item.id} item={item}></CartItem>)

                })
                            }
                        </div>

                        <div className="flex flex-col p-10 mt-[10rem] h-full rounded-md items-center md:border  shadow-gray-400 shadow-md  gap-5 text-[1.3rem] font-semibold left-[25vw] xs:left-[90vw] fixed md:relative  md:left-0  bottom-10 ">

                            <p className="text-gray-700">Total Items : {cartData?.length}</p>

                            <p>Total Amount: ${totalamount}</p>
                            <button className="bg-green-700 md:w-[15rem] text-white font-semibold text-center md:px-1  px-7 py-3 rounded-md  mt-7" >
                                CheckOut Now
                            </button>

                        </div>

                    </div>
                </div>) :

                (
                    <div className="h-[100vh]  flex flex-col justify-center gap-10 items-center">
                        <div>
                            <h1 className="text-3xl font-bold"
                            >Your Cart is Empty</h1></div>


                        <Link to='/'> <button
                            className="bg-green-700 text-[1.5rem] text-white font-semibold p-1 px-7 py-3 rounded-md "
                        >Shop Now</button></Link>
                    </div>
                )

            }
        </div>)
}
export default Cart; 
