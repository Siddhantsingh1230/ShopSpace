import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";
import CanMask from "../assets/images/bottle.png";
import label1 from "../assets/images/label1.png";
import label2 from "../assets/images/label2.png";
import label3 from "../assets/images/label3.png";
import fruit1 from "../assets/images/fruit1.png";
import fruit2 from "../assets/images/fruit2.png";
import fruit3 from "../assets/images/fruit3.png";

const Products = ({ setProgress }) => {
  const [current, setCurrent] = useState(0);
  const containerControls = useAnimation();
  const fruitsControls = useAnimation();

  // Top Loading Bar dummy progress in future we will update the progress based on API calls succession or failure
  useEffect(() => {
    // callback function to call when the event triggers
    const onPageLoad = () => {
      setProgress(100);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("load", onPageLoad);
        setProgress(0);
      };
    }
  }, []);

  const handleSlide = (direction) => {
    const newCurrent = current + direction;
    if (newCurrent >= 0 && newCurrent <= 2) {
      setCurrent(newCurrent);
      containerControls.start({
        x: -newCurrent * 100 + "%",
        transition: { duration: 0.55, ease: "circInOut" },
      });
    }
  };
  const handleFruitSlide = (direction) => {
    const newCurrent = current + direction;
    if (newCurrent >= 0 && newCurrent <= 2) {
      setCurrent(newCurrent);
      fruitsControls.start({
        y: -newCurrent * 100 + "%",
        transition: { duration: 0.55, ease: "circInOut" },
      });
    }
  };

  // Scroll To view  for products section
  const targetRef = useRef(null);
  const scrollToProducts = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full h-full relative "
      >
        <div className="AnimatedHero w-full h-full relative overflow-hidden">
          {/* Background transitions */}
          <motion.div
            initial={{ x: 0 }}
            className="w-full h-full flex "
            animate={containerControls}
          >
            <div className="w-full h-full flex-grow-0 flex-shrink-0 basis-auto flex justify-center items-center  bg-[#B6CD87]">
              <h1 className="text-white font-bold text-[15rem] opacity-85 uppercase font-[GilroyB] max-sm:text-8xl">
                Revive
              </h1>
            </div>
            <div className="w-full h-full flex-grow-0 flex-shrink-0 basis-auto  bg-[#FFB2B2] flex justify-center items-center">
              <h1 className="text-white font-bold text-[15rem] opacity-85 uppercase font-[GilroyB] max-sm:text-8xl">
                REFUEL
              </h1>
            </div>
            <div className="w-full h-full flex-grow-0 flex-shrink-0 basis-auto  bg-[#C1BFF2] flex justify-center items-center">
              <h1 className="text-white font-bold text-[15rem] opacity-85 uppercase font-[GilroyB] max-sm:text-8xl">
                Renew
              </h1>
            </div>
          </motion.div>

          {/* Mask Transitions */}
          <div className="maskWrapper absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 scale-75 max-sm:scale-50">
            <div className="maskContainer  ">
              <img
                className="canmask  object-cover select-none"
                src={CanMask}
                alt="bottle mask"
              />
              <motion.div
                initial={{ x: 0 }}
                animate={containerControls}
                className="flex w-full absolute inset-0 mix-blend-multiply"
              >
                <div className="w-full flex-grow-0 flex-shrink-0 basis-auto">
                  <img
                    className="label-image w-full"
                    src={label1}
                    alt="Label Image"
                  />
                </div>
                <div className="w-full flex-grow-0 flex-shrink-0 basis-auto">
                  <img
                    className="label-image w-full"
                    src={label2}
                    alt="Label Image"
                  />
                </div>
                <div className="w-full flex-grow-0 flex-shrink-0 basis-auto">
                  <img
                    className="label-image w-full"
                    src={label3}
                    alt="Label Image"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Fruit Transitions */}
          <motion.div
            initial={{ y: 0 }}
            animate={fruitsControls}
            className="fruitsSlider absolute top-0 left-0 h-screen w-screen flex flex-col "
          >
            <div
              className="h-full bg-no-repeat bg-cover max-sm:bg-contain  flex-grow-0 flex-shrink-0 basis-auto"
              style={{
                backgroundImage: `url(${fruit1})`,
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-full bg-no-repeat bg-cover max-sm:bg-contain flex-grow-0 flex-shrink-0 basis-auto"
              style={{
                backgroundImage: `url(${fruit2})`,
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-full bg-no-repeat bg-cover max-sm:bg-contain flex-grow-0 flex-shrink-0 basis-auto"
              style={{
                backgroundImage: `url(${fruit3})`,
                backgroundPosition: "center",
              }}
            ></div>
          </motion.div>

          {/* Controll buttons */}
          <div
            onClick={() => {
              handleSlide(1);
              handleFruitSlide(1);
            }}
            className="absolute  flex justify-center items-center top-2/4 left-10 -translate-y-2/4  max-sm:left-0"
          >
            <motion.i
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-5xl  cursor-pointer text-white ri-arrow-left-s-line max-sm:text-gray-400"
            ></motion.i>
          </div>
          <div
            onClick={() => {
              handleSlide(-1);
              handleFruitSlide(-1);
            }}
            className="absolute  flex justify-center items-center top-2/4 right-10 -translate-y-2/4 max-sm:right-0"
          >
            <motion.i
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-5xl  cursor-pointer text-white ri-arrow-right-s-line max-sm:text-gray-400"
            ></motion.i>
          </div>
          {/* Title */}
          <div className="absolute max-sm:left-5 top-5 left-10 text-2xl text-black font-bold font-[Montserrat] uppercase">
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              E
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 23 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              x
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 37 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              p
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 51 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              l
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 60 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              o
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 78 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              r
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 92 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              e
            </motion.span>
          </div>

          {/* Shop */}
          <motion.div
          onClick={scrollToProducts}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ opacity: 0.5 }}
            className="bg-white absolute py-3 px-8 cursor-pointer shadow-lg left-2/4 bottom-10  -translate-x-2/4 z-20  rounded-3xl flex justify-center items-center"
          >
            <p className="text-black font-bold bg-clip-text ">Shop now</p>
          </motion.div>
        </div>
        {/* Other Product Sections */}
        <div ref={targetRef} className="w-full h-full"></div>
      </motion.div>
    </>
  );
};

export default Products;
