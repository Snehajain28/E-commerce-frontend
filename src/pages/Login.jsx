import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useStateValues } from "../Utils/Provider";
import Spinner from "../components/Spinner";

export default function Login() {

    const navigate = useNavigate();
const [spinner,setSpinner] = useState(false)
   const [{user}, dispatch] = useStateValues();

console.log(user)

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
        setSpinner(true);
        e.preventDefault();
   await axios.post('https://e-commerce-6zry.onrender.com/api/v1/user/login', { email: formData.email, password: formData.password }
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
            setSpinner(false)
    }


    return (<div className=" w-[100vw] h-[100vh]">

<<<<<<< HEAD
        <div className="flex justify-center mt-[-5rem] items-center">
=======
        <div className="flex justify-center items-center">
>>>>>>> 74a18f4854260e4f044c867cd7cf45483bccf706

            <div className=" flex flex-col   w-11/12 md:w-[20rem]  m-auto ">
                <div className="w-full p-6   mt-[10rem] m-auto bg-transparent rounded-md shadow-xl shadow-gray-800/40  lg:max-w-xl">
                  
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
                                required
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
                                required
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full h-[3rem] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            {  !spinner ?("Login"):(<Spinner className='h-[0.2rem] w-[0.2rem]'/>)}
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