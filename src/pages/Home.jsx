import { useEffect } from "react";
// Images
import DressFrock from "../assets/images/dressfrock.svg";
import glasses from "../assets/images/glasses.svg";
import hatcaps from "../assets/images/hatcaps.svg";
import quotes from "../assets/images/quotes.svg";
import jacket from "../assets/images/jacket.svg";
import shorts from "../assets/images/shorts.svg";
import tshirts from "../assets/images/tshirts.svg";
import watch from "../assets/images/watch.svg";
import winterwear from "../assets/images/winterwear.svg";
import Sparkle from "../assets/images/sparkle.gif";
import mens from "../assets/images/mens-banner.jpg";
import women from "../assets/images/women-banner.jpg";
import gadgets from "../assets/images/gadgets-banner.jpg";
import electronics from "../assets/images/electronicsbanner.jpg";
import ceo from "../assets/images/ceo.jpg";
// Components
import Shoes3DCarousel from "../components/Shoe3DCarousel";

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
            <div className="h-7 w-7 rounded-md  transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className=" transition-all   ri-github-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className="transition-all ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className=" transition-all   ri-instagram-line"></i>
              </a>
            </div>
            <div className="h-7 w-7 rounded-md transition-all hover:bg-gray-950 bg-gray-200 flex justify-center items-center">
              <a
                href="#"
                className="hover:text-white text-gray-600 h-full w-full flex justify-center items-center"
              >
                <i className="ransition-all  ri-facebook-circle-fill"></i>
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
          <div className="text-3xl logo relative font-[GilroyB]">SP/ACE</div>
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
              <span className="badge absolute  -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center">
                <b>2</b>
              </span>
            </div>
            <div className="cursor-pointer flex justify-center items-center relative">
              <i className="text-4xl ri-shopping-bag-line"></i>
              <span className="badge absolute -top-2 -right-3 text-white bg-red-500 h-5 w-5 text-[10px] rounded-full flex justify-center items-center">
                <b>2</b>
              </span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-full" />
        {/* NavLink */}
        <div className="navlink mt-5 flex justify-center items-center gap-11 relative">
          <div className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks ">
            HOME
          </div>
          <div className="categoryLink cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            CATEGORIES
            <div className="categorybox grid gap-[30px] p-[30px] grid-cols-4 ">
              <ul class="dropdown-list list-none ">
                <li class="menu-title text-lg font-semibold pb-2 border-b border-cultured mb-2">
                  <a href="#">Electronics</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Desktop</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Laptop</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Camera</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Tablet</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Headphone</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">
                    <img
                      src={electronics}
                      alt="headphone collection"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul class="dropdown-list list-none ">
                <li class="menu-title text-lg font-semibold pb-2 border-b border-cultured mb-2">
                  <a href="#">Men's</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Formal</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Casual</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Sports</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Jacket</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Sunglasses</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">
                    <img
                      src={mens}
                      alt="men's fashion"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul class="dropdown-list list-none ">
                <li class="menu-title text-lg font-semibold pb-2 border-b border-cultured mb-2">
                  <a href="#">Women's</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Formal</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Casual</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Perfume</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Cosmetics</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Bags</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">
                    <img
                      src={women}
                      alt="women's fashion"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul class="dropdown-list list-none ">
                <li class="menu-title text-lg font-semibold pb-2 border-b border-cultured mb-2">
                  <a href="#">Electronics</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Smart Watch</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Smart TV</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Keyboard</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Mouse</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">Microphone</a>
                </li>

                <li class="panel-list-item">
                  <a href="#">
                    <img
                      src={gadgets}
                      alt="mouse collection"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Other navLinks are styled differently */}
          <div className="navlinkHoverGrp relative cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            MEN'S
            <div className="navlinkDropDown">
              <a href="#">Shirt</a>
              <a href="#">Shorts & Jeans</a>
              <a href="#">Sport Shoes</a>
              <a href="#">Wallet</a>
            </div>
          </div>
          <div className="navlinkHoverGrp relative cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            WOMEN'S
            <div className="navlinkDropDown">
              <a href="#">Dress & Frock</a>
              <a href="#">Earrings</a>
              <a href="#">Necklace</a>
              <a href="#">Makeup Kit</a>
            </div>
          </div>
          <div className="navlinkHoverGrp relative cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            JEWELRY
            <div className="navlinkDropDown">
              <a href="#">Couple Rings</a>
              <a href="#">Earrings</a>
              <a href="#">Necklace</a>
              <a href="#">Bracelets</a>
            </div>
          </div>
          <div className="navlinkHoverGrp relative cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            PERFUME
            <div className="navlinkDropDown">
              <a href="#">Clothes Perfume</a>
              <a href="#">Deodorant</a>
              <a href="#">Air Freshner</a>
              <a href="#">Flower Fragrance</a>
            </div>
          </div>
          <div className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            BLOG
          </div>
          <div className="cursor-pointer text-md font-bold hover:text-blue-500 transition-all navlinks  ">
            HOT OFFERS
          </div>
        </div>
        {/* ScrollSnap Offer Carousel */}
        <div className="select-none offers w-full h-[450px] pb-2 border-red-100 overflow-x-hidden cursor-grab hover:overflow-x-scroll  rounded-xl snap-mandatory snap-x flex gap-3">
          <div className=" flex-none w-full h-full snap-center rounded-xl bg-pink-500"></div>
          <div className=" flex-none w-full h-full snap-center rounded-xl bg-blue-500"></div>
          <div className=" flex-none w-full h-full snap-center rounded-xl bg-yellow-500"></div>
        </div>
        {/* ScrollSnap categories Carousel */}
        <div className="select-none categoryCarousel m-10  pb-2 border-red-100 overflow-x-hidden cursor-grab hover:overflow-x-scroll  rounded-xl snap-mandatory snap-x flex  gap-10">
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={DressFrock} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>DRESS & FROCK</p>
                <span className="pr-2">(53)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={winterwear} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>WINTER WEAR</p>
                <span className="pr-2">(58)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={glasses} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>GLASSES & LENS</p>
                <span className="pr-2">(68)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={shorts} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>SHORTS & JEANS</p>
                <span className="pr-2">(82)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={tshirts} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>T-SHIRTS</p>
                <span className="pr-2">(29)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={jacket} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>JACKET</p>
                <span className="pr-2">(34)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={watch} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm  font-bold">
                <p>WATCH</p>
                <span className="pr-2">(56)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
          <div className=" flex-none  h-24 w-[22.5%] flex  items-center snap-center rounded-xl border-2">
            <div className="flex flex-col justify-center bg-[#EDEDED] border-solid border-slate-400 border overflow-hidden rounded-md p-3 items-center mx-3">
              <img src={hatcaps} className="w-8 h-8" alt="dress and frock" />
            </div>
            <div className="flex justify-center  flex-col w-4/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <p>HAT & CAPS</p>
                <span className="pr-2">(65)</span>
              </div>
              <div className="mt-3 text-blue-500 cursor-pointer text-sm">
                Show All
              </div>
            </div>
          </div>
        </div>
        {/* Shoes 3DCarousel */}
        <div className="flex justify-center items-center m-16 mb-36 flex-col">
          <h1 className="shoesCarouseltitle font-[Rastano] text-5xl relative">
            Flex in Style
            <img src={Sparkle} className="absolute top-0 left-0" alt="Wear" />
          </h1>
          <Shoes3DCarousel />
        </div>
        {/* Product Section */}
        {/* later */}
        {/* Other Section */}
        <div className="flex h-[450px]  gap-10 mb-11">
          <div className="h-[90%] w-[24%] flex flex-col gap-8">
            <p className="font-bold border-b py-2 tracking-wider">
              Testimonial
            </p>
            <div className="border text-center gap-2  h-[90%] rounded-xl justify-center items-center flex flex-col">
              <img
                className="h-20 w-20  rounded-full"
                src={ceo}
                alt="ceo image"
              />
              <h1 className="font-bold text-[#787878]">Khushi</h1>
              <p className="">CEO ShopSpace</p>
              <img className="h-6 w-6" src={quotes} alt="quotation" />
              <p className="text-sm w-4/5 text-[#787878]">
                Khushi, ShopSpace CEO, balances academics and e-commerce
                leadership.
              </p>
            </div>
          </div>
          <div className="w-[52%] h-[95%] cta flex justify-center items-center">
            <div className="h-[60%] w-[50%] bg-[#ffffffbf] rounded-md">
              <a
                href="#"
                className="h-full w-full text-center flex-col flex gap-2 justify-center items-center"
              >
                <p className="bg-black px-3 py-2 text-white rounded-md font-bold text-sm">
                  25% DISCOUNT
                </p>
                <h1 className="w-[50%] font-[GilroyB] text-2xl font-bold ">
                  Winter Collection
                </h1>
                <p className="text-[#787878]">Starting @ ₹50</p>
                <p className="text-[#787878] font-[GilroyB] text-md">
                  SHOP NOW
                </p>
              </a>
            </div>
          </div>
          <div className="h-[90%] w-[24%] flex flex-col gap-8">
            <p className="font-bold border-b py-2 tracking-wider">
              Our Services
            </p>
            <div className="border text-center gap-2 px-6  h-[90%] rounded-xl justify-center items-start flex flex-col">
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-ship-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Worldwide Delivery</p>
                  <p className="text-sm font-normal text-[#787878]">
                    For Order Over ₹100
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-rocket-2-line text-4xl rotate-45"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Next Day Delivery</p>
                  <p className="text-sm font-normal text-[#787878]">
                    Indian Orders Only
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-phone-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Best Online Support</p>
                  <p className="text-sm font-normal text-[#787878]">
                    Hours: 8:00AM - 11PM
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer ">
                <i className="text-blue-500 hover:text-black ri-arrow-go-back-line text-4xl"></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">Return Policy</p>
                  <p className="text-sm font-normal text-[#787878]">
                    Easy & Free Return
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5  cursor-pointer">
                <i className="text-blue-500 hover:text-black ri-service-line text-4xl "></i>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[#787878]">30% Money Back</p>
                  <p className="text-sm font-normal text-[#787878]">
                    For Order Over ₹100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
