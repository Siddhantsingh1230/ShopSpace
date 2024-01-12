import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileBottomNav from "../components/MobileBottomNav";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";
import { useSelector, useDispatch } from "react-redux";
import CartSkeleton from "../components/CartSkeleton";
import { getOrderAsync, deleteOrderAsync } from "../slices/orderSlice";
import Toasts from "../app/Toasts";

const Orders = ({ setProgress }) => {
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
  const status = useSelector((state) => state.order.status);
  const userOrder = useSelector((state) => state.order.orders);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      dispatch(getOrderAsync(user._id));
    }
  }, []);

  useEffect(() => {
    if (userOrder?.length > 0) {
      setOrders([...userOrder]);
    }
  }, [userOrder]);

  const cancelOrder = (id, userId) => {
    dispatch(deleteOrderAsync({ id, userId }));
    Toasts("info", "👻 Removed successfully");
  };

  return (
    <>
      <motion.section
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=" flex flex-col absolute p-5 sm:px-36 sm:py-8 w-full "
      >
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
                  Orders
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="select-none my-6 font-sans text-start text-2xl sm:text-4xl font-bold text-gray-900">
          Your Orders<span className="text-blue-600">.</span>
        </h1>
        <div className="flex flex-col gap-9 max-w-screen-9xl max-sm:mb-20 rounded-lg">
          {status === "loading" ? (
            new Array(5).fill(0).map((_, key) => <CartSkeleton key={key} />)
          ) : orders?.length > 0 ? (
            orders.map((order, key) => (
              <div
                className="flex flex-col border border-gray-300 rounded-md"
                key={key}
              >
                <div className="flex  justify-between bg-gray-100 rounded-t-md p-3 border-b border-gray-200">
                  <div className="flex gap-3 sm:gap-8 sm:text-sm text-xs">
                    <div className="flex flex-col">
                      <p> ORDER PLACED</p>
                      <p>{order.placedOn}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        document
                          .getElementById(`orderDetail-${order._id}`)
                          .classList.remove("hidden");
                      }}
                      className="text-blue-600 hover:underline max-sm:text-xs"
                    >
                      View order detail
                    </button>
                  </div>
                </div>
                {/* order details */}
                <div
                  id={`orderDetail-${order._id}`}
                  className="hidden p-3  m-2"
                >
                  <div className="flex justify-between ">
                    <div className="flex flex-col">
                      <p className="text-2xl max-sm:text-lg font-bold">
                        Order Details
                      </p>
                      {order.status == "pending" ? (
                        <p className="mt-1 text-sm ">
                          Arriving on : {order.deliveredOn}
                        </p>
                      ) : order.status === "cancelled" ? (
                        <p className="mt-1 text-sm "></p>
                      ) : (
                        <p className="mt-1 text-sm ">
                          Delivered on
                          {order.deliveredOn}
                        </p>
                      )}
                    </div>
                    <i
                      className="ri-close-circle-fill text-2xl sm:text-3xl  "
                      onClick={() => {
                        document
                          .getElementById(`orderDetail-${order._id}`)
                          .classList.add("hidden");
                      }}
                    ></i>
                  </div>
                  <hr className="mt-4 bg-slate-300 "></hr>
                  <div className="grid sm:grid-cols-3 p-2 mt-1 ">
                    <div className="flex flex-col  capitalize  ">
                      <p className="font-bold text-sm ">Shipping Address</p>
                      {/* user name to be changed*/}
                      <p className="align-start text-sm mt-1">Adam</p>
                      <p className="align-start text-sm">
                        {" "}
                        {order.billingAddress}
                      </p>
                      <p className="align-start text-sm">
                        {order.billingState}
                      </p>
                    </div>
                    <hr className="sm:hidden  my-3"></hr>
                    <div className="flex flex-col capitalize">
                      <p className="font-bold text-sm">payment method</p>
                      <p className="align-self-start text-sm mt-1">
                        {order.paymentMethod}
                      </p>
                    </div>
                    <hr className="sm:hidden  my-3"></hr>
                    <div className="gridcapitalize">
                      <p className="font-bold text-sm">Order summary</p>
                      <div className="grid grid-cols-2 2xl:pr-24">
                        <div className="grid  capitalize text-sm mt-2">
                          <p>item(s) subtotal:</p>
                          <p>shipping:</p>
                          <p className="font-bold">grand total:</p>
                        </div>
                        <div className="grid gap-1 capitalize text-sm">
                          <p className="justify-self-end ">
                            ₹{order.totalAmount}
                          </p>
                          <p className="justify-self-end"> + ₹ 9.99</p>
                          <hr className="justify-self-end mt-2 w-1/3 border border-gray-300"></hr>
                          <p className="justify-self-end pt-2">
                            ₹{order.totalAmount + 9.99}
                          </p>
                        </div>
                        <div className="grid gap-1 capitalize"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  {order.cart.map((item, idx) => (
                    <div className=" bg-white cursor-pointer" key={idx}>
                      <div className="flex flex-col border my-2 border-gray-200 p-4 rounded-md">
                        <div className="flex max-sm:flex-col-reverse gap-2 justify-between">
                          <div className="flex max-sm:flex-col gap-4 ">
                            <div className="flex gap-2 my-2">
                              <img
                                src={item.productId.thumbnail}
                                alt="img"
                                className=" object-fill  sm:h-[100px] h-[75px] w-[100px] sm:w-[150px] rounded-md"
                              />
                              <div className="flex flex-col gap-1 sm:hidden">
                                <h2 className="text-slate-700 capitalize ">
                                  {item.productId.title}
                                </h2>
                                <p className="text-slate-400 text-sm sm:hidden">
                                  {item.productId.description.slice(0, 45)}
                                  {item.productId.description.length > 45 &&
                                    " ..."}
                                </p>
                              </div>
                            </div>

                            <div className=" flex flex-col sm:px-2 justify-between">
                              <div>
                                <h2 className="text-slate-700 capitalize max-sm:hidden">
                                  {item.productId.title}
                                </h2>
                                <p className="text-slate-400 text-sm max-sm:hidden">
                                  {item.productId.description.slice(0, 120)}
                                  {item.productId.description.length > 120 &&
                                    " ..."}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/productdetail/${item.productId._id}`
                                    )
                                  }
                                  className="bg-yellow-400 hover:bg-yellow-500 text-sm text-center p-2 rounded-md border-2 border-yellow-500 max-sm:w-full sm:self-start"
                                >
                                  Buy again
                                </div>
                                <div className=" max-sm:hidden inline-flex items-center rounded-lg bg-white p-2 shadow-md self-end">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-yellow-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span className="text-slate-400 ml-1 text-sm">
                                    {item.productId.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end">
                            {order.status === "pending" ? (
                              <div>
                                <span
                                  className={` max-sm:hidden capitalize flex w-24 text-md font-bold text-yellow-800 bg-yellow-300 p-2 mt-4 items-center justify-center rounded-3xl`}
                                >
                                  {order.status}
                                </span>
                                <div
                                  className={`sm:hidden flex capitalize items-center gap-1 text-xs`}
                                >
                                  <div
                                    className={`bg-yellow-300 rounded-full h-2 w-2 border-2 border-yellow-600`}
                                  ></div>
                                  {order.status}
                                </div>
                              </div>
                            ) : order.status === "cancelled" ? (
                              <div>
                                <span
                                  className={` max-sm:hidden flex capitalize w-24 text-md font-bold text-red-800 bg-red-300 p-2 mt-4 items-center justify-center rounded-3xl`}
                                >
                                  {order.status}
                                </span>
                                <div
                                  className={`sm:hidden flex  items-center gap-1 capitalize text-xs`}
                                >
                                  <div
                                    className={`bg-red-300 rounded-full h-2 w-2 border-2 border-red-600`}
                                  ></div>
                                  {order.status}
                                </div>
                              </div>
                            ) : (
                              <div>
                                <span
                                  className={` max-sm:hidden flex w-24 capitalize text-md font-bold text-green-800 bg-green-300 p-2 mt-4 items-center justify-center rounded-3xl`}
                                >
                                  {order.status}
                                </span>
                                <div
                                  className={`sm:hidden flex  items-center gap-1 capitalize text-xs `}
                                >
                                  <div
                                    className={`bg-green-300 rounded-full h-2 w-2 border-2 border-green-600 `}
                                  ></div>
                                  {order.status}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {order.status === "pending" ? (
                  <button
                    onClick={() => {
                      setOrders((prev) =>
                        prev.filter(
                          (item) => item._id !== order._id
                        )
                      );
                      cancelOrder(order._id, user._id);
                    }}
                    className="bg-red-400 hover:bg-red-500 text-sm p-2 rounded-md border-2 border-red-500 w-[150px] self-end mb-3 sm:mr-4 mr-6 "
                  >
                    Cancel Order
                  </button>
                ) : null}
              </div>
            ))
          ) : (
            <p className="w-full text-center">No Orders 😢</p>
          )}
        </div>
      </motion.section>
      <MobileBottomNav />
    </>
  );
};

export default Orders;
