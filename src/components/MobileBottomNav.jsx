// Components
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import Accordian from "./Accordian";
import Stars from "./Stars";
import { useSelector } from "react-redux";
import Modal from "../components/Model";

//Images
import hatcaps from "../assets/images/hatcaps.svg";
import tshirts from "../assets/images/tshirts.svg";
import shorts from "../assets/images/shorts.svg";
import glasses from "../assets/images/glasses.svg";
import ListPlaceholder from "./ListPlaceholder";

const MobileBottomNav = () => {
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

  const user = useSelector((state) => state.auth.user);
  const categories = useSelector((state) => state.category.categories);

  // opening a modal id user is not logged in
  const [openModal, setOpenModal] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.carts);
  const bestSellerProduct = useSelector((state) => state.product.bestSelled);

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
            if (user) {
              if (pathname != "/cart") {
                navigate("/cart");
              }
            } else {
              setOpenModal(true);
            }
          }}
          className="relative text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-shopping-bag-line"></i>
          <span
            className={`badge absolute top-0 right-0 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center ${
              (cart?.length == 0 || !user) && "invisible"
            }`}
          >
            <b>{cart?.length}</b>
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
            if (user) {
              if (pathname != "/wishlist") {
                navigate("/wishlist");
              }
            } else {
              setOpenModal(true);
            }
          }}
          className="relative text-2xl h-12 w-12 my-1 transition-colors active:bg-[#eeeeee] rounded-md"
        >
          <i className=" ri-heart-3-line"></i>
          <span
            className={`badge absolute  top-0 right-0 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center ${
              (wishlist?.length == 0 || !user) && "invisible"
            }`}
          >
            <b>{wishlist?.length}</b>
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
        lockBackgroundScroll={true}
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
          <div
            onClick={() => {
              if (!user) {
                navigate("/login");
              }
              toggleMenuDrawer();
            }}
            className="flex items-center my-3 "
          >
            <p className="">
              {!user && <i className="ri-fingerprint-line"></i>}{" "}
              {user ? user.username.toUpperCase() : "Login"}
            </p>
          </div>
          <h1
            onClick={() => {
              if (pathname != "/products") {
                navigate("/products");
              }
              toggleMenuDrawer();
            }}
            className="my-3"
          >
            <i className="ri-t-shirt-2-line"></i> Products
          </h1>
          <h1
            onClick={() => {
              if (user) {
                if (pathname != "/orders") {
                  navigate("/orders");
                }
              } else {
                setOpenModal(true);
              }
              toggleMenuDrawer();
            }}
            className=" my-3"
          >
            <i className="ri-receipt-fill"></i> Orders
          </h1>
          <h1
            onClick={() => {
              if (user) {
                if (pathname != "/settings") {
                  navigate("/settings");
                }
              } else {
                setOpenModal(true);
              }
              toggleMenuDrawer();
            }}
            className=" my-3"
          >
            <i className="ri-settings-3-line"></i> Settings
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

          <div className="flex w-full justify-center gap-6 my-3">
            <div className="flex-1 w-5 h-11   rounded-xl  transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="https://github.com/Siddhantsingh1230/ShopSpace/"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl  transition-all   ri-github-fill"></i>
              </a>
            </div>
            <div className="flex-1 w-5 h-11   rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/khushi-kandoi-70b887234/"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl transition-all ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="flex-1 w-5 h-11    rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="https://www.instagram.com/siddhantsingh1230/"
                className="hover:text-white h-full w-full flex justify-center items-center"
              >
                <i className="text-xl  transition-all   ri-instagram-line"></i>
              </a>
            </div>
            <div className="flex-1 w-5 h-11    rounded-xl transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/siddhantsingh1230/"
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
        lockBackgroundScroll={true}
      >
        <div className="w-full flex flex-col p-5 overflow-y-scroll h-full relative">
          <i
            onClick={toggleCategoryDrawer}
            className="ri-close-line text-2xl font-bold absolute right-5"
          ></i>
          <Accordian title={"CATEGORY"} data={categories} />
          <div className="mt-6 mb-11">
            <h1 className="text-lg font-bold mb-3">BEST SELLERS</h1>
            <div className="flex flex-col gap-3">
              {bestSellerProduct?.length > 0 ? (
                bestSellerProduct.map((item, idx) => (
                  <div
                    className="flex gap-5"
                    key={idx}
                    onClick={() => navigate(`/productdetail/${item._id}`)}
                  >
                    <div className="bg-[#F7F7F7] rounded-md w-[4.5rem] h-[4.5rem] flex justify-center items-center">
                      <img
                        className="object-cover w-10 h-10 cursor-pointer"
                        src={item.thumbnail}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col cursor-pointer">
                      <h1>{item.title.slice(0, 50)}</h1>
                      <Stars star={4} />
                      <p className="font-bold">
                        <span className="line-through font-normal mr-5">
                          ₹{item.price}
                        </span>
                        ₹
                        {Math.round(
                          item.price -
                            (item.discountPercentage * item.price) / 100
                        )}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <ListPlaceholder />
                </>
              )}
            </div>
          </div>
        </div>
      </Drawer>
      {/* Modal control if user is not logged in */}
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default MobileBottomNav;
