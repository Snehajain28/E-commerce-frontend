import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function UserOrders() {

 
  const user = JSON.parse(localStorage.getItem("user"))
  let [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);


  const getOrders = useCallback(async () => {
    setLoading(true)
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/orders`,{ id: user._id }
    ).then((response) => {
      setOrders(response.data.allOrders)
      console.log(response)
    })
    setLoading(false)
  }, [user._id]);

  useEffect((() => {
    getOrders();
  }), [getOrders])

  return (
    <div >
      <Navbar />
      <div className='h-[100vh] w-[100vw] '>
        {
          loading ? (<div className='h-[100vh] w-[100vw] flex justify-center items-center'><Spinner /><p className='mt-[9rem] ml-2'>Loading...</p></div>) :
            (
              <div className='h-full w-full'>
                {
                  (orders?.length > 0) ?
                    (

                      <div className=''>
                        {console.log(orders)}
                        {orders.map((order) => {
                          return (
                            <div className=''>
                              <div className="mx-auto mt-12  max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                  <h1 className="text-2xl md:text-4xl my-5 font-bold tracking-tight text-gray-900">
                                    Order # {order._id}
                                  </h1>
                                  <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                                    Order Status : {"order.status"}
                                  </h3>
                                  <div className="">
                                    <ul className="-my-6 divide-y divide-gray-200">
                                      {order.items?.map((item) => (
                                        <li key={item._id} className="flex py-6">
                                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                              src={item.image}
                                              alt=''
                                              className="h-full w-full object-cover object-fit"
                                            />
                                          </div>
                                          <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                              <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                  <a href={"item.product.id"}>{"item.product.title"}</a>
                                                </h3>
                                                <p className="ml-4">${"item.product.discountPrice"}</p>
                                              </div>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {"item.product.brand"}
                                              </p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                              <div className="text-gray-500">
                                                <label
                                                  htmlFor="quantity"
                                                  className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Qty :{item.quantity}
                                                </label>
                                              </div>

                                              <div className="flex"></div>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$ {"order.totalAmount"}</p>
                                  </div>
                                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                                    <p>Total Items in Cart</p>
                                    <p>{order?.items?.length} items</p>
                                  </div>
                                  <p className="mt-0.5 text-sm text-gray-500">
                                    Shipping Address :
                                  </p>
                                  <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                                    <div className="flex gap-x-4">
                                      <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                          {order.address.name}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                          {order.address.address}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                          {order.address.zip}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                                      <p className="text-sm leading-6 text-gray-900">
                                        Phone: {order.address.phone}
                                      </p>
                                      <p className="text-sm leading-6 text-gray-500">
                                        {order.address.city}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>)
                        })
                        }
                      </div>)
                    : (
                      <div className='h-[100vh]'>
                        <div className="flex h-full flex-col lg:flex-row justify-center items-center gap-4 pb-20">
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

                      </div>
                    )
                }
              </div>)
        }
      </div>
    </div >
  );
}