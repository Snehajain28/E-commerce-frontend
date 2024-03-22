import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (
    <div className="max-w-container mx-auto px-4">
      <Navbar/>
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Our Business</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <Link to="/">
          <button className="w-52 h-10 bg-red-600 text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
        <Footer/>
      </div>
    </div>
  );
};

export default About;