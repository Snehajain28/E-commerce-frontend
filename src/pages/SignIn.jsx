import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";
import { RxHome } from "react-icons/rx";
import { useStateValues } from "../Utils/Provider";

export default  function SignIn() {

    const navigate = useNavigate();
  
    const [formData, setformData] = useState({
        name: "",
        email: "",
       location: "",
       phoneNumber:"",
         password: "",
      })

 const changeHandler = (e) => {
    
       setformData({...formData,
            [e.target.name]:e.target.value});
       
 }
  
  const handleSubmit = async(e)=> {
   e.preventDefault();

   const res = await axios.post(`${process.env.BASE_URL}/api/v1/user/register`, {
    name:formData.name,
    email:formData.email,
    password:formData.password,
    phoneNumber:formData.phoneNumber,
    location:formData.location,
    
  });
  
  if (res && res.data.success) {
    toast.success(res.data && res.data.message);
    navigate("/login");
  }
  else {
    toast.error(res.data.message);
  }
        
}


    return ( <div className="signin ">
<RxHome  className=" mt-[6rem] mb-[-6rem] "
     size={40}/>
<div className="relative flex flex-col justify-center min-h-11/12 w-7/12 md:w-4/12 md:py-[5%] py-[10%] mx-auto ">
            <div className="w-full p-6 m-auto bg-transparent rounded-md shadow-xl shadow-rose-600/40  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
                    Sign UP
                </h1>
                <form onSubmit={handleSubmit}
                 className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                       >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="name"
                            onChange={changeHandler}
                            value={formData.name}
                            name="name"
                           
                        />
                    </div>
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
                            className="block w-full px-4 py-2 mt-2 text-indigo-700  border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="location"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="location"
                            value={formData.location}
                            onChange={changeHandler}
                            name="location"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Phone
                        </label>
                        <input
                            type="phoneNumber"
                            placeholder="Phone"
                            value={formData.phoneNumber}
                            onChange={changeHandler}
                            name="phoneNumber"
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
                            Create User
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-[13px] font-semibold text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to='/login'
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            </div>

    </div>)
 
}