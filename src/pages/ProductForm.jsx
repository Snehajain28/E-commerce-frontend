import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {

    const [image, setImage] = useState(null);
    const [Data, setData] = useState({
        title: "",
        description: "",
        price: "",
        discountedprice: "",
    })

    const changeHandler = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        })
    }

    const imageChangeHandler = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", Data.title)
        formData.append("description", Data.description)
        formData.append("price", Data.price)
        formData.append('discountedprice', Data.discountedprice)
        formData.append('image', image)

        const res = await axios.post('http://localhost:5000/api/v1/product/add-product', formData, {
            headers: { "Content-type": "multipart/form-data" },
        });
console.log(res)
    }

    return (
        <div className="ml-5 mr-5 mt-4 flex flex-col justify-center items-center">
            <h1 className=" text-4xl text-center mb-4 mt-5">Create a Listing</h1>
            <form
                className="max-w-[1400px] mx-auto space-y-4 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="border border-gray-300 focus:outline-none rounded p-2"
                        value={Data.title}
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="description">
                        Description:
                    </label>
                    <textarea
                        name="description"
                        className="border border-gray-300 focus:outline-none rounded p-2 h-24 resize-none"
                        value={Data.description}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <input
                    type="file"
                    onChange={imageChangeHandler}
                    name="image"
                ></input>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="checkIn">
                            Price
                        </label>
                        <input
                            className="border border-gray-300 focus:outline-none rounded p-2"
                            type="number"
                            name="price"
                            value={Data.price}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="checkOut">
                            Discounted Price
                        </label>.

                        <input
                            className="border border-gray-300 focus:outline-none rounded p-2"
                            type="number"
                            name="discountedprice"
                            value={Data.discountedprice}
                            onChange={changeHandler}
                        />
                    </div>

                </div>

                <button
                    className="flex justify-center items-center bg-[#FF385C] text-white py-2 px-4 rounded-md cursor-pointer w-full"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
