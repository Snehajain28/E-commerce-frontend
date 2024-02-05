import React from "react";
import { Link } from "react-router-dom";


const Pagenotfound = () => {
  return (
     <div className="h-[100vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-xl text-bold">404</h1>
       <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="bg-green-500 text-white fony-semibold py-2 px-3 rounded-md">
          Go Back
        </Link>
      </div>
   
  );
};

export default Pagenotfound;