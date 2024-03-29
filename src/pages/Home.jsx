import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTDETAILURL, PRODUCTSURL } from "../constants/constants";
// Images
import glasses from "../assets/images/glasses.svg";
import hatcaps from "../assets/images/hatcaps.svg";
import quotes from "../assets/images/quotes.svg";
import shorts from "../assets/images/shorts.svg";
import tshirts from "../assets/images/tshirts.svg";
import Sparkle from "../assets/images/sparkle.gif";
import ceo from "../assets/images/ceo.jpg";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";

// Components
import Shoes3DCarousel from "../components/Shoe3DCarousel";
import Stars from "../components/Stars";
import ProgressBar from "../components/ProgressBar";
import CountDownTimer from "../components/CountDownTimer";
import Ribbon from "../components/Ribbon";
import Footer from "../components/Footer";
import Accordian from "../components/Accordian";
import Modal from "../components/Model";

import "react-modern-drawer/dist/index.css"; // Dependency Styles for drawer

// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import MobileBottomNav from "../components/MobileBottomNav";
import { useSelector, useDispatch } from "react-redux";

//actions

import ContentPlaceholder from "../components/ContentPlaceholder";
import SkeletonCard from "../components/SkeletonCard";
import { getWishlistAsync } from "../slices/wishlistSlice";
import Toasts from "../app/Toasts";
import { addProductToWishlist } from "../api/wishlist";
import { addTocart } from "../api/cart";
import { getCartAsync } from "../slices/cartSlice";
import { getBestSelledAsync } from "../slices/productSlice";
import ListPlaceholder from "../components/ListPlaceholder";

