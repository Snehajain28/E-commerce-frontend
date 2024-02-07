import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [formData, setformData] = useState({
        name: "",
        des: "",
        price: "",
        category: "",
        qty: 1,
        discountedprice: "",
    });
    const navigate=useNavigate();

    const [image, setimg] = useState(null);

    const changeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const imageChangeHandler = (e) => {
        setimg(e.target.files[0])
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const productData = new FormData()
        productData.append("name", formData.name)
        productData.append("des", formData.des)
        productData.append("discountedprice", formData.discountedprice)
        productData.append("price", formData.price)
        productData.append("qty", formData.qty)
        productData.append("image", image)

        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/product/add-product`, productData)
        if (res.status === 200) {
            toast.success("Product Created")
navigate('/all-products')
           setformData('');

        } else {
            toast.error()
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="md:w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <h1 className="text-xl mb-4  text-center font-bold">Add Product</h1>
                <div className="mb-4">
                    <TextField
                        label="Name"
                        variant="outlined"
                        size="small"
                        required
                        name="name"
                        value={formData.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-4">

                    <TextField
                        label="Description"
                        multiline
                        rows={2}
                        required
                        variant="outlined"
                        size="small"
                        name="des"
                        value={formData.des}
                        onChange={changeHandler}
                    />

                </div>
                <div className="mb-4">
                    <TextField
                        label="Discount Price"
                        type="number"
                        variant="outlined"
                        size="small"
                        required
                        name="discountedprice"
                        value={formData.discountedprice}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        label="Price"
                        type="number"
                        variant="outlined"
                        size="small"
                        required
                        name="price"
                        value={formData.price}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-4">
                <TextField
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        size="small"
                        required
                        name="qty"
                        value={formData.qty}
                        onChange={changeHandler}
                    />
                </div>


                <div className="mb-4">
                <label className="rounded font-medium bg-blue-500 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
                            <input
                                type="file"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={imageChangeHandler}
                                className="hidden"
                            />
                            Choose Files
                        </label>
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                        className="bg-orange-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;