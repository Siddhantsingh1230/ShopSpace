import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import Loader from "../components/Loader";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MobileBottomNav from "../components/MobileBottomNav";
import Stars from "../components/Stars";
import { useSelector } from "react-redux";
import Modal from "../components/Model";
import ContentPlaceholder from "../components/ContentPlaceholder";
import { incViewCount } from "../api/products";

// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import { getProductById } from "../api/products";
import { addReview, getReviewOfProductByid } from "../api/review";
import Toasts from "../app/Toasts";
import { addTocart } from "../api/cart.js";

const colors = [
  { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
  { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
  { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
];
const sizes = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
];
const highlights = [
  "Hand cut and sewn locally",
  "Dyed with our proprietary colors",
  "Pre-washed & pre-shrunk",
  "Ultra-soft 100% cotton",
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProductDetails = ({ setProgress }) => {
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
  // fetching id param from url
  const { id } = useParams();
  // Product to be feteched and display
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [showError, setShowError] = useState(false);
  const [imgLoad, setImgLoad] = useState(true);
  const handleImageLoad = () => {
    setImgLoad(false);
  };
  const handleImageError = () => {
    setImgLoad(true);
  };
  // Fx to fetch product from server
  const fetchProduct = async (id) => {
    try {
      const data = await getProductById(id);
      setProduct({ ...data.product });
      setImages([...data.product.images]);
    } catch (error) {
      // console.log(error);
      setShowError(true);
    }
  };
  // Fx to fetch reviews from server
  const fetchReviews = async (id) => {
    try {
      const data = await getReviewOfProductByid(id);
      setReviews(data?.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to check if perfect product id is provide or not if not then show error message
  useEffect(() => {
    if (!id) {
      return setShowError(true); // no need still used to ensure security
    }
    fetchProduct(id);
    fetchReviews(id);
    incViewCount(id);
  }, []);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  let [reviews, setReviews] = useState([]);

  const [reviewText, setReviewText] = useState("");
  //navigate obj
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  // opening a modal if user is not logged in
  const [openModal, setOpenModal] = useState(false);

  const createReview = async (e) => {
    if (user) {
      try {
        if (reviewText.trim().length !== 0) {
          const reviewObj = {
            productId: product._id,
            userId: user._id,
            content: reviewText.trim(),
          };
          await addReview(reviewObj);
          await fetchReviews(id);
          // Give toast here  on successfull review add
          Toasts("info", "Review Added");
        }
      } catch (error) {
        Toasts("error", error.response?.data.message || "NET_ERROR");
      }
    } else {
      //  open modals here if no user is logged in
      setOpenModal(true);
    }
  };

  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute flex w-full"
      >
        {!showError ? (
          product ? (
            <div className="bg-white w-full px-3 md:px-16 flex justify-center flex-col">
              <div className="pt-6 md:pt-10">
                <nav className="flex " aria-label="Breadcrumb">
                  <ol className="inline-flex md:space-x-1  rtl:space-x-reverse text-md md:text-xl">
                    <li className="inline-flex ">
                      <Link
                        to="/"
                        className="inline-flex items-center   text-gray-800 font-bold hover:text-blue-600 dark:text-gray-800 "
                      >
                        <svg
                          className="w-3 h-3 me-2.5"
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
                        <Link
                          to="/products"
                          className="ms-1 font-bold text-gray-700 hover:text-blue-600 md:ms-2 "
                        >
                          Products
                        </Link>
                      </div>
                    </li>
                    <li aria-current="page">
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
                        <span className="ms-1 font-bold hover:text-blue-600 md:ms-2 dark:text-gray-800">
                          {product?.title?.split(" ")[0]}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                {/* new image display design */}

                <div className="flex flex-col w-full md:flex-row-reverse pt-8 xl:px-40 md:h-[550px] gap-4 pb-6 justify-center ">
                  <div className="flex w-full h-[485px] max-sm:p-1 rounded-md items-center justify-center max-sm:h-full">
                    <img
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      id="displayImage"
                      src={images?.length > 0 ? images[0] : ""}
                      alt={product?.title}
                      className=" w-full max-sm:h-64 rounded-md object-cover md:max-h-full"
                    />
                  </div>
                  {imgLoad && <ContentPlaceholder />}
                  <div className="grid grid-cols-5 sm:flex sm:flex-col  md:grid-cols-5 md:max-h-full justify-between w-full  max-sm:h-[72px] md:w-64 sm:overflow-scroll">
                    {images?.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt="image"
                        className=" w-full h-20 sm:h-32 object-cover object-center rounded-lg hover:border-2 hover:border-gray-600 p-1 cursor-pointer"
                        onClick={() => {
                          document.getElementById("displayImage").src = image;
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Product info */}
                <hr className="w-full border-1 border-gray-400"></hr>
                <div className="mx-auto max-w-2xl  pb-16 pt-5  lg:grid lg:max-w-full lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-8 ">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 ">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {product?.title}
                    </h1>
                  </div>

                  {/* Options */}
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="max-sm:text-xl text-3xl tracking-tight text-gray-900">
                      ₹ {product?.price}
                    </p>

                    <div className="mt-6">
                      {/* Colors */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Color
                        </h3>

                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-4"
                        >
                          <RadioGroup.Label className="sr-only">
                            Choose a color
                          </RadioGroup.Label>
                          <div className="flex items-center space-x-3">
                            {colors.map((color) => (
                              <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked }) =>
                                  classNames(
                                    color.selectedClass,
                                    active && checked
                                      ? "ring ring-offset-1"
                                      : "",
                                    !active && checked ? "ring-2" : "",
                                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                  )
                                }
                              >
                                <RadioGroup.Label as="span" className="sr-only">
                                  {color.name}
                                </RadioGroup.Label>
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.class,
                                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                                  )}
                                />
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Sizes */}
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            Size
                          </h3>
                          <a
                            href="no-referer"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Size guide
                          </a>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-4"
                        >
                          <RadioGroup.Label className="sr-only">
                            Choose a size
                          </RadioGroup.Label>
                          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                            {sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ active }) =>
                                  classNames(
                                    size.inStock
                                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                                    active ? "ring-2 ring-indigo-500" : "",
                                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label as="span">
                                      {size.name}
                                    </RadioGroup.Label>
                                    {size.inStock ? (
                                      <span
                                        className={classNames(
                                          active ? "border" : "border-2",
                                          checked
                                            ? "border-indigo-500"
                                            : "border-transparent",
                                          "pointer-events-none absolute -inset-px rounded-md"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                      >
                                        <svg
                                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                          viewBox="0 0 100 100"
                                          preserveAspectRatio="none"
                                          stroke="currentColor"
                                        >
                                          <line
                                            x1={0}
                                            y1={100}
                                            x2={100}
                                            y2={0}
                                            vectorEffect="non-scaling-stroke"
                                          />
                                        </svg>
                                      </span>
                                    )}
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <button
                        type="submit"
                        onClick={async (e) => {
                          if (!user) {
                            setOpenModal(true);
                          }
                          //add to cart
                          await addTocart(user._id, product._id, 1);
                          Toasts("info", "🛒 Added to cart");
                        }}
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-sm font-medium text-gray-900">
                        Highlights
                      </h3>

                      <div className="mt-4">
                        <ul className="list-disc space-y-2 pl-4 text-sm">
                          {highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Review Section */}
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900 mb-2">
                        Write a Review
                      </h2>
                      <div>
                        <label className="sr-only">Order notes</label>
                        <div className=" overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600  focus-within:ring-2 focus-within:ring-blue-600 p-2 ">
                          <textarea
                            className="notification w-full resize-none border-none outline-none align-top focus:ring-0 sm:text-sm"
                            rows="5"
                            onChange={(e) => setReviewText(e.target.value)}
                            value={reviewText}
                            placeholder="Write your review here ..."
                          />
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-1 bg-white p-3">
                          <button
                            type="button"
                            onClick={() => setReviewText("")}
                            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                          >
                            Clear
                          </button>

                          <button
                            type="button"
                            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                            onClick={(e) => {
                              createReview(e);
                              setReviewText("");
                            }}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <h2 className="text-sm font-medium text-gray-900 mt-2 ">
                        Ratings and Reviews
                      </h2>
                      {/* Reviews */}
                      <div className="mt-4 mb-4">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <Stars
                              star={Math.round(parseInt(product.rating))}
                            />
                          </div>
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                          <a
                            href={"#"}
                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {117} reviews
                          </a>
                        </div>
                      </div>

                      <ul role="list" className="divide-y divide-gray-100">
                        {reviews.length > 0 ? (
                          reviews.map((review, idx) => (
                            <li
                              key={idx} // after creating backend use review id here
                              className="flex justify-between gap-x-6 py-5"
                            >
                              <div className="flex min-w-0 gap-x-4">
                                {/* <img
                              className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50"
                              src={shopping}
                              alt=""
                            /> */}
                                <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold  leading-6 text-gray-900">
                                    {review.content}
                                  </p>
                                  <p className="mt-1 truncate text-xs leading-5 text-gray-5 00">
                                    User: {review.userId}
                                  </p>
                                </div>
                              </div>
                              <div className="flex ">
                                <div className=" flex items-end flex-col  ">
                                  <p className="mt-1 text-xs leading-5 text-gray-500">
                                    {String(
                                      `${String(
                                        new Date(review.createdAt).getDate()
                                      ).padStart(2, "0")}/${String(
                                        new Date(review.createdAt).getMonth() +
                                          1
                                      ).padStart(2, "0")}/${new Date(
                                        review.createdAt
                                      ).getFullYear()}`
                                    )}
                                  </p>

                                  <i className="ri-checkbox-circle-fill h-4 w-4 text-blue-500"></i>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <p>Be the first to review</p>
                        )}
                      </ul>
                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">
                          {product.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )
        ) : (
          <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div>
                  <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <svg
                      class="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      OOPs Something went wrong
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        There was an error processing your request.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6" onClick={() => navigate("/")}>
                  <button class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                    Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/*  Mobile Navbar */}
      <MobileBottomNav />
      {/* Open modal if user is not logged in */}
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default ProductDetails;
