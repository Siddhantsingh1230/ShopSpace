import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import Toasts from "../app/Toasts.js";
import { useForm } from "react-hook-form";
// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";
import { resetPassword } from "../api/auth.js";

const ResetPassword = ({ setProgress }) => {
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = async (inputData) => {
    setLoading(true);
    if (inputData.password === inputData.confPassword) {
      try {
        const data = await resetPassword(id, inputData.password, token);
        Toasts("success", data?.message);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        console.log(error);
        Toasts("error", error.response?.data.message);
        setLoading(false);
      }
    } else {
      Toasts("error", "Passwords are not matching");
      setLoading(false);
    }
  };
  return (
    <>
      <motion.form
        onSubmit={handleSubmit(handleClick)}
        variants={pageTransitionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col relative overflow-hidden w-full justify-center items-center h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black background-animate"
      >
        <div className="rounded-lg p-10 ">
          <h1 className="text-5xl max-sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black  font-bold mb-10">
            Reset Password
          </h1>
          <div className="relative my-5">
            <input
              type="password"
              placeholder="New Password"
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
              className="h-9 bg-transparent text-white pl-3 border border-gray-500 w-full rounded-md pe-10 shadow-sm sm:text-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              <i className="ri-git-repository-private-fill"></i>
            </span>
          </div>
          <div className="relative my-5">
            <input
              type="password"
              {...register("confPassword", {
                required: "Confirm your  password",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: `- at least 8 characters
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                - Can contain special characters`,
                },
              })}
              placeholder="Confirm Password"
              className="h-9 bg-transparent text-white pl-3  border border-gray-500  w-full rounded-md pe-10 shadow-sm sm:text-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              <i className="ri-git-repository-private-fill"></i>
            </span>
          </div>

          {/* send button */}
          <button
            type="submit"
            className="select-none cursor-pointer w-full hover:bg-transparent active:opacity-55 border hover:text-white transition-all p-2 rounded-lg bg-white flex justify-center items-center "
          >
            {!loading ? (
              <p className="font-[Montserrat]">Change password</p>
            ) : (
              <div className="p-1 max-sm:scale-95 ">
                <Spinner />
              </div>
            )}
          </button>
        </div>
        {(errors.password || errors.confPassword) && (
          <div className="rounded-lg p-10 w-[500px] max-sm:w-full">
            <p className="text-red-500">Errors</p>
            {errors.password && (
              <p className="inline-flex items-center rounded-md text-xs font-medium text-red-700 ">
                Password: {errors.password.message}
              </p>
            )}
            <br />
            {errors.confPassword && (
              <p className="inline-flex items-center rounded-md   text-xs font-medium text-red-700 ">
                Confirm Password: {errors.confPassword.message}
              </p>
            )}
          </div>
        )}

        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line absolute top-5 left-5 hover:text-white text-gray-500 transition-all text-xl cursor-pointer"
        ></i>
      </motion.form>
    </>
  );
};

export default ResetPassword;
