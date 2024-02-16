import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passwordStrength } from 'check-password-strength'
import { BiChevronLeftCircle } from "react-icons/bi";
import { HiEye } from "react-icons/hi";
import { FaEyeSlash } from "react-icons/fa";


function Forgotpassword() {
    let nav = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        cnfrm: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [cnfrmPassword, setcnfrmPassword] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = passwordStrength(formData.password).value
        if (response !== "Strong") {
            toast.error("Weak Password");
            return;
        }
        if(formData.password !== formData.cnfrm)
        {
            toast.error("Password doesn't match");
            return;
        }
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/forgot-password`, { email: formData.email, password: formData.password })
            .then((response) => {
                console.log(response)
                toast.success("Password Update Successfully!");
                nav("/login");
            }).catch((error) => {
                toast.error(error);
            })

    }

    return (
        <div className="container  mx-auto max-w-md mt-16">
            <div onClick={() => { nav(-1) }}>
                <BiChevronLeftCircle size={30} className="ml-5" />
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        New Password
                    </label>
                    <div className="relative items-center flex">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type={showPassword ? "text" : "password"}
                            placeholder="New Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <div className=" ml-[14rem] text-[1.4rem] z-10 absolute"
                            onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <FaEyeSlash />: <HiEye /> 
                            }

                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Confirm Password
                    </label>
                    <div className="relative items-center flex">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type={cnfrmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            name="password"
                            value={formData.cnfrm}
                            onChange={handleChange}
                            required
                        />
                        <div className="ml-[14rem]  text-[1.4rem] z-10 absolute"
                            onClick={() => { setcnfrmPassword(!cnfrmPassword) }}>
                            {
                                cnfrmPassword ? <FaEyeSlash /> : <HiEye />
                            }

                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Password
                    </button>

                </div>
            </form>
        </div>
    );
}

export default Forgotpassword;