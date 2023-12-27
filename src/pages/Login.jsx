import React,{useState} from "react";
import ImageLogin from "../assets/images/loginImg.jpg";
import Bg from "../assets/images/loginBg.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const [eyeClass, setEyeClass] = useState("ri-eye-off-line");
  const [passType, setPassType] = useState("password");
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
  return (
    <div
      className="w-full h-full sm:p-16 lg:px-48  relative "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex h-full w-full  overflow-hidden rounded-2xl inset-0 relative z-10 backdrop-sepia-0 bg-white/5">
        {/* image div */}
        <div className=" h-full w-1/2 overflow-hidden sm:hidden ">
          <img
            className=" hidden md:h-full w-full  object-cover md:flex  "
            src={ImageLogin}
            alt="login img"
          ></img>
        </div>

        {/* content div  */}
        <div className="flex w-full p-4 sm:w-1/2 items-center justify-center sm:p-24">
          <form onSubmit={handleSubmit(handleRegistration)} >
            <h1 className="text-xl xl:text-3xl font-bold text-white text-center">
              Login
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-md py-2  text-purple-800 flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-purple-400  hover:text-white  focus:shadow-sm focus:shadow-outline"
                  onClick={navigateTosignup}
                >
                  <span className="ml-4">Create Account</span>
                </button>
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
                {...register("email", {
                  required: "Enter email",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "Enter valid email",
                  },
                })}
                className="w-full rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm sm:text-sm "
              />
              <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/  "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                    clipRule="evenodd"
                  />
                </svg>
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
                className="w-full rounded-md bg-transparent border-2 border-purple-800 p-2 shadow-sm  sm:text-sm"
              />
              <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-300">
              <i
                  className={eyeClass}
                  onClick={() => {
                    togglePass();
                  }}></i>
              </span>
            </div>
            {errors.password && (
              <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                {errors.password.message}
              </p>
            )}
            <button className="flex bg-purple-800 p-2 rounded-md w-96 hover:bg-purple-700 text-white my-8 justify-center ">
              Login
            </button>

            <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by SpaceShop's{" "}
                    <a href="#" className="text-purple-800 font-bold">
                      Terms of Service{" "}
                    </a>
                    and its{" "}
                    <a href="#" className="text-purple-800 font-bold">
                      Privacy Policy
                    </a>
                  </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                   
                    <a href="/" className="w-full text-black-500 rounded-md p-2 text-purple-800 hover:bg-purple-950 hover:text-white font-bold">
                      Forgot Password ?
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
    </div>
  );
};

export default Login;
