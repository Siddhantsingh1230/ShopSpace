import React, { useState, useEffect } from "react";
import ImageLogin from "../assets/images/signuppage.jpg";
import Bg from "../assets/images/loginBg.jpg";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import { Link } from "react-router-dom";

const Signup = ({ setProgress }) => {
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

  const [userName, setUserName] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eyeClass, setEyeClass] = useState("ri-eye-off-line");
  const [passType, setPassType] = useState("password");
  const togglePass = () => {
    if (eyeClass === "ri-eye-line") {
      setEyeClass("ri-eye-off-line");
      setPassType("password");
    } else {
      setEyeClass("ri-eye-line");
      setPassType("text");
    }
  };
  // Send Data to Server (Backend)
  const handleRegistration = async (formData) => {
    const { name, mobileno, email, password, username } = formData;
    const sanitizedObject = {
      username: name.trim(),
      mobileNo: parseInt(mobileno),
      email: email.trim(),
      password,
    };
    console.log(sanitizedObject);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
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
        <div className=" w-1/2 overflow-hidden sm:flex ">
          <img
            className=" hidden md:h-full w-full  object-cover md:flex  "
            src={ImageLogin}
            alt="login img"
          ></img>
        </div>

        {/* content div  */}
        <div className="flex w-full p-8 sm:w-1/2 items-center justify-center sm:p-32">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <h1 className="text-2xl xl:text-4xl font-bold text-purple-600 text-center">
              Create Account
            </h1>
            <div className="relative mt-8  h-fit text-white bg-transparent ">
              <label htmlFor="UserEmail" className="sr-only">
                name
              </label>
              <input
                type="text"
                id="name"
                placeholder="username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value.trim());
                }}
                {...register("name", {
                  required: "Enter Username",
                  pattern: {
                    value: /[\S\s]+[\S]+/,
                    message: "Enter valid username",
                  },
                })}
                className="w-full pr-9 rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm sm:text-sm "
              />
              <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
                <i className="ri-user-line"></i>
              </span>
            </div>
            {errors.name && (
              <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                {errors.name.message}
              </p>
            )}
            <div className="relative mt-5  h-fit text-white ">
              <label htmlFor="UserEmail" className="sr-only">
                Mobileno
              </label>
              <input
                type="tel"
                id="mobileno"
                placeholder="Mobile no."
                value={mobileNo}
                onChange={(e) => {
                  setMobileNo(e.target.value.trim());
                }}
                {...register("mobileno", {
                  required: "Enter Phone No.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter valid Phone No.",
                  },
                })}
                className="w-full pr-9 rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm sm:text-sm "
              />
              <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
                <i className="ri-phone-line"></i>
              </span>
            </div>
            {errors.mobileno && (
              <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                {errors.mobileno.message}
              </p>
            )}
            <div className="relative mt-5 h-fit text-white ">
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
                  setEmail(e.target.value.trim());
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
            <div className="relative mt-5 h-fit text-white ">
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
              <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
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
            <button className="flex bg-purple-800 p-3 rounded-md w-80 xl:w-96 hover:bg-purple-700 text-white my-6 justify-center ">
              <i className="ri-user-add-line px-2"></i>Sign Up
            </button>

            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an acoount ?
              <Link
                to="/login"
                className="w-full text-black-500 rounded-md p-2 text-purple-800 hover:text-white font-bold"
              >
                LogIn
              </Link>
            </p>
            <p className="mt-4 text-xs text-gray-600 text-center">
              I agree to abide by SpaceShop's{" "}
              <a
                href="/"
                className="text-purple-800 font-bold hover:text-white"
              >
                Terms of Service{" "}
              </a>
              and its{" "}
              <a
                href="/"
                className="text-purple-800 font-bold hover:text-white"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
      {/* this add blurry effect on our background */}
      {/* <div
        className="absolute inset-0 bg-cover bg-slate-900 "
        style={{
          // backgroundImage: `url(${Bg})`,
          filter: "blur(5px)",
          border: "1px solid transparent",
        }}
      /> */}
    </motion.div>
  );
};

export default Signup;