const Home = ({ setProgress }) => {
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

  //navigation
  const navigate = useNavigate();
  //  Sidebar Accordian Data of category
  // const AccrodianData = [
  //   {
  //     title: "Clothes",
  //     src: DressFrock,
  //     list: [
  //       { title: "Shirt", price: 300 },
  //       { title: "Shorts & Jeans", price: 60 },
  //       { title: "Jacket", price: 50 },
  //       { title: "Dress & Frock", price: 87 },
  //     ],
  //   },
  //   {
  //     title: "Footwear",
  //     src: winterwear,
  //     list: [
  //       { title: "Sports", price: 300 },
  //       { title: "Formal", price: 60 },
  //       { title: "Casual", price: 50 },
  //       { title: "Safety Shoes", price: 87 },
  //     ],
  //   },
  //   {
  //     title: "Jwellery",
  //     src: watch,
  //     list: [
  //       { title: "Earrings", price: 300 },
  //       { title: "Couple Rings", price: 60 },
  //       { title: "Necklace", price: 50 },
  //     ],
  //   },
  //   {
  //     title: "Clothes",
  //     src: glasses,
  //     list: [
  //       { title: "Shirt", price: 300 },
  //       { title: "Shorts & Jeans", price: 60 },
  //       { title: "Jacket", price: 50 },
  //       { title: "Dress & Frock", price: 87 },
  //     ],
  //   },
  //   {
  //     title: "Footwear",
  //     src: hatcaps,
  //     list: [
  //       { title: "Sports", price: 300 },
  //       { title: "Formal", price: 60 },
  //       { title: "Casual", price: 50 },
  //       { title: "Safety Shoes", price: 87 },
  //     ],
  //   },
  //   {
  //     title: "Jwellery",
  //     src: shorts,
  //     list: [
  //       { title: "Earrings", price: 300 },
  //       { title: "Couple Rings", price: 60 },
  //       { title: "Necklace", price: 50 },
  //     ],
  //   },
  //   {
  //     title: "Footwear",
  //     src: tshirts,
  //     list: [
  //       { title: "Sports", price: 300 },
  //       { title: "Formal", price: 60 },
  //       { title: "Casual", price: 50 },
  //       { title: "Safety Shoes", price: 87 },
  //     ],
  //   },
  // ];

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const categories = useSelector((state) => state.category.categories);
  const topRated = useSelector((state) => state.product.topRated);
  const topViewed = useSelector((state) => state.product.topViewed);
  const latestProducts = useSelector((state) => state.product.latestProducts);
  const bestSellerProduct = useSelector((state) => state.product.bestSelled);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const recommended = useSelector((state) => state.product.recommended);
  const deal = useSelector((state) => state.dod.deal); // deal of the day product
  const cart = useSelector((state) => state.cart.carts);
  const offers = useSelector((state) => state.offer.offers); // offer posters

  useEffect(() => {
    if (user) {
      dispatch(getWishlistAsync(user?._id));
      dispatch(getCartAsync(user._id));
    }
  }, [user, wishlist]);
  useEffect(() => {
    dispatch(getBestSelledAsync());
  }, []);
  // opening a modal if user is not logged in
  const [openModal, setOpenModal] = useState(false);

  // Search
  const [search, setSearch] = useState("");

  // placeholder dummy array
  const dummy = new Array(5).fill(0);
  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container w-[88%] mx-10 max-sm:w-full max-sm:px-4"
      >
        {/* Top Links */}
        <div className="links my-3 flex justify-between max-sm:hidden">
          <div className="sharelinks flex gap-2">
            <div className="h-7 w-7 rounded-md  transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className=" transition-all   ri-github-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className="transition-all ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className=" transition-all   ri-instagram-line"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className="ransition-all  ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>
          <p className="text-sm flex justify-center items-center opacity-70">
            <span>
              <i className="ri-planet-line"></i> <b>FREE SHIPPING</b> THIS WEEK
              ORDER OVER - ₹100
            </span>
          </p>
          <div className="dropdown flex gap-2 opacity-70">
            <select
              className="cursor-pointer opacity-70 hover:opacity-100"
              name="currency"
            >
              <option value="usd">IND ₹</option>
              <option value="usd">USD ₹</option>
              <option value="eur">EUR €</option>
            </select>
            <select
              className="cursor-pointer opacity-70 hover:opacity-100"
              name="language"
            >
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-full" />
        {/* Nav */}
        <div className="nav my-7 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
          <div className="text-3xl logo relative font-[GilroyB]">SP/ACE</div>
          <div className="w-[60%] h-12 border rounded-xl relative max-sm:w-full max-sm:h-[2.85rem]">
            <input
              className="w-full h-full rounded-xl px-4 pr-14 max-sm:text-sm"
              placeholder="Enter your space product..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i
              title="search"
              onClick={() => {
                if (search.trim() !== "") {
                  navigate(`/products?s=${decodeURIComponent(search)}`);
                }
              }}
              className="cursor-pointer ri-search-line absolute right-6 top-2/4 -translate-y-2/4  hover:text-blue-400"
            ></i>
          </div>
          <div className="icons flex justify-center items-center gap-5 max-sm:hidden">
            {/* Settings */}
            <div
              title="Settings"
              onClick={() => {
                if (user) {
                  navigate("/settings");
                } else {
                  setOpenModal(true);
                }
              }}
              className="cursor-pointer flex justify-center items-center relative"
            >
              <i className="text-4xl ri-settings-4-line"></i>
            </div>
            {/* Wishlist */}
            <div
              title="Wishlist"
              onClick={() => {
                if (user) {
                  navigate("/wishlist");
                } else {
                  setOpenModal(true);
                }
              }}
              className="cursor-pointer flex justify-center items-center relative "
            >
              <i className="text-4xl ri-heart-3-line "></i>
              <span
                className={`badge absolute  -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center ${
                  (wishlist?.length == 0 || !user) && "invisible"
                }`}
              >
                <b>{wishlist?.length}</b>
              </span>
            </div>
            {/* Cart */}
            <div
              title="cart"
              onClick={() => {
                if (user) {
                  navigate("/cart");
                } else {
                  setOpenModal(true);
                }
              }}
              className="cursor-pointer flex justify-center items-center relative"
            >
              <i className="text-4xl ri-shopping-bag-line"></i>
              <span
                className={`badge absolute -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center ${
                  (cart?.length == 0 || !user) && "invisible"
                }`}
              >
                <b>{cart?.length}</b>
              </span>
            </div>
            {/* User/login */}
            <div
              onClick={() => {
                if (!user) {
                  navigate("/login");
                }
              }}
              className="cursor-pointer flex justify-center items-center rounded-full h-9 w-9 bg-gray-200 overflow-hidden"
            >
              {user ? (
                <img
                  className="h-full ww-full object-cover"
                  src={user.profileImageURL}
                  alt=""
                />
              ) : (
                <i title="Login" className="ri-user-line"></i>
              )}
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-full" />
        {/* NavLink */}
        <div className="navlink mt-5 flex justify-center items-center gap-11 relative max-sm:hidden">
          <div
            title="products"
            onClick={() => navigate("/products")}
            className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks "
          >
            PRODUCTS
          </div>
          <div className="categoryLink cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            CATEGORIES
            <div
              className={`categorybox overflow-hidden grid gap-[30px] p-[30px] ${
                categories?.length > 0 ? "grid-cols-4" : "grid-cols-1"
              }  `}
            >
              {categories?.length > 0 ? (
                categories.slice(0, 5).map((item, idx) => {
                  // only showing atmost 5 categories and 5 subcategories
                  if (item.label != "clothes") {
                    // to control which labels should not be shown
                    return (
                      <ul className="dropdown-list list-none" key={idx}>
                        <li className="menu-title text-lg font-semibold  pb-2 border-b border-cultured mb-2">
                          <Link
                            to={`${PRODUCTSURL}?s=${encodeURIComponent(
                              item.label
                            )}`}
                          >
                            {item.label.toUpperCase()}
                          </Link>
                        </li>
                        {item.subcategories.length < 5
                          ? [
                              ...item.subcategories,
                              ...new Array(
                                Math.max(5 - item.subcategories.length, 0)
                              ).fill(0),
                            ].map((data, key) => {
                              return (
                                <li
                                  className={`panel-list-item  capitalize ${
                                    !data ? "invisible" : " "
                                  }`}
                                  key={key}
                                >
                                  <Link
                                    to={
                                      data
                                        ? `${PRODUCTSURL}?s=${encodeURIComponent(
                                            data?.name
                                          )}`
                                        : "#"
                                    }
                                  >
                                    {data?.name || 0}
                                  </Link>
                                </li>
                              );
                            })
                          : item.subcategories.slice(0, 5).map((data, key) => {
                              return (
                                <li
                                  className="panel-list-item  capitalize "
                                  key={key}
                                >
                                  <Link
                                    to={`${PRODUCTSURL}?s=${encodeURIComponent(
                                      data?.name
                                    )}`}
                                  >
                                    {data?.name}
                                  </Link>
                                </li>
                              );
                            })}
                        <li className="panel-list-item">
                          <a href="#">
                            <img
                              src={item.src}
                              className="w-[250px] h-[119px] object-cover"
                              alt="category"
                              width="250"
                              height="119"
                            />
                          </a>
                        </li>
                      </ul>
                    );
                  }
                })
              ) : (
                <div className="w-full h-full rounded-md overflow-hidden">
                  <ContentPlaceholder />
                </div>
              )}
            </div>
          </div>
          {/* Other navLinks are styled differently */}
          {categories?.slice(0, 5).map((item, key) => {
            //limited categories are showed due to ui disbalance
            if (item.label !== "clothes") {
              return (
                <div
                  key={key}
                  className="navlinkHoverGrp relative cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  "
                >
                  {item.label.toUpperCase()}
                  <div className="navlinkDropDown overflow-hidden">
                    {item.subcategories.slice(0, 5).map((data, idx) => (
                      <Link
                        className="capitalize text-sm font-bold"
                        to={`${PRODUCTSURL}?s=${encodeURIComponent(
                          data?.name
                        )}`}
                        key={idx}
                      >
                        {data.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div
            onClick={() => navigate("/orders")}
            title="orders"
            className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  "
          >
            ORDERS
          </div>
          {/* <div className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            HOT OFFERS
          </div> */}
        </div>
        {/* ScrollSnap Offer Carousel */}
        <div className="select-none offers w-full h-[450px] max-sm:h-80 pb-2 overflow-x-hidden cursor-grab hover:overflow-x-scroll  rounded-xl snap-mandatory snap-x flex gap-3 max-sm:overflow-x-scroll">
          {offers?.length > 0 ? (
            offers.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-full h-full overflow-hidden snap-center rounded-xl bg-pink-100"
              >
                <img
                  onClick={() => navigate(`/productdetail/${item.productId}`)}
                  src={item.posterImageURL}
                  className="w-full h-full cursor-pointer object-cover"
                  alt=""
                />
              </div>
            ))
          ) : (
            <div className="rounded-xl overflow-hidden h-full w-full">
              <ContentPlaceholder />
            </div>
          )}
        </div>
        {/* ScrollSnap categories Carousel */}
        <div className="select-none categoryCarousel m-10  pb-2  overflow-x-hidden cursor-grab hover:overflow-x-scroll  rounded-xl snap-mandatory snap-x flex  gap-10 max-sm:mx-0 max-sm:my-10 max-sm:overflow-x-scroll">
          {categories?.length > 0
            ? categories.map((item, idx) => {
                if (item.label !== "clothes") {
                  // can be changed based on top category
                  return item.subcategories.map((data, key) => (
                    <div
                      className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20"
                      key={key}
                    >
                      <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
                        <img
                          src={data.src}
                          className="w-8 h-8"
                          alt="dress and frock"
                        />
                      </div>
                      <div className="flex justify-center  flex-col w-4/5">
                        <div className="flex items-center justify-between text-sm font-bold">
                          <p>{data.name.toUpperCase()}</p>
                          <span className="pr-2">({data.itemCount})</span>
                        </div>
                        <Link
                          to={`${PRODUCTSURL}?s=${encodeURIComponent(
                            data?.name
                          )}`}
                          className="mt-3 text-blue-500 cursor-pointer text-sm hover:underline"
                        >
                          Show All
                        </Link>
                      </div>
                    </div>
                  ));
                }
                return null;
              })
            : dummy.map((_, key) => {
                return (
                  <div
                    className="overflow-hidden flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20"
                    key={key}
                  >
                    <ContentPlaceholder />
                  </div>
                );
              })}
          {/* <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={DressFrock} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>DRESS & FROCK</p>
                <span className="pr-2">(53)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div> */}
          {/* <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={winterwear} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>WINTER WEAR</p>
                <span className="pr-2">(58)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={glasses} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>GLASSES & LENS</p>
                <span className="pr-2">(68)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={shorts} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>SHORTS & JEANS</p>
                <span className="pr-2">(82)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={tshirts} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>T-SHIRTS</p>
                <span className="pr-2">(29)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={jacket} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>JACKET</p>
                <span className="pr-2">(34)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={watch} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>WATCH</p>
                <span className="pr-2">(56)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2 max-sm:min-w-full max-sm:h-20">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={hatcaps} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>HAT & CAPS</p>
                <span className="pr-2">(65)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div> */}
        </div>
        {/* Shoes 3DCarousel */}
        <div className="flex justify-center items-center m-16 mb-36 flex-col max-sm:m-0">
          <h1 className="shoesCarouseltitle font-[Rastano] text-5xl relative max-sm:text-3xl">
            Flex in Style
            <img src={Sparkle} className="absolute top-0 left-0 " alt="Wear" />
          </h1>
          <Shoes3DCarousel />
        </div>
        {/* Product Section */}
        <div className="flex justify-center  mb-12  gap-10 relative">
          <div className="sidebar w-[30%] max-sm:hidden">
            <div className=" w-full sticky top-8">
              <div className="w-full border rounded-xl p-5">
                <Accordian title={"CATEGORY"} data={categories} />
              </div>
              <div className="mt-6">
                <h1 className="text-lg font-bold mb-3">BEST SELLERS</h1>
                <div className="flex flex-col gap-3">
                  {bestSellerProduct?.length > 0 ? (
                    bestSellerProduct.map((item, idx) => (
                      <div
                        className="flex gap-5"
                        key={idx}
                        onClick={() => navigate(`/productdetail/${item._id}`)}
                      >
                        <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                          <img
                            className="object-cover w-10 h-10 cursor-pointer"
                            src={item.thumbnail}
                            alt="img"
                          />
                        </div>
                        <div className="flex flex-col cursor-pointer">
                          <h1>{item.title.slice(0, 50)}</h1>
                          <Stars star={4} />
                          <p className="font-bold">
                            <span className="line-through font-normal mr-5">
                              ₹{item.price}
                            </span>
                            ₹
                            {Math.round(
                              item.price -
                                (item.discountPercentage * item.price) / 100
                            )}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <><ListPlaceholder /></>
                  )}

                  {/* <div className="flex gap-5">
                    <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                      <img
                        className="object-cover w-10 h-10 cursor-pointer"
                        src={tshirts}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col cursor-pointer">
                      <h1>Baby Fabric Shoes</h1>
                      <Stars star={4} />
                      <p className="font-bold">
                        <span className="line-through font-normal mr-5">
                          ₹5
                        </span>
                        ₹4.00
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                      <img
                        className="object-cover w-10 h-10 cursor-pointer"
                        src={shorts}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col cursor-pointer">
                      <h1>Baby Fabric Shoes</h1>
                      <Stars star={4} />
                      <p className="font-bold">
                        <span className="line-through font-normal mr-5">
                          ₹5
                        </span>
                        ₹4.00
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                      <img
                        className="object-cover w-10 h-10 cursor-pointer"
                        src={glasses}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col cursor-pointer">
                      <h1>Baby Fabric Shoes</h1>
                      <Stars star={4} />
                      <p className="font-bold">
                        <span className="line-through font-normal mr-5">
                          ₹5
                        </span>
                        ₹4.00
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="productsWrapper w-[70%] max-sm:w-full max-sm:mt-10">
            {/* Product trend and list */}
            <div className="grid grid-cols-3 gap-5 mb-10 max-sm:grid-cols-1">
              <div className="flex flex-col gap-5">
                <p className="font-bold border-b py-2 tracking-wider">
                  New Arrivals
                </p>
                {latestProducts?.length > 0 ? (
                  latestProducts.map((item, idx) => (
                    <div key={idx} className="flex flex-col w-full">
                      <Link
                        to={`${PRODUCTDETAILURL}/${item._id}`}
                        className="flex  border-solid border overflow-hidden rounded-md py-3 items-center "
                      >
                        <img
                          className="mx-2 w-20 h-[70px] rounded-md cursor-pointer"
                          src={item.thumbnail}
                          alt="product"
                        />
                        <div>
                          <a href="#" className="text-sm font-bold">
                            {item.title.slice(0, 20)}...
                          </a>
                          <p className="text-sm hover:text-blue-500 cursor-pointer">
                            {item.category}
                          </p>
                          <p className="text-blue-500 font-bold">
                            {Math.round(
                              item.price -
                                (item.discountPercentage * item.price) / 100
                            )}
                            <span className="ml-3 font-normal text-[#787878] line-through">
                              {item.price}
                            </span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <SkeletonCard />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold border-b py-2 tracking-wider">
                  Trending
                </p>
                {topViewed?.length > 0 ? (
                  topViewed.slice(0, 4).map((item, idx) => (
                    <Link
                      to={`${PRODUCTDETAILURL}/${item._id}`}
                      className="flex flex-col w-full"
                    >
                      <div className="flex    border-solid border overflow-hidden rounded-md py-3 items-center ">
                        <img
                          className="mx-2 w-20 h-[70px] rounded-md cursor-pointer"
                          src={item.thumbnail}
                          alt="product"
                        />
                        <div>
                          <p href="#" className="text-sm font-bold">
                            {item.title.slice(0, 20)}...
                          </p>
                          <p className="text-sm hover:text-blue-500 cursor-pointer">
                            {item.category}
                          </p>
                          <p className="text-blue-500 font-bold">
                            {Math.round(
                              item.price -
                                (item.discountPercentage * item.price) / 100
                            )}
                            <span className="ml-3 font-normal text-[#787878] line-through">
                              {item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <SkeletonCard />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold border-b py-2 tracking-wider">
                  Top Rated
                </p>
                {topRated?.length > 0 ? (
                  topRated.map((item, idx) => (
                    <div key={idx} className="flex flex-col w-full">
                      <Link
                        to={`${PRODUCTDETAILURL}/${item._id}`}
                        className="flex    border-solid border overflow-hidden rounded-md py-3 items-center "
                      >
                        <img
                          className="mx-2 w-20 h-[70px] rounded-md cursor-pointer"
                          src={item.thumbnail}
                          alt="product"
                        />
                        <div>
                          <p className="text-sm font-bold">
                            {item.title.slice(0, 20)}...
                          </p>
                          <p className="text-sm hover:text-blue-500 cursor-pointer">
                            {item.category}
                          </p>
                          <p className="text-blue-500 font-bold">
                            {Math.round(
                              item.price -
                                (item.discountPercentage * item.price) / 100
                            )}
                            <span className="ml-3 font-normal text-[#787878] line-through">
                              {item.price}
                            </span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <SkeletonCard />
                  </div>
                )}
              </div>
            </div>
            {/* Deal of the Day */}
            <div className="flex flex-col mb-10">
              <h1 className="font-bold border-b py-3">Deal Of The Day</h1>
              {deal ? (
                <div className="flex border gap-5 rounded-md p-10 max-sm:flex-col max-sm:p-0 max-sm:items-center max-sm:px-6 ">
                  <img
                    src={deal?.productId.thumbnail}
                    alt="offer"
                    className="w-2/4 max-sm:m-10 rounded-lg max-sm:w-full object-cover"
                  ></img>
                  <div className="w-2/4 max-sm:w-full">
                    <Stars
                      star={Math.round(parseInt(deal?.productId.rating))}
                    />
                    <h1 className="font-bold font-[GilroyB] text-lg max-sm:mt-3 max-sm:text-md">
                      {deal?.productId.title}
                    </h1>
                    <p className="my-2 text-[#787878] text-md max-sm:text-sm">
                      {deal?.productId.description}
                    </p>
                    <p className="text-blue-500 text-2xl font-bold max-sm:text-xl max-sm:mt-3">
                      ₹
                      {Math.round(
                        deal?.productId.price -
                          (deal?.productId.discountPercentage *
                            deal?.productId.price) /
                            100
                      )}
                      <span className="ml-5 text-black font-normal line-through">
                        ₹{deal?.productId.price}
                      </span>
                    </p>
                    <button
                      onClick={() => {
                        if (!user) {
                          return setOpenModal(true);
                        }
                        Toasts("info", "🛒 Added to cart");
                        addTocart(user._id, deal?.productId._id, 1);
                      }}
                      className="py-2 px-3 hover:bg-black hover:text-white transition bg-blue-500 rounded-md text-white font-bold text-xl font-[GilroyB] my-5 max-sm:text-lg"
                    >
                      ADD TO CART
                    </button>
                    <div className="flex justify-between items-center mb-3">
                      <p>
                        ALREADY SOLD: <span className="font-bold">15</span>{" "}
                      </p>
                      <p>
                        AVAILABLE:{" "}
                        <span className="font-bold">
                          {deal?.productId.stock}
                        </span>
                      </p>
                    </div>
                    <ProgressBar
                      value={
                        (parseInt(deal?.productId.stock) /
                          (parseInt(deal?.productId.stock) + 15)) *
                        100
                      }
                    />
                    <p className="font-bold text-sm my-5">
                      HURRY UP! OFFER ENDS IN:
                    </p>
                    <CountDownTimer
                      seconds={
                        (new Date(deal?.offerDuration) - new Date()) / 1000
                      }
                    />
                  </div>
                </div>
              ) : (
                <SkeletonCard />
              )}
            </div>
            {/* New Products */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold border-b py-3">Featured Products</h1>
              <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-1">
                {recommended?.length > 0 ? (
                  recommended.map((item, idx) => (
                    <div
                      key={idx}
                      className="newProductCard relative flex flex-col gap-2 cursor-pointer border-2 overflow-hidden rounded-lg transition duration-300 ease-in-out hover:shadow-xl p-3 justify-center items-start"
                    >
                      <img
                        src={item.thumbnail}
                        alt="new"
                        className="w-full hover:scale-105 transition-all object-cover h-[180px] rounded-lg"
                      />
                      <p className="text-blue-500 text-sm">{item.category}</p>
                      <h1 className="text-[#787878]">
                        {item.title.slice(0, 20)}...
                      </h1>
                      <Stars star={4} />
                      <p className="font-bold">
                        ₹
                        {Math.round(
                          item.price -
                            (item.discountPercentage * item.price) / 100
                        )}
                        <span className="ml-5 font-normal line-through">
                          ₹{item.price}
                        </span>
                      </p>
                      <div className="newProductCardOptions absolute flex flex-col gap-3">
                        <p
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!user) {
                              return setOpenModal(true);
                            }
                            //add to wishlist
                            Toasts("info", "🌸 Added to wishlist");
                            addProductToWishlist(user._id, item._id);
                          }}
                          className="flex py-1 px-2 outline-1 outline-slate-300 outline hover:outline-0 out rounded-md justify-center items-center transition-colors text-black  bg-white hover:text-white  hover:bg-black"
                        >
                          <i className="ri-heart-3-line"></i>
                        </p>
                        <p
                          onClick={() => navigate(`/productdetail/${item._id}`)}
                          className="flex py-1 px-2 outline-1 outline-slate-300 outline hover:outline-0 out rounded-md justify-center items-center transition-colors text-black bg-white hover:text-white  hover:bg-black"
                        >
                          <i className="ri-eye-line"></i>
                        </p>
                        <Link
                          to={"#"}
                          className="flex py-1 px-2 outline-1 outline-slate-300 outline hover:outline-0 out rounded-md justify-center items-center transition-colors text-black bg-white hover:text-white  hover:bg-black"
                        >
                          <i className="ri-share-line"></i>
                        </Link>
                      </div>
                      <Ribbon type={item.sale ? "SALE" : "NEW"} />
                    </div>
                  ))
                ) : (
                  <>
                    {new Array(5).fill(0).map((_, idx) => (
                      <SkeletonCard key={idx} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Other Sections */}
        {/* section1 */}
        <div className="flex h-[450px]  gap-10 mb-11 max-sm:flex-col max-sm:h-auto">
          <div className="h-[90%] w-[24%] flex flex-col gap-8 max-sm:w-full ">
            <p className="font-bold border-b py-2 tracking-wider">
              Testimonial
            </p>
            <div className="border text-center gap-2  h-[90%] rounded-xl justify-center items-center flex flex-col max-sm:py-5">
              <img
                className="h-20 w-20  rounded-full"
                src={ceo}
                alt="ceo image"
              />
              <h1 className="font-bold text-[#787878]">Khushi</h1>
              <p className="">CEO ShopSpace</p>
              <img className="h-6 w-6" src={quotes} alt="quotation" />
              <p className="text-sm w-4/5 text-[#787878]">
                Khushi, ShopSpace CEO, balances academics and e-commerce
                leadership.
              </p>
            </div>
          </div>
          <div className="w-[52%] h-[95%] cta flex justify-center items-center max-sm:w-full max-sm:h-[320px]">
            <div className="h-[60%] w-[50%] bg-[#ffffffbf] rounded-md max-sm:w-[60%]">
              <a
                href="#"
                className="h-full w-full text-center flex-col flex gap-2 justify-center items-center"
              >
                <p className="bg-black px-3 py-2 text-white rounded-md font-bold text-sm">
                  25% DISCOUNT
                </p>
                <h1 className="w-[50%] font-[GilroyB] text-2xl font-bold ">
                  Winter Collection
                </h1>
                <p className="text-[#787878]">Starting @ ₹50</p>
                <p className="text-[#787878] font-[GilroyB] text-md">
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
          <div className="h-[90%] w-[24%] flex flex-col gap-8 max-sm:w-full">
            <p className="font-bold border-b py-2 tracking-wider">
              Our Services
            </p>
            <div className="border text-center gap-2 px-6  h-[90%] rounded-xl justify-center items-start flex flex-col max-sm:py-5">
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-ship-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Worldwide Delivery</p>
                  <p className="text-sm font-normal text-[#787878]">
                    For Order Over ₹100
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-rocket-2-line text-4xl rotate-45"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Next Day Delivery</p>
                  <p className="text-sm font-normal text-[#787878]">
                    Indian Orders Only
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-phone-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">
                    Best Online Support
                  </p>
                  <p className="text-sm font-normal text-[#787878]">
                    Hours: 8:00AM - 11PM
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer ">
                <i className="text-blue-500 hover:text-black ri-arrow-go-back-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Return Policy</p>
                  <p className="text-sm font-normal text-[#787878]">
                    Easy & Free Return
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-service-line text-4xl "></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">30% Money Back</p>
                  <p className="text-sm font-normal text-[#787878]">
                    For Order Over ₹100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="grid grid-cols-4 gap-4 mb-5 max-sm:grid-cols-1 max-sm:gap-10">
          <a href="#" className=" w-full">
            <img className="w-full rounded-md mb-6" src={blog1} alt="blog" />
            <div>
              <p className="font-bold text-blue-500">Fashion</p>
              <h1 className="hover:text-blue-500 font-bold  text-[1.2rem]">
                Clothes Retail KPIs 2021 Guide for Clothes Executives.
              </h1>
              <p className="mt-2 text-[#787878] ">
                By Mr. Siddhant / Dec 17, 2023
              </p>
            </div>
          </a>
          <a href="#" className=" w-full">
            <img className="w-full rounded-md mb-6" src={blog2} alt="blog" />
            <div>
              <p className="font-bold text-blue-500">Clothes</p>
              <h1 className="hover:text-blue-500 font-bold  text-[1.2rem]">
                Curbside fashion Trends: How to Win the Pickup Battle.
              </h1>
              <p className="mt-2 text-[#787878] ">
                By Mr. Siddhant / Dec 17, 2023
              </p>
            </div>
          </a>
          <a href="#" className=" w-full">
            <img className="w-full rounded-md mb-6" src={blog3} alt="blog" />
            <div>
              <p className="font-bold text-blue-500">Shoes</p>
              <h1 className="hover:text-blue-500 font-bold  text-[1.2rem]">
                EBT vendors: Claim Your Share of SNAP Online Revenue.
              </h1>
              <p className="mt-2 text-[#787878] ">
                By Mr. Siddhant / Dec 17, 2023
              </p>
            </div>
          </a>
          <a href="#" className=" w-full">
            <img className="w-full rounded-md mb-6" src={blog4} alt="blog" />
            <div>
              <p className="font-bold text-blue-500">Electronics</p>
              <h1 className="hover:text-blue-500 font-bold  text-[1.2rem]">
                Curbside fashion Trends: How to Win the Pickup Battle.
              </h1>
              <p className="mt-2 text-[#787878] ">
                By Mr. Siddhant / Dec 17, 2023
              </p>
            </div>
          </a>
        </div>
      </motion.div>
      {/* footer */}
      <Footer></Footer>

      {/* Mobile Viewport Components */}
      {/* bottom_fixed_toolbar */}
      <MobileBottomNav />
      {/* Modal control if user is not logged in */}
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Home;
