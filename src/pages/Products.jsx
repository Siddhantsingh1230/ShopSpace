import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";
import Spinner from "../components/Spinner";
import SelectAccordian from "../components/SelectAccordian";
import InfiniteScroll from "react-infinite-scroller";
import MobileBottomNav from "../components/MobileBottomNav";
import Drawer from "react-modern-drawer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Toasts from "../app/Toasts";
import { removeProducts } from "../slices/productSlice";
import Modal from "../components/Model";

// Image imports
import CanMask from "../assets/images/bottle.png";
import label1 from "../assets/images/label1.png";
import label2 from "../assets/images/label2.png";
import label3 from "../assets/images/label3.png";
import fruit1 from "../assets/images/fruit1.png";
import fruit2 from "../assets/images/fruit2.png";
import fruit3 from "../assets/images/fruit3.png";
import womenmodel from "../assets/images/womenmodel.png";
import Ribbon from "../components/Ribbon";
import SkeletonCard from "../components/SkeletonCard";
import { getAllProductsAsync } from "../slices/productSlice";
import Stars from "../components/Stars";
import { addProductToWishlist } from "../api/wishlist.js";

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
  // opening a modal if user is not logged in
  const [openModal, setOpenModal] = useState(false);
  // user
  const user = useSelector((state) => state.auth.user);
  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  // For dispatching actions
  const dispatch = useDispatch();

  // Scroll To view  for products section
  const targetRef = useRef(null);
  const scrollToProducts = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // data for filter accordian
  const filterAccordianData = useSelector((state) => state.category.categories);

  // Product Data

  const products = useSelector((state) => state.product.products);
  const productCount = useSelector((state) => state.product.count);

  // Filter Drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterDrawer = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  // Auto moving to center Can-Mask (hero) Carousel
  function alternateRotate() {
    let counter = 0;
    let intervalId = setInterval(() => {
      if (counter % 4 < 2) {
        counter++;
        handleSlide(1);
        handleFruitSlide(1);
      } else {
        counter--;
        handleSlide(-1);
        handleFruitSlide(-1);
      }
    }, 2000);
    return intervalId;
  }

  const pagesReturned = useSelector((state) => state.product.pagesReturned);
  const status = useSelector((state) => state.product.status);

  const fetchMoreProducts = () => {
    // FETCH PRODUCTS ON COMPONENT RENDER and state Change
    if (status === "idle") {
      //to avoid making same network calls again and again in row
      dispatch(
        getAllProductsAsync({ page: pagesReturned, quantum: 10, searchKeyword })
      );
    }
  };

  useEffect(() => {
    let intervalId = alternateRotate();
    // Extract the query parameters from the location
    const s = decodeURIComponent(new URLSearchParams(location.search).get("s"));
    if (s?.trim() !== "" && s !== null && s != "null") {
      scrollToProducts();
      setSearchKeyword(s);
      dispatch(removeProducts());
      dispatch(
        getAllProductsAsync({
          page: 0,
          quantum: 10,
          searchKeyword: s,
        })
      );
    }
    if (status === "idle" && (s?.trim() == "" || s == "null" || s==null)) {
      dispatch(getAllProductsAsync({ page: 0, quantum: 10, searchKeyword }));
    }
    // Cleaning up all listeners to avoid possible errors
    return () => clearInterval(intervalId);
  }, []);

  // Search Keyword to filter or search for specific product
  const [searchKeyword, setSearchKeyword] = useState("");
  // filter
  const filter = (keyword) => {
    setSearchKeyword(keyword);
    dispatch(removeProducts());
    dispatch(
      getAllProductsAsync({
        page: 0,
        quantum: 10,
        searchKeyword: keyword,
      })
    );
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
            title="move left"
            onClick={() => {
              handleSlide(-1);
              handleFruitSlide(-1);
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
            title="move right"
            onClick={() => {
              handleSlide(1);
              handleFruitSlide(1);
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
            title="Shop Now"
            onClick={scrollToProducts}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ opacity: 0.5 }}
            className="bg-white absolute py-3 px-8 cursor-pointer shadow-lg left-2/4 bottom-10  -translate-x-2/4 max-sm:bottom-20 z-10 rounded-3xl flex justify-center items-center max-sm:scale-75"
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
            <div className="flex gap-5 max-sm:gap-2">
              <div className="search flex gap-2 rounded-3xl p-2 px-3 w-[20rem] bg-[#f4f4f4] max-sm:w-[14rem]">
                <i
                  onClick={() => {
                    if (status === "idle" && searchKeyword.trim() !== "") {
                      dispatch(removeProducts());
                      dispatch(
                        getAllProductsAsync({
                          page: 0,
                          quantum: 10,
                          searchKeyword,
                        })
                      );
                    }
                  }}
                  title="search"
                  className="ri-search-line  cursor-pointer hover:text-blue-500"
                ></i>
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => {
                    if (e.target.value.trim() == "") {
                      dispatch(removeProducts());
                      dispatch(
                        getAllProductsAsync({
                          page: 0,
                          quantum: 10,
                          searchKeyword: "",
                        })
                      );
                    }
                    setSearchKeyword(e.target.value);
                  }}
                  placeholder="Search.."
                  className="w-4/5 active:border-none bg-transparent focus:border-none outline-none"
                />
              </div>
              {!user ? (
                <div
                  onClick={() => navigate("/login")}
                  className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all"
                >
                  <i title="login" className="ri-user-line"></i>
                </div>
              ) : (
                <div className="cursor-pointer flex justify-center items-center rounded-full h-9 w-9 bg-gray-200 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={user.profileImageURL}
                    alt=""
                  />
                </div>
              )}

              <div className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                <i
                  onClick={() => {
                    if (user) {
                      navigate("/cart");
                    } else {
                      setOpenModal(true);
                    }
                  }}
                  title="cart"
                  className="ri-shopping-cart-2-line"
                ></i>
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
              <SelectAccordian data={filterAccordianData} fun={filter} />
            </div>
            {/* Main */}
            <div className="w-[80%] h-full overflow-y-scroll productList max-sm:w-full max-sm:items-center">
              <InfiniteScroll
                initialLoad={true}
                useWindow={false}
                loadMore={fetchMoreProducts}
                hasMore={productCount != products.length}
                loader={
                  <div className="w-full mb-20">
                    <Spinner />
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 mb-16">
                  {products?.length > 0
                    ? products.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => navigate(`/productdetail/${item._id}`)}
                          className="flex flex-col gap-3 mx-3  cursor-pointer relative overflow-hidden"
                        >
                          <div className="h-[15rem] w-[15rem] max-sm:h-full max-sm:w-full  bg-[#F5F5F7]  rounded-lg relative overflow-hidden max-sm:justify-center">
                            <img
                              className="h-full w-full  object-cover rounded-md object-center"
                              src={item.thumbnail}
                              alt="img"
                            />
                            <div
                              onClick={async (e) => {
                                e.stopPropagation();
                                if (!user) {
                                  return setOpenModal(true);
                                }
                                //add to wishlist
                                Toasts("info", "🌸 Added to wishlist");
                                await addProductToWishlist(user._id, item._id);
                              }}
                              title="add to wishlist"
                              className="hover:bg-red-300 transition-all cursor-pointer absolute top-5 right-5 bg-white w-[2rem] h-[2rem] flex justify-center items-center rounded-full"
                            >
                              <i className="p-0 text-lg ri-heart-3-line"></i>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                              <strong>{item.title?.slice(0, 20)}..</strong>
                              <p className="text-sm">{item.subCategory}</p>
                              <Stars star={Math.round(parseInt(item.rating))} />
                            </div>
                            <p className="bg-[#F5F5F7] px-2 py-1 rounded-lg">
                              ₹
                              {Math.ceil(
                                item.price -
                                  (item.price * item.discountPercentage) / 100
                              )}
                            </p>
                          </div>

                          {/* We can use created at to now if the product is new and show ribbon */}
                          {item.sale && (
                            <Ribbon type={`${item.sale ? "SALE" : "NEW"}`} />
                          )}
                        </div>
                      ))
                    : status !== "loading" && (
                        <>
                          <p className="w-full text-center">No Results found</p>
                        </>
                      )}
                  {status === "loading" &&
                    new Array(6).fill(0).map((_, key) => <SkeletonCard />)}
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
            <i
              onClick={toggleFilterDrawer}
              className="ri-close-line text-xl"
            ></i>
          </div>
          <hr className="bg-[#d0d0d0] mb-5" />
          <SelectAccordian data={filterAccordianData} fun={filter} />
        </div>
      </Drawer>
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Products;
