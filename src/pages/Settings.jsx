import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Drawer from "react-modern-drawer";
import MobileBottomNav from "../components/MobileBottomNav";

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
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
  const toggleDeleteDrawer = () => {
    setOpenDeleteDrawer((prev) => !prev);
  };
  return (
    <>
      {user ? (
        <>
          <motion.div
            variants={pageTransitionVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="settingsContainer w-full flex flex-col h-full "
          >
            {/* Navlink */}
            <div className="settingNav w-full flex  justify-between items-center py-5 px-10 max-sm:flex-col max-sm:gap-5 max-sm:justify-center">
              <h1 className="text-xl font-bold font-[Montserrat] text-blue-600">
                Settings
              </h1>
              <div className="flex gap-10 max-sm:w-full">
                <div className="flex gap-5 justify-center items-center max-sm:hidden">
                  <p className="font-bold text-sm  text-gray-500 hover:text-gray-600 cursor-pointer  transition-all">
                    Blog
                  </p>
                  <p className="font-bold text-sm  text-gray-500 hover:text-gray-600 cursor-pointer  transition-all">
                    Community
                  </p>
                </div>
                <div className="flex gap-5 justify-center items-center max-sm:w-full max-sm:justify-between max-sm:flex-row-reverse">
                  <i className="max-sm:hidden ri-chat-4-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"></i>
                  <i
                    onClick={() => navigate("/")}
                    className="max-sm:hidden ri-home-5-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"
                  ></i>
                  <span className="max-sm:hidden text-gray-200 text-2xl">|</span>
                  <i className="max-sm:hidden ri-question-line text-2xl text-gray-500  hover:text-gray-600 cursor-pointer hover:scale-110 transition-all"></i>
                  <i className="ri-logout-box-r-line text-2xl  text-gray-500  hover:text-red-400 cursor-pointer hover:scale-110 transition-all"></i>
                  <div className="bg-blue-300 rounded-full h-9 w-9 overflow-hidden ml-5 max-sm:ml-0">
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
            <div className="settingbody  w-full flex h-full max-sm:flex-col">
              {/* Sidebar */}
              <div className="sidebar w-[15%] max-sm:w-full border-r-2 md:h-full flex flex-col items-center justify-between">
                <div className="w-full flex  flex-col items-center max-sm:flex-row max-sm:justify-center">
                  <div
                    onClick={() => setAccountActive(true)}
                    className="settingMenu   mt-5 hover:bg-gray-100 transition-all cursor-pointer   py-2 rounded-xl flex w-[75%]    gap-5"
                  >
                    <i className="pl-5 ri-user-star-line text-xl font-bold"></i>
                    <h1 className="text-xl font-bold font-[Montserrat]">
                      Account
                    </h1>
                  </div>
                  <div
                    onClick={() => setAccountActive(false)}
                    className="settingMenu   mt-5 hover:bg-gray-100 transition-all cursor-pointer    py-2 rounded-xl  flex w-[75%]  gap-5"
                  >
                    <i className="pl-5 ri-shield-flash-line text-xl font-bold"></i>
                    <h1 className="text-xl font-bold font-[Montserrat]">
                      Security
                    </h1>
                  </div>
                </div>
                <hr className="md:hidden max-sm:visible max-sm:border w-full my-5" />
                <div className="w-[75%] h-[35%] rounded-xl max-sm:hidden   bg-[#2352FE] mb-5 flex items-center justify-center relative overflow-hidden">
                  <div className="flex flex-col items-center justify-center relative z-20">
                    <h1 className=" text-lg text-white font-bold ">
                      Go Freemium
                    </h1>
                    <p className=" text-gray-50 text-xs">Best Quality</p>
                    <h1 className="cursor-pointer border-2 border-white py-2 px-4 rounded-xl text-white text-xs  mt-2">
                      Enter Beta
                    </h1>
                  </div>
                  <i className="absolute -rotate-45 -right-10 z-10 -top-14 text-9xl text-gray-200 opacity-45 ri-emphasis"></i>
                </div>
              </div>
              {/* Content */}
              <div className="w-[85%] max-sm:w-full border-l max-sm:border-0 h-full">
                {accountActive ? (
                  <div className="account w-full h-full p-5">
                    <h1 className="text-3xl font-bold">Account</h1>
                    <div className="w-full flex gap-16 items-start max-sm:flex-col max-sm:gap-5">
                      <div className="flex gap-5 flex-col mt-10 justify-center">
                        <div className=" flex gap-12  justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          <input
                            className="outline-none border-2 text-sm py-2 rounded-lg  px-5"
                            type="text"
                            id="email"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className=" flex gap-12  justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <input
                            className="outline-none border-2 text-sm py-2 rounded-lg  px-5"
                            type="text"
                            id="username"
                            placeholder="Enter  username"
                          />
                        </div>
                        <div className=" flex gap-12 justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="pass"
                          >
                            Password
                          </label>
                          <input
                            className="outline-none border-2 text-sm py-2 rounded-lg  px-5"
                            type="text"
                            id="pass"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className=" flex gap-12  justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="confPass"
                          >
                            Confirm Password
                          </label>
                          <input
                            className="outline-none border-2 text-sm py-2 rounded-lg  px-5"
                            type="text"
                            id="confPass"
                            placeholder="Confirm password"
                          />
                        </div>
                      </div>
                      <div className="flex gap-5 flex-col mt-10 justify-center max-sm:mt-0">
                        <div className=" flex gap-12  justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="date"
                          >
                            Date
                          </label>
                          <input
                            className="pointer-events-none outline-none border-2 text-sm py-2 rounded-lg  px-5"
                            type="text"
                            id="date"
                            defaultValue={new Date().toLocaleDateString()}
                          />
                        </div>
                        <div className=" flex gap-12  justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
                          <label
                            className="font-[Montserrat] text-gray-500"
                            htmlFor="location"
                          >
                            Location
                          </label>
                          <input
                            className="pointer-events-none outline-none border-2 text-sm py-2 rounded-lg  px-5"
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
                        className="px-5 text-white font-bold font-[Montserrat] text-sm py-4 bg-green-400 cursor-pointer rounded-xl max-sm:rounded-md max-sm:text-xs max-sm:py-3 max-sm:px-3"
                      >
                        <p>Save Changes</p>
                      </motion.div>
                    </div>
                    <hr className="bg-gray-500 my-6" />
                    <h1 className="text-xl font-bold my-3">Danger Zone</h1>
                    <p className="w-[40%] max-sm:w-full mb-4 text-sm text-gray-500">
                      Once you delete your account, there is no going back. You
                      will lose all golden opportunities, Please be certain.
                    </p>
                    <button
                      onClick={() => toggleDeleteDrawer()}
                      className="bg-red-300 cursor-pointer hover:bg-red-400 hover:text-red-800 font-bold text-red-500 px-5 py-4 text-center rounded-xl text-sm max-sm:rounded-md max-sm:text-xs max-sm:py-3 max-sm:px-3 max-sm:mb-20"
                    >
                      Delete Account
                    </button>
                  </div>
                ) : (
                  <div className="profileSetting w-full h-full flex justify-center md:items-center px-2">
                    <div className=" stripes bg-gray-100 rounded-md max-sm:w-full w-2/4 h-3/5 border flex justify-center items-center ">
                      <p className="text-sm  bg-blue-300 text-blue-700 rounded-lg px-3 py-3">
                        The Feature is currently in Beta
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <Drawer
            direction="bottom"
            onClose={toggleDeleteDrawer}
            open={openDeleteDrawer}
            enableOverlay={true}
            lockBackgroundScroll={true}
            size={"50vh"}
            className="rounded-t-3xl"
          >
            <div className="flex  w-full h-full justify-center items-center max-sm:px-10 ">
              <div className="flex md:border-2 md:rounded-lg md:shadow-xl md:py-7  md:px-5 flex-col md:w-[400px]  w-full justify-center items-center">
                <i className="text-4xl text-red-500 ri-triangle-fill mb-5"></i>
                <h1 className="font-bold mb-2">
                  Are you sure you want to delete your account permanently?
                </h1>
                <p className="text-xs text-gray-400">
                  Press "Delete account" to remove it permanently or "Cancel" if
                  you want to keep your benefits.
                </p>
                <div className="flex w-full mt-5 justify-between">
                  <button
                    onClick={() => toggleDeleteDrawer()}
                    className="border rounded-md py-2 px-3 hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => toggleDeleteDrawer()}
                    className="bg-red-400 rounded-md py-2 px-3 hover:bg-red-300 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </Drawer>
          <MobileBottomNav/>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Settings;
