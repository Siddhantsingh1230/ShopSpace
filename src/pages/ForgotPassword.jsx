import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { forgotPassword } from "../api/auth.js";
import Spinner from "../components/Spinner.jsx";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
// img imports
import Confused from "../assets/images/confused.png";
import Toasts from "../app/Toasts.js";
import {  useNavigate } from "react-router-dom";

const ForgotPassword = ({ setProgress }) => {
  // Top Loading Bar dummy progress in future we will update the progress based on API calls succession or failure
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setProgress(100);
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => {
        window.removeEventListener("load", onPageLoad);
        setProgress(0);
      };
    }
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      if (email.trim().length > 0) {
        const data = await forgotPassword(email);
        Toasts("success", data.message);
        setLoading(false);
      } else {
        Toasts("error", "Invalid Email");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Toasts("error", error.response?.data.message || "Network Error");
      setLoading(false);
    }
  };
  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex justify-center relative items-center overflow-hidden md:bg-gradient-to-r from-gray-700 via-gray-900 to-black h-full w-full max-sm:flex-col  max-sm:p-5 max-sm:gap-10 max-sm:bg-black"
      >
        <div className="forgotPassImg relative w-2/4 h-full rounded-lg rounded-r-none flex justify-center items-center  max-sm:w-full max-sm:h-[270px] ">
          <img className="object-contain h-full w-full" src={Confused} alt="img" />
        </div>
        <div className="w-2/4 h-full rounded-lg rounded-l-none flex justify-center items-center flex-col max-sm:h-1/2 max-sm:w-full ">
          <div className="flex justify-center  flex-col w-full h-full">
            <h1 className=" text-5xl font-bold  leading-loose text-transparent  bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 max-sm:text-4xl max-sm:w-4/5 max-sm:mb-5">
              Forgot Password ?
            </h1>
            <p className="text-gray-400 w-1/2 text-sm mb-10 max-sm:w-full max-sm:text-xs max-sm:mb-5  ">
              Don't worry it happens.Please enter the registered email address
              associated with your account
            </p>
            <div className="input w-2/4 max-sm:w-full ">
              <div className="relative">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="astro@mail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full rounded-md pl-2 bg-transparent outline outline-2 outline-gray-500 focus:outline-blue-500  h-10 text-white pe-10 shadow-sm sm:text-sm"
                />

                <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div
              className="button-send w-2/4 my-10 active:opacity-80 max-sm:w-full"
              onClick={() => {
                if (!loading) {
                  handleClick();
                }
              }}
            >
              {!loading ? (
                <div className="relative flex  group w-2/4 max-sm:w-full">
                  <div className="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt w-full"></div>
                  <p
                   
                    className="relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none  focus:ring-gray-900"
                    role="button"
                  >
                    Send Mail
                  </p>
                </div>
              ) : (
                <div className="w-full scale-[200%] max-sm:scale-105 my-6">
                  <Spinner />
                </div>
              )}
            </div>
          </div>
        </div>
        <i onClick={()=>navigate("/")} className="ri-arrow-left-line absolute top-5 left-5 hover:text-white text-gray-500 transition-all md:scale-150 cursor-pointer"></i>
      </motion.div>
    </>
  );
};

export default ForgotPassword;
