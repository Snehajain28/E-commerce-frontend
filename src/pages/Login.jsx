import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useStateValues } from "../Utils/Provider";
import Spinner from "../components/Spinner";
import { GoogleLogin } from '@react-oauth/google';
import { TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";



export default function Login() {

    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false)
    const [show, setShow] = useState(false)
    const [{ user }, dispatch] = useStateValues();
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
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/login`, { email: formData.email, password: formData.password }
        ).then((response) => {

            toast.success("Logged in");
            dispatch({
                type: "SET_TOKEN",
                token: response.data.token,
            });
            dispatch({
                type: "SET_USER",
                user: response.data.user,
            });
            if (response.data.user.role === 1) {
                dispatch({
                    type: "SET_ROLE",
                    role: "admin",
                })
            }
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            console.log(user)
            navigate('/');

        })
            .catch((e) => {
                toast.error(e.response.data.message);
            })
        setSpinner(false)
    }

    return (
        <div className='h-[100vh]  '>
            <div className=" flex xl:w-[20vw] w-[90vw]  xs:w-[60vw] md:w-[40vw] lg:w-[30vw] mx-auto  flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2 ">
                                <input
                                    id="email"
                                    required
                                    placeholder="email"
                                    onChange={changeHandler}
                                    value={formData.email}
                                    name="email"
                                    type="email"
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                        to="/forgot-password"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    placeholder="password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    name="password"
                                    required
                                    type={show ? "text" : "password"}
                                    className="block w-full  px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className='mt-[-1.7rem] xs:ml-[45vw] lg:ml-[22vw]  ml-[64vw]' onClick={() => { setShow(!show) }}>
                                    {show ? <TbEyeClosed size={20} /> : <FaEye size={20} />}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <button className="w-full h-[3rem] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                    {!spinner ? ("Login") : (<Spinner className='h-[0.2rem] w-[0.2rem]' />)}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex gap-2 items-center text-gray-400 text-[1rem] my-5">
                        <hr className="w-[10rem] h-[2px] bg-gray-300" />
                        or
                        <hr className="w-[10rem] h-[2px] bg-gray-300" />
                    </div>
                    <div className="">
                        <GoogleLogin
                            text="signin_with"
                            onSuccess={
                                async (credentialResponse) => {

                                    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/login`, { token: credentialResponse.credential }
                                    ).then((response) => {
                                        toast.success(response.data.message);
                                        dispatch({
                                            type: "SET_TOKEN",
                                            token: response.data.token,
                                        });
                                        dispatch({
                                            type: "SET_USER",
                                            user: response.data.user,
                                        });
                                        if (response.data.user.role === 1) {
                                            dispatch({
                                                type: "SET_ROLE",
                                                role: "admin",
                                            })
                                        }
                                        localStorage.setItem("token", JSON.stringify(response.data.token));
                                        localStorage.setItem("user", JSON.stringify(response.data.user));

                                        navigate('/');

                                    }).catch((e) => {
                                        toast.error("fail")
                                        console.log(e)
                                    })
                                }
                            }
                            onError={() => {
                                console.log('Login Failed');
                            }}
                           
                        />
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link
                            to="/signin"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Create an Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
