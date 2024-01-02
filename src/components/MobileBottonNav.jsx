// Components
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import Accordian from "../components/Accordian";
import Stars from "../components/Stars";
import MenuAccordian from "../components/MenuAccordian";

//Images
import hatcaps from "../assets/images/hatcaps.svg";
import tshirts from "../assets/images/tshirts.svg";
import winterwear from "../assets/images/winterwear.svg";
import DressFrock from "../assets/images/dressfrock.svg";
import watch from "../assets/images/watch.svg";
import shorts from "../assets/images/shorts.svg";
import glasses from "../assets/images/glasses.svg";

const MobileBottonNav = () => {
  const { pathname } = useLocation();

  //navigation
  const navigate = useNavigate();

  // For Mobile Viewport Drawer Control
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuDrawer = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const toggleCategoryDrawer = () => {
    setIsCategoryOpen((prevState) => !prevState);
  };

  // Menu Accordian Data
  const MenuAccordianData = [
    {
      title: "Men's",
      list: [
        { title: "Shirt" },
        { title: "Shorts & Jeans" },
        { title: "Safety Shoes" },
        { title: "Wallet" },
      ],
    },
    {
      title: "Women",
      list: [
        { title: "Dress & Frock" },
        { title: "Earrings" },
        { title: "Necklace" },
        { title: "Makeup Kit" },
      ],
    },
    {
      title: "Jwellery",
      list: [
        { title: "Earrings" },
        { title: "Couple Rings" },
        { title: "Necklace" },
      ],
    },
    {
      title: "Clothes",
      list: [
        { title: "Shirt" },
        { title: "Shorts & Jeans" },
        { title: "Jacket" },
        { title: "Dress & Frock" },
      ],
    },
  ];

  // Category  Accrodian data
  const AccrodianData = [
    {
      title: "Clothes",
      src: DressFrock,
      list: [
        { title: "Shirt", price: 300 },
        { title: "Shorts & Jeans", price: 60 },
        { title: "Jacket", price: 50 },
        { title: "Dress & Frock", price: 87 },
      ],
    },
    {
      title: "Footwear",
      src: winterwear,
      list: [
        { title: "Sports", price: 300 },
        { title: "Formal", price: 60 },
        { title: "Casual", price: 50 },
        { title: "Safety Shoes", price: 87 },
      ],
    },
    {
      title: "Jwellery",
      src: watch,
      list: [
        { title: "Earrings", price: 300 },
        { title: "Couple Rings", price: 60 },
        { title: "Necklace", price: 50 },
      ],
    },
    {
      title: "Clothes",
      src: glasses,
      list: [
        { title: "Shirt", price: 300 },
        { title: "Shorts & Jeans", price: 60 },
        { title: "Jacket", price: 50 },
        { title: "Dress & Frock", price: 87 },
      ],
    },
    {
      title: "Footwear",
      src: hatcaps,
      list: [
        { title: "Sports", price: 300 },
        { title: "Formal", price: 60 },
        { title: "Casual", price: 50 },
        { title: "Safety Shoes", price: 87 },
      ],
    },
    {
      title: "Jwellery",
      src: shorts,
      list: [
        { title: "Earrings", price: 300 },
        { title: "Couple Rings", price: 60 },
        { title: "Necklace", price: 50 },
      ],
    },
    {
      title: "Footwear",
      src: tshirts,
      list: [
        { title: "Sports", price: 300 },
        { title: "Formal", price: 60 },
        { title: "Casual", price: 50 },
        { title: "Safety Shoes", price: 87 },
      ],
    },
  ];
  return (
    <>
      <div className="z-10 bg-white fixed bottom-0 w-full flex flex-1 left-2/4 -translate-x-2/4  justify-around items-center md:hidden bottom_mobile_nav">
        <button
          onClick={toggleMenuDrawer}
          className="text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-menu-line"></i>
        </button>
        <button
          onClick={() => {
            if (pathname != "/cart") {
              navigate("/cart");
            }
          }}
          className="relative text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-shopping-bag-line"></i>
          <span className="bg-red-400 absolute -top-0 right-0 text-white text-xs px-[5px] py-[1px] rounded-xl">
            2
          </span>
        </button>
        <button
          onClick={() => {
            if (pathname != "/") {
              navigate("/");
            }
          }}
          className="text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-home-5-line"></i>
        </button>
        <button
        onClick={() => {
          if (pathname != "/wishlist") {
            navigate("/wishlist");
          }
        }} className="relative text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md">
          <i className=" ri-heart-3-line"></i>
          <span className="bg-red-400 absolute -top-0 right-0 text-white text-xs px-[5px] py-[2px] rounded-xl">
            5
          </span>
        </button>
        <button
          onClick={toggleCategoryDrawer}
          className="text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-stack-fill"></i>
        </button>
        {/* Mobile Drawer Component */}
      </div>
      {/* Drawer1 (Menu Drawer) */}
      <Drawer
        open={isMenuOpen}
        onClose={toggleMenuDrawer}
        direction="left"
        size="85vw"
        className="md:hidden"
      >
        <div className="w-full flex flex-col p-5 overflow-y-scroll h-full">
          <div className="flex justify-between">
            <h1 className="text-blue-500 text-lg font-bold">Menu</h1>
            <i
              onClick={toggleMenuDrawer}
              className="ri-close-line text-2xl font-bold"
            ></i>
          </div>
          <hr className="bg=[#787878] my-3" />
          <h1
            onClick={() => {
              if (pathname != "/products") {
                toggleMenuDrawer();
                navigate("/products");
              }
            }}
            className="my-3"
          >
            Products
          </h1>
          <MenuAccordian data={MenuAccordianData} />
          <h1
            onClick={() => {
              if (pathname != "/orders") {
                toggleMenuDrawer();
                navigate("/orders");
              }
            }}
            className=" my-3"
          >
            Orders
          </h1>
          <h1
            onClick={() => {
              if (pathname != "/settings") {
                toggleMenuDrawer();
                navigate("/settings");
              }
            }}
            className=" my-3"
          >
            Settings
          </h1>

          <select
            className="border focus:outline-black rounded-md py-2 bg-transparent cursor-pointer my-3"
            name="currency"
          >
            <option value="usd">IND ₹</option>
            <option value="usd">USD ₹</option>
            <option value="eur">EUR €</option>
          </select>
          <select
            className="border focus:outline-black rounded-md py-2 bg-transparent cursor-pointer  my-3"
            name="language"
          >
            <option value="en-US">English</option>
            <option value="es-ES">Español</option>
            <option value="fr">Français</option>
          </select>

          <div className="flex w-full justify-center gap-5 my-3">
            <div className="flex-1 py-3 px-3  rounded-xl  transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl  transition-all   ri-github-fill"></i>
              </a>
            </div>
            <div className="flex-1 py-3 px-3 rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl transition-all ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="flex-1 py-3 px-3  rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl  transition-all   ri-instagram-line"></i>
              </a>
            </div>
            <div className="flex-1 py-3 px-3  rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl ransition-all  ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
      {/* Drawer2 (category Drawer) */}
      <Drawer
        open={isCategoryOpen}
        onClose={toggleCategoryDrawer}
        direction="left"
        size="85vw"
        className="md:hidden"
      >
        <div className="w-full flex flex-col p-5 overflow-y-scroll h-full relative">
          <i
            onClick={toggleCategoryDrawer}
            className="ri-close-line text-2xl font-bold absolute right-5"
          ></i>
          <Accordian title={"CATEGORY"} data={AccrodianData} />
          <div className="my-6">
            <h1 className="text-lg font-bold mb-3">BEST SELLERS</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                  <img
                    className="object-cover w-10 h-10 cursor-pointer"
                    src={hatcaps}
                    alt="img"
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h1>Baby Fabric Shoes</h1>
                  <Stars star={4} />
                  <p className="font-bold">
                    <span className="line-through font-normal mr-5">₹5</span>
                    ₹4.00
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                  <img
                    className="object-cover w-10 h-10 cursor-pointer"
                    src={tshirts}
                    alt="img"
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h1>Baby Fabric Shoes</h1>
                  <Stars star={4} />
                  <p className="font-bold">
                    <span className="line-through font-normal mr-5">₹5</span>
                    ₹4.00
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                  <img
                    className="object-cover w-10 h-10 cursor-pointer"
                    src={shorts}
                    alt="img"
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h1>Baby Fabric Shoes</h1>
                  <Stars star={4} />
                  <p className="font-bold">
                    <span className="line-through font-normal mr-5">₹5</span>
                    ₹4.00
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                  <img
                    className="object-cover w-10 h-10 cursor-pointer"
                    src={glasses}
                    alt="img"
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h1>Baby Fabric Shoes</h1>
                  <Stars star={4} />
                  <p className="font-bold">
                    <span className="line-through font-normal mr-5">₹5</span>
                    ₹4.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileBottonNav;
