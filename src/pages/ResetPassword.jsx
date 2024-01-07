import { useEffect } from "react";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import Toasts from "../app/Toasts.js";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";

const ResetPassword = ({ setProgress }) => {
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
  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full flex justify-center items-center h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black background-animate"
      >
        <div className="rounded-lg p-10 ">
          <h1 className="text-5xl max-sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black  font-bold mb-10">Reset Password</h1>
          <div className="relative my-5">
            <input
              type="email"
              id="UserEmail"
              placeholder="New Password"
              className="h-9 bg-transparent text-white pl-3 border border-gray-500 w-full rounded-md pe-10 shadow-sm sm:text-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              <i className="ri-git-repository-private-fill"></i>
            </span>
          </div>
          <div className="relative my-5">
            <input
              type="email"
              id="UserEmail"
              placeholder="Confirm Password"
              className="h-9 bg-transparent text-white pl-3  border border-gray-500  w-full rounded-md pe-10 shadow-sm sm:text-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              <i className="ri-git-repository-private-fill"></i>
            </span>
          </div>
          <div className="cursor-pointer hover:bg-transparent active:opacity-55 border hover:text-white transition-all p-2 rounded-lg bg-white flex justify-center items-center ">
            <p className="font-[Montserrat]">Change password</p>
          </div>
        </div>
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line absolute top-5 left-5 hover:text-white text-gray-500 transition-all text-xl cursor-pointer"
        ></i>
      </motion.div>
    </>
  );
};

export default ResetPassword;
