import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useStateValues } from '../Utils/Provider';



const CardItem = ({ item , handleData }) => {

       const [{ cartData}, dispatch] = useStateValues();
       let [quantity, setQuantity] = useState(1);

     useEffect( (() => {
       item.quantity = 1
  
     }) ,[item])

     useEffect( (() => {
      handleData ();
    }) ,[quantity,handleData])

       return (
              <div className="w-full mb-2 border-b-[1px] ">
                     <div className="flex items-center gap-4 ml-2">
                            <ImCross
                                   onClick={
                                          () => {
                                                 let i = cartData.indexOf(item)
                                                 cartData.splice(i, 1)

                                                 dispatch({
                                                        type: "SET_CART_DATA",
                                                        cartData: cartData,
                                                 })
                                                 localStorage.setItem("cart", JSON.stringify(cartData));

                                          }}
                                   className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                            />
                            <img className="w-[6rem] rounded-md h-[10rem] object-contain" src={item.image} alt="productImage" />
                         
                         <div className="w-full justify-between">
                         <h1 className="font-titleFont font-semibold">{(item.title).substring(10)}</h1>
                         <div className="flex border w-[5rem]  pointer-cursor items-center gap-3 text-lg">
                                   < span
                                          onClick={() => {
                                                 if ((quantity - 1) > 0) {
                                                        setQuantity(--quantity)
                                                        item.quantity = quantity
                                                 }
                                          }}
                                          className="w-6 h-6 px-[2px] bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300  border-gray-300 hover:border-gray-300"
                                   >
                                          -
                                   </span>

                                   <p>{quantity}</p>
                                   <span
                                          onClick={() => {
                                                 setQuantity(++quantity)
                                                 item.quantity = quantity
                                         }}
                                          className="w-6 h-6 px-[1px] bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300  border-gray-300 hover:border-gray-300"
                                   >
                                          +
                                   </span>
                            </div>
                         </div>
                     </div>

                     <div className=" flex items-center justify-between pb-42 px-4 mdl:px-0 gap-6 mdl:gap-0">
                            <div className="flex w-1/3 items-center text-lg font-semibold">
                                   ${item.price}
                            </div>

                            <div className="w-1/3 flex flex-col items-center  font-bold text-lg">
                                   <p className="text-gray-500 text-[0.8rem] font-semibold">SubTotal:</p>
                                   <p>${item.quantity * item.price}</p>
                            </div>
                     </div>
              </div>
       );
};

export default CardItem;