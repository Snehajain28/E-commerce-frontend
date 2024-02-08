import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import Navbar from '../components/Navbar'

const OrderSuccess = () => {

    const [order, setOrder] = useState(null);
    const { id } = useParams();

    useEffect((() => {
        async function getDetails() {
            await axios.post('http://localhost:5000/api/v1/user/order-details', { id })
                .then((response) => {
                    console.log(response.data.data)
                    setOrder(response.data.data);
                })
        }
        getDetails();
    }), [id])

    return (
        <div>
            <Navbar />
            <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
                    <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
                        <div>
                            <p className="text-base leading-none mt-4 text-indigo-800 font-extrabold mb-2">
                                THANK YOU!
                            </p>
                            <h3 className="text-2xl xl:text-4xl leading-7 xl:leading-9 w-full font-bold  md:text-left text-gray-800">It's on the way!</h3>
                            <p className="text-sm leading-none mt-4 text-gray-800 font-semibold">
                                Your order  has been shipped and will be with you soon.
                            </p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-3xl xl:text-4xl leading-7 xl:leading-9 w-full font-bold  md:text-left text-gray-800">Payment</h3>
                            <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                Your Order ID is {id}.
                            </p>
                        </div>
                        <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                            Order Payment Status: <span className=" text-red-700 bg-red-100 rounded-lg px-2 py-1">Not Paid</span>
                        </p>
                        {order?.orderStatus === "deliverd" ?
                            <div> <p className="text-base leading-none mt-4 text-gray-800 font-semibold">
                                Order Delivery Status: <span className="text-green-700 bg-green-100 rounded-lg px-2 py-1">Delivered on {""}</span>
                            </p>
                                <button type="button" className="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Order Delivered Successfully</button>
                            </div>
                            :
                            <p className="text-base leading-none mt-6 text-gray-800 font-semibold">
                                Order Delivery Status: <span className=" text-red-700 bg-red-100 rounded-lg px-2 py-1">Not Delivered</span>
                            </p>
                        }

                        <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                            {
                                order?.items?.map(item => (
                                    <div key={item?._id} className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                                        <div className="w-40 md:w-32">
                                            <img className="" src={item.image} alt="" />
                                        </div>
                                        <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                            <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                                <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">{item.brand}</h3>
                                                <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                                    <p className="text-sm leading-none text-gray-600">
                                                        Category: <span className="text-gray-800">{item?.category}</span>
                                                    </p>
                                                    <p className="text-sm leading-none text-gray-600">
                                                        Quantity: <span className="text-gray-800">{item.quantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${item.quantity * item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                            <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Billing Address</p>
                                    <p className="text-sm leading-5 text-gray-600">order?.address</p>
                                </div>
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Shipping Address</p>
                                    <p className="text-sm leading-5 text-gray-600">
                                        <span className="font-bold">Name:</span> {order?.address.name}
                                    </p>
                                    <a href={`mailto:order.user.email`} className="text-sm leading-5 text-gray-600 underline">
                                        <span className="font-bold">Email:</span> {order?.address.email}
                                    </a>
                                    <p className="text-sm leading-5 text-gray-600">
                                        {order?.address.address}
                                    </p>
                                </div>
                                <div className="flex jusitfy-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4  text-gray-800">Shipping Method</p>
                                    <p className="text-sm leading-5 text-gray-600"> Takes up to 3-4 working days</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">

                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Payment Method:</p>
                                        <p className="text-base leading-4 text-gray-600">{"Cash"}</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Quantity</p>
                                        <p className="text-base leading-4 text-gray-600">{order?.items.length}</p>
                                    </div>
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">${order?.amount}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${order?.amount}</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {order?.isPaid &&
                <div>
                    <img src="/gif/celebration.gif" alt="" className="absolute bottom-0 left-0 h-[30vh] " />
                    <img src="/gif/celebration.gif" alt="" className="absolute bottom-0 right-0 h-[30vh]  " />
                </div>
            }
        </div>)
}

export default OrderSuccess