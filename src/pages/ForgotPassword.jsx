import { useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader.jsx";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
// img imports
import Confused from "../assets/images/confused.png";

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
  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex justify-center items-center overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black h-full w-full"
      >
        <div className="w-2/4 h-full rounded-lg rounded-r-none flex justify-center items-center overflow-hidden">
          <img src={Confused} alt="img" />
        </div>
        <div className="w-2/4 h-full rounded-lg rounded-l-none flex justify-center items-center flex-col">
          <div className="flex justify-center  flex-col w-full h-full">
            <h1 className="text-white text-5xl font-bold  leading-loose text-transparent  bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Forgot Password
            </h1>
            <p className="text-gray-200 w-1/2 text-sm mb-10 ">
              Don't worry it happens.Please enter the registered email address
              associated with your account
            </p>
            <div className="input w-2/4">
              <label
                for="UserEmail"
                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  class="peer h-8 w-full text-white border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
            <div className="button w-2/4 my-10">
              <div className="relative flex  group w-2/4">
                <div className="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt w-full"></div>
                <a
                  href="#"
                  title="Get quote now"
                  className="relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Send Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ForgotPassword;
