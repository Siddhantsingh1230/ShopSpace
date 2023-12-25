import { useEffect } from "react";
import Logo from "../assets/images/logo.svg";

const Home = ({ setProgress }) => {
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

  return (
    <>
      <div className="container w-[88%] mx-10 ">
        {/* Top Links */}
        <div className="links my-3 flex justify-between ">
          <div className="sharelinks flex gap-2">
            <div className="h-7 w-7 rounded-md bg-gray-200 flex justify-center items-center">
              <a href="#">
                <i className="text-gray-600  ri-github-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md bg-gray-200 flex justify-center items-center">
              <a href="#">
                <i className="text-gray-600  ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md bg-gray-200 flex justify-center items-center">
              <a href="#">
                <i className="text-gray-600  ri-instagram-line"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md bg-gray-200 flex justify-center items-center">
              <a href="#">
                <i className="text-gray-600  ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>
          <p className="text-sm flex justify-center items-center opacity-70">
            <span>
              {" "}
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - ₹100
            </span>
          </p>
          <div className="dropdown flex gap-2 opacity-70">
            <select name="currency">
              <option value="usd">IND ₹</option>
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-full" />
        {/* Nav */}
        <div className="nav my-7 flex justify-between items-center">
          <div className="text-3xl font-[GilroyB]">SP/ACE</div>
          <div className="w-[60%] h-[3rem] border rounded-xl relative">
            <input
              className="w-full h-full rounded-xl px-4 pr-14"
              placeholder="Enter your space product..."
              type="text"
            />
            <i className="cursor-pointer ri-search-line absolute right-6 top-2/4 -translate-y-2/4  hover:text-blue-400"></i>
          </div>
          <div className="icons flex justify-center items-center gap-5">
            <div className="cursor-pointer flex justify-center items-center relative">
              <i className="text-4xl ri-user-line"></i>
            </div>
            <div className="cursor-pointer flex justify-center items-center relative ">
              <i className="text-4xl ri-heart-3-line "></i>
              <span className="badge absolute  -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center"><b>2</b></span>
            </div>
            <div className="cursor-pointer flex justify-center items-center relative">
              <i className="text-4xl ri-shopping-bag-line"></i>
              <span className="badge absolute -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center"><b>2</b></span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-full" />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
