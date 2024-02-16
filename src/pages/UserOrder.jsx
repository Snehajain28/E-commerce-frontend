import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateValues } from '../Utils/Provider'


export default function UserOrders() {


  const [{ user }, dispatch] = useStateValues();

  let [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);


  const getOrders = useCallback(async () => {
    setLoading(true)
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/orders`, { id: user._id }
    ).then((response) => {
      setOrders(response.data.allOrders)

    })
    setLoading(false)
  }, [user._id]);

  useEffect((() => {
    getOrders();
  }), [getOrders])

  return (
    <div >
      <Navbar />
      <div onClick={() => dispatch({
        type: "SET_HAMBURGER",
        hamburger: false,
      })}
        className='h-[100vh] w-[100vw] '>
        {
          loading ? (<div className='h-[100vh] w-[100vw] flex justify-center items-center'><Spinner /><p className='mt-[9rem] ml-2'>Loading...</p></div>) :
            (
              <div className='h-full w-full'>
                {
                  (orders?.length > 0) ?
                    (

                      <div className=''>
                       
                        {orders.map((order) => {
                          return (
                            <Link className='border-[2px] w-[90vw]  border-gray-400'
                             to={`/orders/${order._id}`}>
                              <div className="mx-auto mt-10  max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                  <h1 className="text-[1.2rem] md:text-4xl my-5 font-bold tracking-tight text-gray-900">
                                    Order # {order._id}
                                  </h1>
                                  <h3 className="text-[1rem] my-5 font-bold tracking-tight text-red-900">
                                    Order Status :<span className='bg-green-300 px-1 ml-2 rounded-lg'>{order.orderStatus}</span>
                                  </h3>
                                  <div className="">
                                    <ul className="-my-6 divide-y divide-gray-200">
                                      {order.items?.map((item) => (
                                        <li key={item._id} className="flex py-6">
                                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                              src={item.image}
                                              alt=''
                                              className="h-full w-full object-contain object-fit"
                                            />
                                          </div>
                                          <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                              <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3 className='font-semibold'>
                                                  <a href={"item.product.id"}>{item.title}</a>
                                                </h3>
                                                <p className="ml-4">${item.discountedPrice}</p>
                                              </div>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {item.brand}
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
                                    <p>$ {order.amount}</p>
                                  </div>
                                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                                    <p>Total Items in Cart</p>
                                    <p>{order?.items?.length}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>)
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