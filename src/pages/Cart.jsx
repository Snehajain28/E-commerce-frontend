import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useStateValues } from "../Utils/Provider";
import Navbar from "../components/Navbar";


const Cart = () => {

  const [Amt, setAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [{ cartData }, dispatch] = useStateValues();


  const handleData = useCallback(async () => {
    let price = 0;
    cartData?.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setAmt(price);
  }, [cartData]);

  useEffect((() => {
    handleData();
  }), [handleData])
  
  useEffect(() => {
    if (Amt <= 200) {
      setShippingCharge(30);
    } else if (Amt <= 400) {
      setShippingCharge(25);
    } else if (Amt > 401) {
      setShippingCharge(20);
    }
  }, [Amt]);

  return (
    <div>
      <Navbar />
      <div className="max-w-container h-[100vh] mt-[10rem] mx-auto px-4">
        {cartData?.length > 0 ? (
          <div className="pb-20">
            <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
              <h2 className="col-span-2">Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Sub Total</h2>
            </div>
            <div className="mt-[5rem]">
              {cartData.map((item, index) => (
                <div key={index}>
                  <CartItem item={item} handleData={handleData} />
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                dispatch({
                  type: "SET_CART_DATA",
                  cartData: [],
                })
              }}
              className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
            >
              Reset cart
            </button>

            <div className="flex flex-col md:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
              <div className="flex items-center gap-4">
                <input
                  className="w-44 md:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                  type="text"
                  placeholder="Coupon Number"
                />
                <p className="text-sm md:text-base font-semibold">
                  Apply Coupon
                </p>
              </div>
              <p className="text-lg font-semibold">Update Cart</p>
            </div>
            <div className="max-w-7xl gap-4 flex justify-end mt-4">
              <div className="w-96 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${Amt}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${shippingCharge}
                    </span>
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      ${Amt + shippingCharge}
                    </span>
                  </p>
                </div>
                <div onClick={() => {
                  dispatch({
                    type: "SET_TOTAL_AMOUNT",
                    totalAmt: Amt,
                  })
                }
                }
                  className="flex justify-end">
                  <Link to="/check-out">
                    <button className="w-52 h-10 bg-red-600 text-white hover:bg-black duration-300">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex h-full flex-col md:flex-row justify-center items-center gap-4 pb-20">
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src="https://www.adasglobal.com/img/empty-cart.png"
                alt=""
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
              <h1 className="font-titleFont text-xl font-bold uppercase">
                Your Cart feels lonely.
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart lives to serve. Give it purpose - fill it with
                books, electronics, videos, etc. and make it happy.
              </p>
              <Link to="/">
                <button className="bg-red-600 rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;