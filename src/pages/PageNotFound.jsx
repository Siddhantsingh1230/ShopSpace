import React from "react";
import Img from "../assets/images/404.jpg";
import ImgBg from "../assets/images/404bg.gif";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-[var(--b1)] w-screen flex  justify-end items-center ">
        <div className="z-10 select-none flex justify-center relative left-48  flex-col  max-sm:static max-sm:items-center">
          <p className="text-white text-2xl opacity-55 max-sm:text-xl">Episode 0</p>
          <p className="text-white text-4xl  my-2 max-sm:my-6">Page Not Found</p>
          <p className="text-white text-sm font-[GilroyL] font-thin w-4/5  mt-3 opacity-80 max-sm:text-center max-sm:text-xs ">
          Once upon an eternity, in the cosmic expanse beyond understanding, stood the "Infinite Marketplace of Destiny," where Astro discovered "The Boundless Cart."
          </p>
          <button onClick={()=>navigate("/")} className="max-sm:mt-7 border-[1.6px] rounded-3xl w-24 h-9 text-white text-sm mt-6 hover:bg-white hover:text-black transition-all active:opacity-60">
            <i className="ri-play-fill"></i>Home
          </button>
        </div>
        <img className="notFound relative w-[68%] h-full max-sm:hidden" src={Img} alt="" />
      </div>
      <div className="hidden  max-sm:block max-sm:bg-cover max-sm:bg-center w-screen  opacity-15 h-screen absolute top-0 left-0" style={{backgroundImage: `url(${ImgBg})`}}></div>
    </>
  );
};

export default PageNotFound;
