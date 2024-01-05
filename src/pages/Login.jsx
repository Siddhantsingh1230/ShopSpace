import React, { useState, useEffect } from "react";
import ImageLogin from "../assets/images/loginImg.jpg";
import Bg from "../assets/images/loginBg.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../components/Loader.jsx";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
// state and dispatch imports
import { loginAsync } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ setProgress }) => {
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
  const [eyeClass, setEyeClass] = useState("ri-eye-off-line");
  const [passType, setPassType] = useState("password");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const navigateTosignup = () => {
    navigate("/signup");
  };
  const togglePass = () => {
    if (eyeClass === "ri-eye-line") {
      setEyeClass("ri-eye-off-line");
      setPassType("password");
    } else {
      setEyeClass("ri-eye-line");
      setPassType("text");
    }
  };
  const dispatch = useDispatch();
  const handleRegistration = (data) => {
    const { email, password } = data;
    const sanitizedObject = {
      email: email.trim(),
      password,
    };
    dispatch(loginAsync(sanitizedObject));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //fetching loading states from store to render Loader
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user) {
      // user successfully logged in
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <motion.div
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full h-full p-4 sm:p-16 lg:px-52  relative "
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="flex h-full w-full  overflow-hidden rounded-2xl inset-0 relative z-10 backdrop-sepia-0 bg-white/5">
          {/* image div */}
          <div className=" h-full w-1/2 overflow-hidden sm:flex ">
            <img
              className=" hidden md:h-full w-full  object-cover md:flex  "
              src={ImageLogin}
              alt="login img"
            ></img>
          </div>

          {/* content div  */}
          <div className="flex w-full p-8 sm:w-1/2 items-center justify-center sm:p-32">
            <form onSubmit={handleSubmit(handleRegistration)}>
              <h1 className="text-2xl xl:text-5xl font-bold text-purple-600 text-center">
                Space Shop
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <p
                    className="w-full  font-bold shadow-sm rounded-md py-2  text-purple-800 flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-slate-700  hover:text-purple-400  focus:shadow-sm focus:shadow-outline"
                    onClick={navigateTosignup}
                  >
                    <span className="ml-4">Create Account</span>
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4 my-4">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="text-sm text-white font-medium">
                    Or Login with e-mail
                  </span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>
              </div>
              <div className="relative mt-5 mb-2 h-fit text-white ">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <input
                  autoComplete="email"
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  {...register("email", {
                    required: "Enter email",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Enter valid email",
                    },
                  })}
                  className="w-full pr-9 rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm sm:text-sm "
                />
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
                  <i className="ri-at-line"></i>
                </span>
              </div>
              {errors.email && (
                <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                  {errors.email.message}
                </p>
              )}
              <div className="relative mt-5 mb-2 h-fit text-white ">
                <label htmlFor="password" className="sr-only">
                  {" "}
                  Password{" "}
                </label>
                <input
                  autoComplete="password"
                  type={passType}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  {...register("password", {
                    required: "Enter password",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                    - Can contain special characters`,
                    },
                  })}
                  className="w-full pr-9 rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm  sm:text-sm"
                />
                <span className="cursor-pointer absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
                  <i
                    className={eyeClass}
                    onClick={() => {
                      togglePass();
                    }}
                  ></i>
                </span>
              </div>
              {errors.password && (
                <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                  {errors.password.message}
                </p>
              )}
              <button className="flex bg-purple-800 p-2 rounded-md w-80 xl:w-96 hover:bg-purple-700 text-white my-8 justify-center ">
                Login
              </button>

              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by SpaceShop's{" "}
                <a
                  href="/"
                  className="text-purple-800 hover:text-white font-bold"
                >
                  Terms of Service{" "}
                </a>
                and its{" "}
                <a
                  href="/"
                  className="text-purple-800 hover:text-white font-bold"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mt-6 text-xs text-gray-600 text-center">
                <a
                  href="/"
                  className="w-full text-black-500 rounded-md p-2 text-purple-800 hover:text-white font-bold"
                >
                  Forgot Password ?
                </a>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
      {/*  Loader */}
      {status == "loading" ? <Loader /> : null}
      {/* if user is present redirect to home */}
    </>
  );
};

export default Login;
