import React from "react";
import Payment from "../assets/images/payment.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransitionVariant } from "../constants/Transition";
import { PRODUCTSURL } from "../constants/constants";

const Footer = () => {
  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-[#212121] w-full"
    >
      {/* footer section 1 for brand category */}
      <div className="p-12 max-sm:p-5 ">
        <p className="text-blue-500 font-bold">BRAND DIRECTORY</p>

        <div className="flex  my-2 py-2 max-sm:flex-wrap max-sm:items-center">
          <h1 className="text-[#999995] max-sm:text-xs font-bold mr-4 text-sm">
            FASHION :
          </h1>
          <Link
            to={`${PRODUCTSURL}?s=mens-shirt`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            mens-shirt
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=shirts`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            shirts
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=shorts & jeans`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            shorts & jeans
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=jacket`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            jacket
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=dress & frock`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            dress & frock
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=innerwear`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            innerwear
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=hosiery`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
          >
            hosiery
          </Link>
        </div>

        <div className="flex my-2 max-sm:flex-wrap max-sm:items-center">
          <h1 className="text-[#999995] max-sm:text-xs font-bold mr-4 text-sm">
            FOOTWEAR :
          </h1>
          <Link
            to={`${PRODUCTSURL}?s=sport`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            sport
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=formal`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            formal
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s= boots`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            boots
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=casual`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            casual
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=cowboy shoes`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            cowboy shoes
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=safety shoes`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            safety shoes
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=party wear shoes`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            party wear shoes
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=branded`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            branded
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=first copy`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            first copy
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=long shoes`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            long shoes
          </Link>
        </div>

        <div className="flex my-2 py-2 max-sm:flex-wrap max-sm:items-center">
          <h1 className="text-[#999995] max-sm:text-xs font-bold mr-4 text-sm">
            JEWELLERY :{" "}
          </h1>
          <Link
            to={`${PRODUCTSURL}?s=necklace`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            necklace
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=earrings`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            earrings
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=couple rings`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            couple rings
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=pendants`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            pendants
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=crystal`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            crystal
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            bangles
          </Link>
        </div>

        <div className="flex my-2  max-sm:flex-wrap max-sm:items-center">
          <h1 className="text-[#999995] max-sm:text-xs font-bold mr-4 text-sm">
            COSMETICS :{" "}
          </h1>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            shampoo
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            bodywash
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            facewash
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            makeupkit
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            perfume
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            skin loson
          </Link>
          <span className="text-[#696969] max-sm:mr-2 ">|</span>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2   capitalize hover:text-[#999995] max-sm:text-xs"
          >
            sunscreen
          </Link>
        </div>
      </div>

      <hr className="w-full border-[#656565]"></hr>

      {/* footer section 2 for all important link */}

      <div className="grid grid-cols-5 p-12 gap-4 max-sm:grid-cols-1 max-sm:p-5">
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">POPULAR CATEGORIES</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            fashion
          </Link>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            electronic
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            cosmetic
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            health
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            watches
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">PRODUCTS</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            prices drop
          </Link>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            new products
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best sales
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            contact us
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            sitemap
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">OUR COMPANY</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            delivery
          </Link>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            legal notice
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            terms and conditions
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            about us
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            secure payment
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">SERVICES</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            world wide delivery
          </Link>

          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best day delivery
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best online support
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            return policy
          </Link>
          <Link
            to={`${PRODUCTSURL}?s=`}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            30% money back
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">CONTACT</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <div className="flex gap-2 items-center">
            <i className="ri-map-pin-line text-[#696969] text-3xl"></i>
            <Link
              to={`${PRODUCTSURL}?s=`}
              className="text-[#696969] capitalize hover:text-blue-500"
            >
              404, Dreamland, Gujarat, India
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-phone-line text-[#696969] text-2xl"></i>
            <Link
              to={`${PRODUCTSURL}?s=`}
              className="text-[#696969] capitalize hover:text-blue-500"
            >
              (+91) 9023134084
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-mail-line text-[#696969] text-2xl"></i>
            <Link
              to={`${PRODUCTSURL}?s=`}
              className="text-[#696969] capitalize hover:text-blue-500"
            >
              spaceshop@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <hr className="w-full border-[#656565]"></hr>

      {/* footer section 3 for all important link */}

      <div className="p-12 flex flex-col gap-4 items-center text-center max-sm:mb-12">
        <img className="" src={Payment} alt="payment methods"></img>
        <p className="text-[#696969] capitalize">
          Copyright &copy; <Link to={`${PRODUCTSURL}?s=`}>Shop Space </Link> all
          rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
