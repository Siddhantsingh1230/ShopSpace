import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";
import Spinner from "../components/Spinner";
import MenuAccordian from "../components/MenuAccordian";
import InfiniteScroll from "react-infinite-scroller";
import MobileBottomNav from "../components/MobileBottonNav";
import Drawer from "react-modern-drawer";

// Image imports
import CanMask from "../assets/images/bottle.png";
import label1 from "../assets/images/label1.png";
import label2 from "../assets/images/label2.png";
import label3 from "../assets/images/label3.png";
import fruit1 from "../assets/images/fruit1.png";
import fruit2 from "../assets/images/fruit2.png";
import fruit3 from "../assets/images/fruit3.png";
import womenmodel from "../assets/images/womenmodel.png";

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

  // data for filter accordian
  const filterAccordianData = [
    {
      title: "Men's",
      list: [
        { title: "Shirt" },
        { title: "Shorts & Jeans" },
        { title: "Safety Shoes" },
        { title: "Wallet" },
      ],
    },
    {
      title: "Women",
      list: [
        { title: "Dress & Frock" },
        { title: "Earrings" },
        { title: "Necklace" },
        { title: "Makeup Kit" },
      ],
    },
    {
      title: "Jwellery",
      list: [
        { title: "Earrings" },
        { title: "Couple Rings" },
        { title: "Necklace" },
      ],
    },
    {
      title: "Clothes",
      list: [
        { title: "Shirt" },
        { title: "Shorts & Jeans" },
        { title: "Jacket" },
        { title: "Dress & Frock" },
      ],
    },
  ];

  // Product Data

  let [products, setProducts] = useState(new Array(5).fill(0));

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      const array = new Array(5).fill(1);
      setProducts((prev) => [...prev, ...array]);
    }, 1500);
  };

  // Filter Drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterDrawer = () => {
    setIsFilterOpen((prevState) => !prevState);
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
          <div className="absolute max-sm:left-5 top-5 left-10 text-2xl md:scale-125 text-black font-bold font-[Montserrat] ">
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
              animate={{ x: 35 }}
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
              animate={{ x: 57 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              o
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 73 }}
              whileHover={{ scale: 1.1, color: "white", cursor: "pointer" }}
              transition={{ duration: 1.15 }}
            >
              r
            </motion.span>
            <motion.span
              className="absolute select-none"
              initial={{ x: 0 }}
              animate={{ x: 83 }}
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
            className="bg-white absolute py-3 px-8 cursor-pointer shadow-lg left-2/4 bottom-10  -translate-x-2/4 max-sm:bottom-20  rounded-3xl flex justify-center items-center max-sm:scale-75"
          >
            <p className="text-black font-bold ">Shop now</p>
          </motion.div>
        </div>
        {/* Other Product Sections */}
        <div ref={targetRef} className="w-full h-full p-5 ">
          {/* Nav */}
          <div className="shopNavbar flex justify-between max-sm:justify-center items-center mb-5 px-5  max-sm:gap-5 max-sm:flex-col-reverse">
            {/* Navlinks */}
            <div className="flex items-center gap-5 max-sm:gap-2">
              <strong className=" font-[Montserrat] ">Shop</strong>
              <p className="cursor-pointer font-[Montserrat] hover:bg-[#f4f4f4] px-3 py-2 rounded-md  transition-all ">
                Women
              </p>
              <p className="cursor-pointer font-[Montserrat] hover:bg-[#f4f4f4] px-3 py-2 rounded-md  transition-all ">
                Men
              </p>
              <p className="cursor-pointer font-[Montserrat] hover:bg-[#f4f4f4] px-3 py-2 rounded-md  transition-all ">
                Children
              </p>
              <div
                onClick={toggleFilterDrawer}
                className="md:hidden hover:bg-[#f4f4f4] px-2 py-1 rounded-md  transition-all"
              >
                <i className="ri-sound-module-fill"></i>
              </div>
            </div>
            {/* Search */}
            <div className="flex gap-5">
              <div className="search flex gap-2 rounded-3xl p-2 px-3 w-[20rem] bg-[#f4f4f4] max-sm:w-[14rem]">
                <i className="ri-search-line  cursor-pointer hover:text-blue-500"></i>
                <input
                  type="text"
                  placeholder="Search.."
                  className="w-4/5 active:border-none bg-transparent focus:border-none outline-none"
                />
              </div>
              <div className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                <i className="ri-user-line"></i>
              </div>
              <div className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                <i className="ri-shopping-cart-2-line"></i>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="bg-[#5c5c5c] mb-7" />
          {/* Products */}
          <div className="products flex h-full gap-10 ">
            {/* Sidebar */}
            <div className="shopSidebar w-[20%]  h-full  p-5 max-sm:hidden max-sm:p-0">
              <div className="flex justify-between items-center mb-1">
                <strong>Filter</strong>
                <i className="ri-sound-module-line"></i>
              </div>
              <hr className="bg-[#5c5c5c] mb-5" />
              <MenuAccordian data={filterAccordianData} />
            </div>
            <div className="w-[80%] h-full  overflow-y-scroll productList max-sm:w-full max-sm:items-center">
              <InfiniteScroll
                initialLoad={true}
                useWindow={false}
                loadMore={fetchMoreData}
                hasMore={true}
                loader={
                  <div className="w-full mb-20">
                    <Spinner />
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 ">
                  {products.map((i, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2  p-1 cursor-pointer"
                    >
                      <div className="h-[15rem] w-[15rem] max-sm:h-full max-sm:w-full  bg-[#F5F5F7]  rounded-lg relative overflow-hidden max-sm:justify-center">
                        <img
                          className="h-full w-full  object-cover rounded-md object-center"
                          src={womenmodel}
                          alt="img"
                        />
                        <div className="hover:bg-red-300 transition-all cursor-pointer absolute top-5 left-5 bg-white w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
                          <i className="p-0 text-lg ri-heart-3-line"></i>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <strong>Formal Dress </strong>
                          <p className="text-sm">Clothes</p>
                        </div>
                        <p className="bg-[#F5F5F7] px-2 py-1 rounded-lg">
                          ₹500.00
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
        <MobileBottomNav />
      </motion.div>
      {/* Filter Drawer */}
      <Drawer
        open={isFilterOpen}
        onClose={toggleFilterDrawer}
        direction="right"
        size="85vw"
        className=""
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-1">
            <strong>Filters</strong>
            <i onClick={toggleFilterDrawer} className="ri-close-line text-xl"></i>
          </div>
          <hr className="bg-[#d0d0d0] mb-5" />
          <MenuAccordian data={filterAccordianData} />
        </div>
      </Drawer>
    </>
  );
};

export default Products;
