import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cartimg from "../assets/images/cart.gif";
import arrow from "../assets/images/arrow.gif";
import { INC, DEC } from "../constants/constants";
import { useNavigate } from "react-router-dom";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import MobileBottomNav from "../components/MobileBottomNav";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartAsync,
  removeCartAsync,
  updateCartAsync,
} from "../slices/cartSlice";
import ListPlaceholder from "../components/ListPlaceholder";
import CartSkeleton from "../components/CartSkeleton";
import emptygif from "../assets/images/empty.gif";

const Cart = ({ setProgress }) => {
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

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  const navigate = useNavigate();
  const status = useSelector((state) => state.cart.status);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      dispatch(getCartAsync(user._id));
      // console.log(cart)
    }
  }, []);

  useEffect(() => {
    setProducts(cart);
    // console.log(products)
  }, [cart]);

  const totalAmount = products.reduce(
    (amount, item) => item.productId.price * item.quantity + amount,
    0
  );
  const totalItems = products.reduce((count, item) => item.quantity + count, 0);
  const changeQuantity = (item, type) => {
    if (type === INC) {
      if (item.quantity < 5) {
        dispatch(
          updateCartAsync({
            userId: user._id,
            productId: item.productId._id,
            quantity: item.quantity + 1,
          })
        );
        setProducts((prevProducts) =>
          prevProducts.map((prevItem) =>
            prevItem._id === item._id
              ? { ...prevItem, quantity: prevItem.quantity + 1 }
              : prevItem
          )
        );
       
      }
    }

    if (type === DEC) {
      if (item.quantity !== 1) {
        setProducts((prevProducts) =>
          prevProducts.map((prevItem) =>
            prevItem._id === item._id
              ? { ...prevItem, quantity: prevItem.quantity - 1 }
              : prevItem
          )
        );
        dispatch(
          updateCartAsync({
            userId: user._id,
            productId: item.productId._id,
            quantity: item.quantity - 1,
          })
        );
      }
    }
  };
  const removeProduct = (id, userId) => {
    dispatch(removeCartAsync({ id, userId }));
  };

  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute w-full h-full"
      >
        <svg
          className="hidden sm:block fixed z-10 rotate-90 blur-[5px]  top-20  w-1/6 h-w-1/6 left-36 blobpulse "
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0F62FE"
            d="M58.5,-68.6C74.4,-56.4,85,-36.6,87.1,-16.6C89.2,3.5,82.8,23.8,72.3,41.4C61.7,59.1,47.1,74.1,28.8,81.8C10.6,89.5,-11.2,90,-29.4,82.6C-47.6,75.1,-62.3,59.8,-72.6,41.9C-82.8,24.1,-88.7,3.7,-86.3,-16.2C-84,-36.1,-73.5,-55.6,-57.7,-67.8C-42,-80.1,-21,-85.2,0.2,-85.4C21.3,-85.6,42.6,-80.8,58.5,-68.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="h-full bg-gray-100 pt-5">
          <div className="flex sm:sticky backdrop-blur-sm sm:top-5 items-center justify-between mx-5 sm:mx-24  z-20">
            {/* Bread crumbs */}

            <nav className="flex " aria-label="Breadcrumb">
              <ol className="inline-flex md:space-x-1  rtl:space-x-reverse text-sm md:text-xl">
                <li className="inline-flex ">
                  <Link
                    to="/"
                    className="
                       inline-flex items-center   text-gray-800 font-bold hover:text-blue-600 dark:text-gray-800 hover:underline"
                  >
                    <svg
                      className="w-5 h-5 max-sm:h-3 max-sm:w-3 me-2.5 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-800 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ms-1 font-bold text-gray-800 md:ms-2 ">
                      Cart
                    </span>
                    <img className="h-12 w-12" src={cartimg} alt="" />
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className=" text-2xl font-bold flex items-center">
              <span className="inline-flex items-center rounded-lg bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                {products.length}
                {products.length > 1 ? " Items" : " Item"}
              </span>
            </h1>
          </div>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 my-10 xl:px-0">
            {/* Sub total */}
            {status === "loading" ? (
              <div className="mt-6 h-full sm:sticky sm:top-16 rounded-lg border z-10 mb-4 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <ListPlaceholder />
              </div>
            ) : products.length > 0 ? (
              <div className="mt-6 h-full sm:sticky sm:top-16 rounded-lg border z-10 mb-4 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">₹ {totalAmount}</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Total Items</p>
                  <p className="text-gray-700">{totalItems}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">₹ 9.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold text-right">
                      ₹{" "}
                      {totalAmount > 0
                        ? parseFloat(totalAmount + 9.99).toFixed(2)
                        : 0}
                    </p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className={`${totalAmount == 0 ? "pointer-events-none" : ""}`}
                >
                  <button
                    className={`select-none mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600`}
                  >
                    Check out
                  </button>
                </Link>
              </div>
            ) : null}

            {status === "loading" ? (
              <div className="flex flex-col w-full">
                {new Array(4).fill(0).map((_, key) => (
                  <CartSkeleton key={key} />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="rounded-lg md:w-2/3 max-sm:flex max-sm:flex-col ">
                {products.map((item) => (
                  <div
                    key={item._id}
                    className="cartItems justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <Link to={`/productdetail/${item.productId._id}`}>
                      <img
                        src={item.productId.thumbnail}
                        alt={item.productId.title}
                        className="w-full h-48 sm:h-24 rounded-lg  sm:w-40 cursor-pointer"
                      />
                    </Link>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg sm:text-2xl  font-bold text-gray-900">
                          {item.productId.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            {item.productId.category}
                          </span>
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={(e) => {
                              changeQuantity(item, DEC);
                            }}
                            className="select-none cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <span className="flex justify-center items-center pointer-events-none font-medium  h-8 w-8 border bg-white text-center text-xs outline-none">
                            <p>{item.quantity}</p>
                          </span>
                          <span
                            onClick={(e) => {
                              changeQuantity(item, INC);
                            }}
                            className="select-none cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 ">
                          <p className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                              ₹ {item.productId.price}
                            </span>
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            onClick={() => {
                              setProducts((prevProducts) =>
                                prevProducts.filter(
                                  (prevItem) => prevItem._id !== item._id
                                )
                              );
                              removeProduct(item._id, user._id);
                            }}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer  duration-150 hover:text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4 items-center">
                <img className=" -ml-12" src={emptygif} alt="nothing"></img>
                <p className="sm:ml-16 ml-8 sm:text-xl text-rose-950">
                  Your cart is Empty{" "}
                </p>
              </div>
            )}
          </div>
          <Link
            to="/"
            className="hidden fixed bottom-0 ml-5 sm:ml-32 my-8 font-medium sm:flex items-center "
          >
            <img src={arrow} alt="" className="w-8 h-8 rotate-180" />
            &nbsp; <p>Continue shopping</p>
          </Link>
        </div>
      </motion.div>
      <MobileBottomNav />
    </>
  );
};

export default Cart;
