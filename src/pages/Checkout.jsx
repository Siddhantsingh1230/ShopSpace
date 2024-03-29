import React, { useEffect, useState } from "react";
import coin from "../assets/images/coin.gif";
import truck from "../assets/images/truck.gif";
import india from "../assets/images/india.png";
import { Link } from "react-router-dom";
import { CRD, COD } from "../constants/constants";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import checkout from "../assets/images/checkout.gif";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import MobileBottomNav from "../components/MobileBottomNav";
import { useSelector, useDispatch } from "react-redux";
import { getCartAsync, emptyCartAsync } from "../slices/cartSlice";
import { createOrderAsync } from "../slices/orderSlice";
import Toasts from "../app/Toasts";
import Popup from "../components/Popup";
import { getOrderLocations } from "../api/orderLocation";

const Checkout = ({ setProgress }) => {
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
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [paymentMethod, setPaymentMethod] = useState(COD);
  const cart = useSelector((state) => state.cart.carts);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);

  const fetchState = async () => {
    const data = await getOrderLocations();
    setStates(data);
  };
  useEffect(() => {
    if (COD) {
      unregister("cardholder");
      unregister("creditexpiry");
      unregister("cardcvv");
      unregister("cardno");
    }
  }, [paymentMethod]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      dispatch(getCartAsync(user._id));
      fetchState();
    }
  }, []);

  const totalAmount = cart
    ? cart.reduce(
        (amount, item) => item.productId.price * item.quantity + amount,
        0
      )
    : 0;

  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute w-full  h-full "
      >
        {loading ? (
          <Spinner />
        ) : cart?.length > 0 ? (
          <>
            <div className="flex flex-col px-4 border-b bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
              {/* Bread crumbs */}

              <nav className="flex " aria-label="Breadcrumb">
                <ol className="flex items-center md:space-x-1   rtl:space-x-reverse text-sm md:text-xl">
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
                    <Link to="/cart">
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
                        <span className="ms-1 font-bold text-gray-800 md:ms-2 hover:text-blue-600 hover:underline">
                          Cart
                        </span>
                      </div>
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
                        Checkout
                      </span>
                      <img className="h-8 w-8 ms-1" src={checkout} alt="" />
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                <div className="relative">
                  <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </a>
                      <span className="font-semibold text-gray-900">Shop</span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="#"
                      >
                        2
                      </a>
                      <span className="font-semibold text-gray-900">
                        Shipping
                      </span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                        href="#"
                      >
                        3
                      </a>
                      <span className="font-semibold text-gray-500">
                        Payment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
              <div className="px-4 pt-6">
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400 text-sm">
                  Check your items. And select a suitable shipping method.
                </p>
                <div className="mt-6 space-y-3 rounded-lg border bg-white px-2 py-3 sm:px-6">
                  {cart?.length > 0 ? (
                    cart
                      .filter((item, index) => index < 2)
                      .map((item) => (
                        <div
                          key={item._id}
                          className="flex overflow-hidden rounded-lg bg-white sm:flex-row"
                        >
                          <img
                            className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                            src={item.productId.thumbnail}
                            alt=""
                          />
                          <div className="flex w-full  overflow-hidden flex-col px-4 py-4">
                            <span className="font-semibold">
                              {item.productId.title}
                            </span>
                            <span className="float-right text-gray-400">
                              {item.productId.category}
                            </span>
                            <div className="flex justify-between">
                              <p className="text-sm mt-2 ">
                                Qty :{" " + item.quantity}
                              </p>
                              <p className="text-sm mt-2 ">
                                Total Amount : ₹{" "}
                                {" " + item.productId.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Empty Cart Shop</p>
                  )}

                  <Link to="/cart">
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      {cart?.length > 2 ? (
                        <p className="whitespace-nowrap text-sm">
                          +{cart.length - 2} more{" "}
                        </p>
                      ) : (
                        <p className="whitespace-nowrap text-sm">Cart</p>
                      )}
                    </span>
                  </Link>
                </div>

                <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                <form className="mt-5 grid gap-6">
                  <div className="relative cursor-pointer">
                    <input
                      className="peer hidden "
                      id="radio_1"
                      type="radio"
                      name="radio"
                      checked={paymentMethod === COD}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPaymentMethod(COD);
                        } else {
                          setPaymentMethod(CRD);
                        }
                      }}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="group  peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
                      htmlFor="radio_1"
                    >
                      <img className="w-14 object-contain" src={truck} alt="" />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          Cash On Delivery
                        </span>
                        <p className="text-slate-500 text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="relative cursor-pointer">
                    <input
                      className="peer hidden "
                      id="radio_2"
                      type="radio"
                      name="radio"
                      disabled
                      checked={paymentMethod === CRD}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPaymentMethod(CRD);
                        } else {
                          setPaymentMethod(COD);
                        }
                      }}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
                      htmlFor="radio_2"
                    >
                      <img className="w-14 object-contain" src={coin} alt="" />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">Head On Pay</span>
                        <p className="text-slate-500 text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
              <form
                noValidate
                onSubmit={handleSubmit((data) => {
                  if (cart.length > 0) {
                    if (paymentMethod === COD) {
                      setLoading(true);
                      dispatch(
                        createOrderAsync({
                          ...data,
                          userId: user._id,
                          paymentMethod: paymentMethod,
                          cart,
                          totalAmount,
                          status: "pending",
                        })
                      );
                      dispatch(emptyCartAsync(user._id));
                      navigate(`/ordersuccess`);
                    }
                  } else Toasts("error", "Empty cart");
                })}
                className="mt-10 bg-gray-50 px-4 pt-6 lg:mt-0"
              >
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400 text-sm">
                  Complete your order by providing your payment details.
                </p>
                <>
                  <label
                    htmlFor="email"
                    className="mt-4 mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      {...register("checkoutEmail", {
                        required: "Enter email",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Enter valid email",
                        },
                      })}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@gmail.com"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.checkoutEmail && (
                    <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                      {errors.checkoutEmail.message}
                    </p>
                  )}
                  {paymentMethod === CRD ? (
                    <>
                      <label
                        htmlFor="card-holder"
                        className="mt-4 mb-1 block text-sm font-medium"
                      >
                        Card Holder
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card-holder"
                          {...register("cardholder", {
                            required: "Enter cardholder",
                            pattern: {
                              value: /[\S\s]+[\S]+/,
                              message: "Enter valid cardholder name",
                            },
                          })}
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your full name here"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.cardholder && (
                        <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                          {errors.cardholder.message}
                        </p>
                      )}
                      <label
                        htmlFor="card-no"
                        className="mt-4 mb-1 block text-sm font-medium"
                      >
                        Card Details
                      </label>
                      <div className="flex">
                        <div className="relative w-7/12 flex-shrink-0">
                          <input
                            type="number"
                            id="card-no"
                            {...register("cardno", {
                              required: "Enter card num",
                            })}
                            className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              className="h-4 w-4 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg>
                          </div>
                        </div>
                        <input
                          type="month"
                          {...register("creditexpiry", {
                            required: "Enter creditexpiry",
                          })}
                          className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="MM/YY"
                        />
                        <input
                          type="number"
                          {...register("cardcvv", {
                            required: "Enter card cvv",
                          })}
                          className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="CVV"
                        />
                      </div>
                      <div className="flex  justify-between forErrors">
                        {errors.cardno && (
                          <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                            {errors.cardno.message}
                          </p>
                        )}
                        {errors.creditexpiry && (
                          <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                            {errors.creditexpiry.message}
                          </p>
                        )}
                        {errors.cardcvv && (
                          <p className="text-right inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                            {errors.cardcvv.message}
                          </p>
                        )}
                      </div>
                    </>
                  ) : null}
                  <label
                    htmlFor="billing-address"
                    className="mt-4 mb-1 block text-sm font-medium"
                  >
                    Billing Address
                  </label>
                  <div className="flex flex-col  sm:flex-row">
                    <div className="relative flex-shrink-0 sm:w-7/12 max-sm:mt-2">
                      <input
                        type="text"
                        id="billing-address"
                        {...register("billingAddress", {
                          required: "Enter billingaddress",
                          pattern: {
                            value: /[\S\s]+[\S]+/,
                            message: "Enter valid billingaddress",
                          },
                        })}
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Street Address"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <img
                          className="h-4 w-4 object-contain"
                          src={india}
                          alt=""
                        />
                      </div>
                    </div>

                    <select
                      type="text"
                      name="billingstate"
                      {...register("billingState", {
                        required: "Select billingstate",
                      })}
                      className="w-full rounded-md  max-sm:mt-2 border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">State</option>
                      {states.length > 0
                        ? states.map((elem, idx) => (
                            <option key={idx} value={elem.value}>
                              {elem.title}
                            </option>
                          ))
                        : null}
                    </select>
                    <input
                      type="number"
                      {...register("billingZip", {
                        required: "Enter billingzip",
                      })}
                      className="flex-shrink-0 max-sm:mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="ZIP"
                    />
                  </div>
                  <div className="flex justify-between forErrors">
                    {errors.billingaddress && (
                      <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                        {errors.billingaddress.message}
                      </p>
                    )}
                    {errors.billingstate && (
                      <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                        {errors.billingstate.message}
                      </p>
                    )}
                    {errors.billingzip && (
                      <p className="text-right inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                        {errors.billingzip.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        ₹ {totalAmount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Shipping
                      </p>
                      <p className="font-semibold text-gray-900">₹ 9.99</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      ₹{" "}
                      {totalAmount > 0
                        ? parseFloat(totalAmount + 9.99).toFixed(2)
                        : 0}
                    </p>
                  </div>
                </>
                <button
                  type="submit"
                  className="mt-4 mb-8 max-sm:mb-20 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                >
                  Place Order
                </button>
              </form>
            </div>
          </>
        ) : (
          <Popup open={true} setOpen={true}></Popup>
        )}
      </motion.div>
      <MobileBottomNav />
    </>
  );
};

export default Checkout;
