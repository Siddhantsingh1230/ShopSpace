import { useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";

const Products = ({ setProgress }) => {
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
        className="w-full"
      >
        s
      </motion.div>
    </>
  );
};

export default Products;
