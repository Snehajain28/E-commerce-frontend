import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";


const AllProducts = () => {

  let nav = useNavigate()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/all_products`);
        setProducts(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        error.response?.status === 500 &&
          toast.error(
            "Something went wrong! Please try after sometime."
          );
      }
    };
    fetchData();
  }, []);
  const updateDeletedProduct = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product._id !== id);
    });
  };

  console.log(products)
  return (
    <div className="relative p-2 w-full h-full">
      <div title="All Products -  Seller Flipkart" />

      {loading ? (
        <Spinner />
      ) : (
        <div className="h-full">
          <div className="flex justify-between items-center p-2">
            <h1 className="text-[16px] font-[600] uppercase">
              products
            </h1>
            <Link
              to="/product/add-product"
              className="py-2 px-4 rounded shadow font-[500] text-white bg-blue-600 hover:shadow-lg"
            >
              New Product
            </Link>
          </div>
          <table className="border-2 md:w-[90vw] text-center mx-auto shadow-xl w-full">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border">No.</th>
                <th className="border">Image</th>
                <th className="border">Name</th>
                <th className="border">Desc.</th>
                <th className="border">Cat.</th>
                <th className="border">Pr.</th>
                <th className="border">Qty</th>
                <th className="border">Acts</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, i) => {
                return (
                  <tr key={i} className="border-2">
                    <td className="border-2">{i + 1}</td>
                    <td className="border-2">
                      {console.log(`${process.env.REACT_APP_API_ENDPOINT}/images/${item.imageFile}`)}
                      <img src={`${process.env.REACT_APP_API_ENDPOINT}/images/${item.imageFile}`} alt="" className="w-12 mx-auto" />
                      <img src={item.image} alt="" className="w-12 mx-auto" />
                    </td>
                    <td className="border-2">{item.tilte}</td>
                    <td className="border-2">{(item?.des?.slice(0, 4))}.</td>
                    <td className="border-2">{item.price}</td>
                    <td className="border-2">{item.quantity}</td>
                    <td className="flex  justify-center gap-2 mt-[5%] items-center text-lg">
                      <td className=" cursor-pointer hover:scale-110 duration-100">
                        <VscEdit onClick={() => nav("/product/" + item._id)} />
                      </td>
                      <td className=" cursor-pointer hover:scale-110 duration-100">
                        <VscTrash onClick={() => updateDeletedProduct(item._id)} />
                      </td>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      )}
    </div>
  );
};

export default AllProducts;