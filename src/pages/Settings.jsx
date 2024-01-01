import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Page Transition variant import
import { pageTransitionVariant } from "../constants/Transition";

// images
import userImage from "../assets/images/womenmodel.png";

const Settings = ({ setProgress }) => {
  // Top Loading Bar dummy progress in future we will update the progress based on API calls succession or failure
  useEffect(() => {
    // callback function to call when the event triggers
    const onPageLoad = () => {
      setProgress(100);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("load", onPageLoad);
        setProgress(0);
      };
    }
  }, []);

  // settings requires user to login to access this page
  const user = true;
  const navigate = useNavigate();
  const [accountActive, setAccountActive] = useState(true);

  return (
    <>
      {user ? (
        <motion.div
          variants={pageTransitionVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="settingsContainer w-full flex flex-col h-full"
        >
          {/* Navlink */}
          <div className="settingNav w-full flex justify-between items-center py-5 px-10">
            <h1 className="text-xl font-bold font-[Montserrat] text-blue-600">
              Settings
            </h1>
            <div className="flex gap-10">
              <div className="flex gap-5 justify-center items-center">
                <p className="font-bold text-sm  text-gray-500 hover:text-gray-600 cursor-pointer  transition-all">
                  Blog
                </p>
                <p className="font-bold text-sm  text-gray-500 hover:text-gray-600 cursor-pointer  transition-all">
                  Community
                </p>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <i className="ri-chat-4-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"></i>
                <i
                  onClick={() => navigate("/")}
                  className="ri-home-5-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"
                ></i>
                <span className="text-gray-200 text-2xl">|</span>
                <i className="ri-question-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"></i>
                <i className="ri-logout-box-r-line text-2xl  text-gray-500  hover:text-red-400 cursor-pointer hover:scale-110 transition-all"></i>
                <div className="bg-blue-300 rounded-full h-9 w-9 overflow-hidden ml-5">
                  <img
                    className="w-full h-full object-cover"
                    src={userImage}
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-400" />
          {/* Setting body */}
          <div className="settingbody  w-full flex h-full ">
            <div className="sidebar w-[15%] border-r-2 h-full flex flex-col items-center justify-between">
              <div className="w-full flex  flex-col items-center">
                <div className="settingMenu  mt-5 hover:bg-gray-100 transition-all cursor-pointer   py-2 rounded-xl flex w-[75%]   gap-5">
                  <i className="pl-5 ri-user-star-line text-xl font-bold"></i>
                  <h1 className="text-xl font-bold font-[Montserrat]">
                    Account
                  </h1>
                </div>
                <div className="settingMenu  mt-5 hover:bg-gray-100 transition-all cursor-pointer   py-2 rounded-xl  flex w-[75%]  gap-5">
                  <i className="pl-5 ri-user-star-line text-xl font-bold"></i>
                  <h1 className="text-xl font-bold font-[Montserrat]">
                    Profile
                  </h1>
                </div>
              </div>
              <div className="w-[75%] h-[35%] rounded-xl   bg-[#2352FE] mb-5 flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center justify-center relative z-20">
                  <h1 className=" text-lg text-white font-bold ">Go Premium</h1>
                  <p className=" text-gray-50 text-xs">Best Quality</p>
                  <h1 className="cursor-pointer border-2 border-white py-2 px-4 rounded-xl text-white text-xs  mt-2">
                    Enter Beta
                  </h1>
                </div>
                <i className="absolute -rotate-45 -right-10 z-10 -top-14 text-9xl text-gray-200 opacity-45 ri-emphasis"></i>
              </div>
            </div>
            <div className="w-[85%] border-l  h-full">
              {accountActive ? (
                <div className="account w-full h-full p-5">
                  <h1 className="text-3xl font-bold">Account</h1>
                  <div className="w-full flex gap-16 items-start">
                    <div className="flex gap-5 flex-col mt-10 justify-center">
                      <div className=" flex gap-12  justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          className="outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="email"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className=" flex gap-12  justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          className="outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="username"
                          placeholder="Enter  username"
                        />
                      </div>
                      <div className=" flex gap-12 justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="pass"
                        >
                          Password
                        </label>
                        <input
                          className="outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="pass"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className=" flex gap-12  justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="confPass"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="confPass"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 flex-col mt-10 justify-center">
                      <div className=" flex gap-12  justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="date"
                        >
                          Date
                        </label>
                        <input
                          className="pointer-events-none outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="date"
                          defaultValue={new Date().toLocaleDateString()}
                        />
                      </div>
                      <div className=" flex gap-12  justify-between items-center">
                        <label
                          className="font-[Montserrat] text-gray-500"
                          htmlFor="location"
                        >
                          Location
                        </label>
                        <input
                          className="pointer-events-none outline-none border-2 text-lg py-2 rounded-2xl px-5"
                          type="text"
                          id="location"
                          defaultValue={"India"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex mt-5 justify-between">
                    <motion.div
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.99 }}
                      className="px-5 text-white font-bold font-[Montserrat] text-sm py-4 bg-green-400 cursor-pointer rounded-xl"
                    >
                      <p>Save Changes</p>
                    </motion.div>
                  </div>
                  <hr className="bg-gray-500 my-6" />
                  <h1 className="text-xl font-bold my-3">Danger Zone</h1>
                  <p className="w-[40%] mb-4 text-sm text-gray-500">
                    Once you delete your account, there is no going back. You
                    will lose all golden opportunities, Please be certain.
                  </p>
                  <button className="bg-red-300 cursor-pointer hover:bg-red-400 hover:text-red-800 font-bold text-red-500 px-5 py-4 text-center rounded-xl text-sm">
                    Delete Account
                  </button>
                </div>
              ) : (
                <div className="profile w-full h-full"></div>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Settings;
