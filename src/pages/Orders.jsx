import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
  const user = true;
  const orders = [
    {
      id: 1,
      checkoutEmail: "ss@mail.com",
      billingaddress: "dd",
      billingstate: "gujarat",
      billingzip: "34",
      userId: "2023-10-01T05:28:37.235Z",
      paymentMethod: "CashOnDelivery",
      placedOn: "03/10/2023",
      // deliveredOn :
      cart: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          ],
          quantity: 1,
          userId: "2023-10-01T05:28:37.235Z",
        },
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          ],
          quantity: 1,
          userId: "2023-10-01T05:28:37.235Z",
        },
      ],
      totalAmount: 829,
      status: "shipped",
    },
    {
      id: 2,
      checkoutEmail: "ss@mail.com",
      billingaddress: "ss",
      billingstate: "gujarat",
      billingzip: "343421",
      userId: "2023-10-01T05:28:37.235Z",
      paymentMethod: "CashOnDelivery",
      placedOn: "05/08/2023",
      cart: [
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          ],
          quantity: 1,
          userId: "2023-10-01T05:28:37.235Z",
        },
      ],
      totalAmount: 280,
      status: "pending",
    },
    {
      id: 3,
      checkoutEmail: "ss@mail.com",
      billingaddress: "dd",
      billingstate: "gujarat",
      billingzip: "34",
      userId: "2023-10-01T05:28:37.235Z",
      paymentMethod: "CashOnDelivery",
      placedOn: "07/04/2022",
      cart: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          ],
          quantity: 1,
          userId: "2023-10-01T05:28:37.235Z",
        },
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          ],
          quantity: 1,
          userId: "2023-10-01T05:28:37.235Z",
        },
      ],
      totalAmount: 829,
      status: "shipped",
    },
  ];
  return (
    <>
      <section className=" flex flex-col absolute p-5 sm:px-36 sm:py-8 w-full ">
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

        <h1 className="my-6 font-sans text-start text-2xl sm:text-4xl font-bold text-gray-900 ">
          Your Orders<span className="text-blue-600">.</span>
        </h1>
        <div className="flex flex-col max-w-screen-9xl">
          {user && orders.length > 0 ? (
            orders.map((order) =>
              order.cart.map((item, idx) => (
                <div className=" bg-white cursor-pointer" key={idx}>
                  <div className="flex flex-col gap-2 m-2 border-2 border-gray-400 rounded-xl">
                    <div className="flex  justify-between bg-gray-100 rounded-t-xl p-3 border-b-2 border-gray-400">
                      <div className="flex gap-3 sm:gap-8 sm:text-sm text-xs">
                        <div className="flex flex-col">
                          <p> ORDER PLACED</p>
                          <p>{order.placedOn}</p>
                        </div>
                        <div className="flex flex-col ">
                          <p>TOTAL</p>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            document
                              .getElementById(`orderDetail-${order.id}-${idx}`)
                              .classList.remove("hidden");
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          View order detail
                        </button>
                      </div>
                    </div>

                    {/* order details */}
                    <div
                      id={`orderDetail-${order.id}-${idx}`}
                      className="hidden p-3 sm:px-10 sm:py-5"
                    >
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p className="text-2xl font-bold">Order Details</p>
                          <p className="mt-2 text-sm ">
                            Ordered on {order.placedOn}
                          </p>
                        </div>
                        <i className="ri-close-circle-fill text-2xl sm:text-3xl "
                        onClick = {() => {
                          document
                            .getElementById(`orderDetail-${order.id}-${idx}`)
                            .classList.add("hidden");
                        }}></i>
                      </div>

                      <div className="grid sm:grid-cols-3 p-3 mt-3 border-2 border-gray-500 rounded-xl">
                        <div className="flex flex-col  capitalize  ">
                          <p className="font-bold ">Shipping Address</p>
                          {/* user name to be changed*/}
                          <p className="align-start text-sm mt-2">Adam</p>
                          <p className="align-start text-sm">
                            {" "}
                            {order.billingaddress}
                          </p>
                          <p className="align-start text-sm">
                            {order.billingstate}
                          </p>
                        </div>
                        <hr className="sm:hidden bg-slate-200 my-4"></hr>
                        <div className="flex flex-col capitalize">
                          <p className="font-bold ">payment method</p>
                          <p className="align-self-start text-sm mt-2">
                            {order.paymentMethod}
                          </p>
                        </div>
                        <hr className="sm:hidden bg-slate-200 my-4"></hr>
                        <div className="gridcapitalize">
                          <p className="font-bold">Order summary</p>
                          <div className="grid grid-cols-2 2xl:pr-24">
                            <div className="grid  capitalize text-sm mt-2">
                              <p>item(s) subtotal:</p>
                              <p>shipping:</p>
                              <p>total:</p>
                              <p className="font-bold">grand total:</p>
                            </div>
                            <div className="grid gap-1 capitalize text-sm">
                              <p className="justify-self-end ">₹{item.price}</p>
                              <p className="justify-self-end">₹00</p>
                              <p className="justify-self-end ">₹{item.price}</p>
                              <p className="justify-self-end font-bold">
                                ₹{item.price}x
                              </p>
                            </div>
                            <div className="grid gap-1 capitalize"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex max-sm:flex-col-reverse gap-2 justify-between p-6">
                      <div className="flex max-sm:flex-col gap-4 ">
                        <div className="flex gap-2">
                          <img
                            src={item.thumbnail}
                            alt=""
                            className=" object-fill sm:h-[100px] w-[100px] sm:w-[150px] rounded-md"
                          />
                          <div className="flex flex-col gap-1 sm:hidden">
                            <h2 className="text-slate-700 capitalize ">
                              ₹{item.title}
                            </h2>
                            <p className="text-slate-400 text-sm sm:hidden">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className=" flex flex-col sm:px-2 justify-between">
                          <div>
                            <h2 className="text-slate-700 capitalize max-sm:hidden">
                              {item.title}
                            </h2>
                            <p className="text-slate-400 text-sm max-sm:hidden">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {
                              order.status === "pending" ? (
                              <button className="bg-red-400 hover:bg-red-500 text-sm p-2 rounded-md border-2 border-red-500 max-sm:w-full sm:self-start">
                              Cancel Order
                            </button>
                            ):null
                            }
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-sm p-2 rounded-md border-2 border-yellow-500 max-sm:w-full sm:self-start">
                              Buy again
                            </button>
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
                                {item.rating}
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
              ))
            )
          ) : (
            <p>No Orders 😢</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Orders;
