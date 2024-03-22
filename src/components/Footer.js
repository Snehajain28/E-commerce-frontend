import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import logo from '../assests/logo2.png'
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="w-[100vw] bg-[#F5F5F3] py-5">
      <Link className='flex w-full justify-end md:pr-[5rem] gap-2 items-center' to="/">
        <img className="w-[3.2rem] h-[3.2rem] rounded-[1rem] object-fit"
          src={logo} alt='' />
        <p className='font-extrabold text-[1rem] md:text-[1.2rem]'>Go Cart </p>
      </Link>
      <p className="text-base mt-5 w-[80vw] md:w-[14rem] lg:ml-[7rem] xl:ml-[14rem] md:-mt-[2rem] md:mb-[2.5rem]  md:ml-[2rem]  text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
        ab ullam, numquam nesciunt in.
      </p>
      <div className="flex flex-col w-[70vw] mx-auto xs:w-[80vw] gap-5 mt-5">
        <div className="flex gap-2 justify-center flex-wrap w-full "> 
           <p className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
          Accesories
        </p>
          <p className=" text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Clothes
          </p>
          <p className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Electronics
          </p>
          <p className="font-titleFont  text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Home appliances
          </p>
          <p className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            New Arrivals
          </p>
        </div>
        <ul className="flex gap-5 w-full justify-center flex-wrap">
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Profile
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Orders
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Addresses
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Account Details
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Payment Options
          </li>
        </ul>
      </div>


      <ul className="flex items-center my-3 justify-center py-2 w-full gap-4">
        <a
          href="https://github.com/Snehajain28"
          target="_blank"
          rel="noreferrer"
        >
          <li className="w-7 h-7 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
            <FaGithub size={25} />
          </li>
        </a>
        <a
          href="https://github.com/Snehajain28"
          target="_blank"
          rel="noreferrer"
        >
          <li className="w-7 h-7 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
            <FaInstagram size={20} />
          </li>
        </a>
        <a
          href="https://github.com/Snehajain28"
          target="_blank"
          rel="noreferrer"
        >
          <li className="w-7 h-7 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
            <CiMail size={25} />

          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="w-7 h-7 text-gray-900 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
            <FaLinkedin size={20} />
          </li>
        </a>
      </ul>

      <div className="col-span-2 flex flex-col items-center w-full px-4">
        <p className="text-center mb-4">
          A at pellentesque et mattis porta enim elementum.
        </p>

        <ImGit
          className={'w-[80%] lg:w-[60%] mx-auto '}
          src=""
        />
      </div>

    </div>

  );
};

export default Footer;