import Payment from "../assets/images/payment.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransitionVariant } from "../constants/Transition";
import { BASEURL, PRODUCTSURL } from "../constants/constants";
import { useSelector } from "react-redux";
import ListPlaceholder from "../components/ListPlaceholder";

const Footer = () => {
  const categories = useSelector((state) => state.category.categories);
  const topViewed = useSelector((state) => state.product.topViewed);
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

        {categories?.length > 0 ? (
          categories.slice(2, 6).map((category, idx) => (
            <div
              key={category._id}
              className="flex  my-2 py-2 max-sm:flex-wrap max-sm:items-center"
            >
              <h1 className="text-[#999995] max-sm:text-xs font-bold mr-4 text-sm">
                {category.label.toUpperCase()} :
              </h1>
              {category.subcategories
                .slice(0, category.subcategories.length - 1)
                .map((item) => (
                  <>
                    <Link
                      to={`${PRODUCTSURL}?s=${encodeURIComponent(item.name)}`}
                      className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
                    >
                      {item.name}
                    </Link>
                    <span className="text-[#696969] max-sm:mr-2 ">|</span>
                  </>
                ))}
              <Link
                to={`${PRODUCTSURL}?s=${encodeURIComponent(
                  category.subcategories[category.subcategories.length - 1].name
                )}`}
                className="text-[#696969] mx-2 max-sm:mx-0 max-sm:mr-2    capitalize hover:text-[#999995] max-sm:text-xs"
              >
                {category.subcategories[category.subcategories.length - 1].name}
              </Link>
            </div>
          ))
        ) : (
          <ListPlaceholder />
        )}
      </div>

      <hr className="w-full border-[#656565]"></hr>

      {/* footer section 2 for all important link */}

      <div className="grid grid-cols-5 p-12 gap-4 max-sm:grid-cols-1 max-sm:p-5">
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">POPULAR CATEGORIES</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>
          {topViewed.length > 0 ? (
            topViewed.map((item, idx) => (
              <Link
                key={idx}
                to={`${PRODUCTSURL}?s=${encodeURIComponent(item.category)}`}
                className="text-[#696969] capitalize hover:text-blue-500"
              >
                {item.category}
              </Link>
            ))
          ) : (
            <ListPlaceholder />
          )}
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">PRODUCTS</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            prices drop
          </Link>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            new products
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best sales
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            contact us
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            sitemap
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">OUR COMPANY</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            delivery
          </Link>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            legal notice
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            terms and conditions
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            about us
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            secure payment
          </Link>
        </div>
        <div className="grid gap-1">
          <p className="text-white font-bold text-sm">SERVICES</p>
          <hr className="border-b-1 w-1/3 max-sm:w-12 max-sm:border-b-2  border-blue-500 mb-4 "></hr>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            world wide delivery
          </Link>

          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best day delivery
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            best online support
          </Link>
          <Link
             to={``}
            className="text-[#696969] capitalize hover:text-blue-500"
          >
            return policy
          </Link>
          <Link
             to={``}
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
               to={``}
              className="text-[#696969] capitalize hover:text-blue-500"
            >
              404, Dreamland, Gujarat, India
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-phone-line text-[#696969] text-2xl"></i>
            <Link
               to={``}
              className="text-[#696969] capitalize hover:text-blue-500"
            >
              (+91) 9023134084
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-mail-line text-[#696969] text-2xl"></i>
            <Link
               to={``}
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
          Copyright &copy; <Link  to={`${BASEURL}`}>Shop Space </Link> all
          rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
