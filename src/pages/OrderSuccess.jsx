import React from "react";
import shoppingBag from "../assets/images/shoppingBag.png";
import ribbonfalling from "../assets/images/ribbonfalling.gif";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <>
      <div className="flex bg-gray-100 w-full h-full items-center justify-center z-10" >
        
        <div className="flex flex-col h-[475px] w-[800px] bg-white rounded-xl items-center justify-center max-sm:h-full max-sm:w-full max-lg:w-[600px]" >
          <img className="flex w-56" src={shoppingBag} alt="img" />
          <div className="flex flex-col justify-center items-center gap-4 text-sm">
            <p className="text-4xl font-bold">Success!!</p>
            <div className="flex flex-col items-center text-center px-36 max-sm:px-6">
            <p>Your Order has been placed successfully.</p>
            <p >
              We will send you a shipping confirmation email as soon as your order
              ships.You can visit <Link to={"/orders"} className="font-bold hover:underline text-purple-700 hover:text-purple-900">My Orders</Link> to check order details.
            </p>
            </div>
            <Link to={"/"} className=" border-2 z-10 border-purple-800 text-purple-800 rounded-lg p-3 m-4 font-semibold hover:border-4 hover:border-purple-800 hover:fony  cursor-pointer text-md">Continue Shopping</Link>
          </div>
        </div>
      </div>
      <div className=" h-1/2 z-50 w-full absolute" style={{backgroundImage: `url(${ribbonfalling})`, animation: "longfade 10s ease infinite alternate "}}> </div>
    </>
  );
};

export default OrderSuccess;
