import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { RxHome } from "react-icons/rx";
import { useStateValues } from "../Utils/Provider";

export default function Login() {

    const navigate = useNavigate();

 
    const [{}, dispatch] = useStateValues();

    const [formData, setformData] = useState({
        email: "",
        password: "",
    })


    const changeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${process.env.BASE_URL}/api/v1/user/login`, { email: formData.email, password: formData.password }
        ).then((response) => {
            toast.success(response.data && response.data.message);
            dispatch({
                type: "SET_USER",
                user: response.data,
            });
            dispatch({
                type: "SET_TOKEN",
                token: response.data.token,
            });
            localStorage.setItem("user", JSON.stringify(response.data));

           navigate('/');
        })
            .catch((e) => {
                console.log(e)
            })
    }


    return (<div className=" w-[100vw] ">

        <div className="">
            <RxHome
                className=""
                size={40} />

            <div className="relative flex flex-col items-center justify-center min-h-11/12 w-11/12 md:w-4/12 mx-auto ">
                <div className="w-full p-6   mt-[10rem] m-auto bg-transparent rounded-md shadow-xl shadow-rose-800/40  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit}
                        className="mt-6">

                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                onChange={changeHandler}
                                value={formData.email}
                                name="email"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                value={formData.password}
                                onChange={changeHandler}
                                name="password"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-s font-semibold text-center text-gray-700">
                        {" "}
                        New User ?
                        {" "}
                        <Link to='/signin'
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>)

}
