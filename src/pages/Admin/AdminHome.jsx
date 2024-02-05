import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCircle } from "react-icons/bi";


const AdminOrders = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token")


  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/all-orders`, { token: token });
      if (response?.data?.data) {
        setOrders(response.data.orders);
      }
    }
    catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [token]);


  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <>

      <main className="w-full px-4 sm:px-10 py-4 ">

        <div className="flex gap-3.5 w-full ">
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col gap-3 w-full pb-5 overflow-hidden">
              <form className="flex items-center justify-between mx-auto w-[100%] sm:w-10/12 bg-white border rounded mb-2 hover:shadow-md"
              >
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  name="search"
                  placeholder="Search your orders here"
                  className="p-2 text-sm outline-none flex-1 rounded-l "
                />
                <button
                  type="submit"
                  className="h-full text-sm px-1 sm:px-4 py-2.5 text-white bg-primaryBlue hover:bg-blue-600 rounded-r flex items-center gap-1"
                >
                  <FaSearch sx={{ fontSize: "20px" }} />
                  <p className="text-[10px] sm:text-[14px]">
                    Search
                  </p>
                </button>
              </form>
              {orders?.length === 0 && (
                <div className="flex items-center flex-col gap-2 p-10 bg-white rounded-sm ">
                  <img
                    src="https://rukminim1.flixcart.com/www/100/100/promos/23/08/2020/c5f14d2a-2431-4a36-b6cb-8b5b5e283d4f.png"
                    alt=""
                  />
                  <span className="text-lg font-medium">
                    Sorry, no orders found
                  </span>
                  <p>Get some orders first</p>
                </div>
              )}
              {orders
                ?.map((order) => {
                  return order.items.map((item, index) => (
                    <Link
                      to={`./order_details/${item._id}`}
                      className="flex flex-col sm:flex-row items-start bg-white border rounded gap-5 px-4 sm:px-8 py-5 hover:shadow-lg mx-2 sm:mx-10"
                    >
                      <div className="w-full sm:w-32 h-20">
                        <img
                          draggable="false"
                          className="h-full w-full object-contain"
                          src={item?.image}
                          alt=''
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between w-full">
                        <div className="flex flex-col w-[300px] gap-1 overflow-hidden">
                          <p className="text-sm">
                            {item?.name.length > 40
                              ? `${item?.name.substring(0, 40)}...`
                              : item?.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Quantity: {item?.quantity}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                          <p className="text-sm w-[100px]">
                            ₹{item?.discountPrice.toLocaleString()}
                          </p>

                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium flex items-center gap-1 w-[250px]">
                              {order.orderStatus === "Shipped" ? (
                                <>
                                  <span className="text-orange pb-0.5">
                                    <BiCircle sx={{ fontSize: "14px" }} />
                                  </span>
                                  Shipped
                                </>
                              ) : order.orderStatus === "Delivered" ? (
                                <>
                                  <span className="text-primaryGreen pb-0.5">
                                    <BiCircle sx={{ fontSize: "14px" }} />
                                  </span>
                                  Delivered
                                </>
                              ) : order.orderStatus === "Out For Delivery" ? (
                                <>
                                  <span className="text-primaryGreen pb-0.5">
                                    <BiCircle sx={{ fontSize: "14px" }} />
                                  </span>
                                  Out For Delivery
                                </>
                              ) : (
                                <>
                                  <span className="text-primaryBlue pb-0.5">
                                    <BiCircle sx={{ fontSize: "14px" }} />
                                  </span>
                                  Order received on {"h"}
                                </>
                              )}
                            </p>
                            {order.orderStatus === "Delivered" ? (
                              <p className="text-xs ml-1">
                                Item successfully delivered
                              </p>
                            ) : order.orderStatus === "Out For Delivery" ? (
                              <p className="text-xs ml-1">
                                Product is out for delivery
                              </p>
                            ) : order.orderStatus === "Shipped" ? (
                              <p className="text-xs ml-1">
                                You have processed this order
                              </p>
                            ) : (
                              <p className="text-xs ml-1">Order received</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ));
                })
              }
            </div>
          )}
        </div>

      </main>
    </>
  );
};

export default AdminOrders;