import { useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader.jsx";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
// img imports
import Confused from "../assets/images/confused.png"

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
        <div className="w-2/4 h-full rounded-lg rounded-l-none">
            <h1>Forgot Password</h1>
            <p>Don't worry it happens.Please enter the registered email address associated with your account</p>
        </div>
      </motion.div>
    </>
  );
};

export default ForgotPassword;
