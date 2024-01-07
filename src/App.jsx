import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
// Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ResetScroll from "./components/ResetScroll";
// libraries
import ScrollUpBtn from "./components/ScrollUpBtn"; // UI for ScrollToTop
import ScrollToTop from "react-scroll-to-top"; // For ScrollToTop feature
import LoadingBar from "react-top-loading-bar"; // For Top Loading Bar
import { ToastContainer } from "react-toastify"; // For Toasts
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [progress, setProgress] = useState(0); // for controlling the top loaading bar
  const location = useLocation(); // used for page transitions
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          {/* setProgress is passed in the components to controll the top loading bar */}
          <Route path="/" exact element={<Home setProgress={setProgress} />} />
          <Route
            path="/login"
            exact
            element={<Login setProgress={setProgress} />}
          />
          <Route
            path="/signup"
            exact
            element={<Signup setProgress={setProgress} />}
          />
          <Route
            path="/productdetail"
            exact
            element={<ProductDetail setProgress={setProgress} />}
          />
          <Route
            path="/orders"
            exact
            element={<Orders setProgress={setProgress} />}
          />
          <Route
            path="/products"
            exact
            element={<Products setProgress={setProgress} />}
          />
          <Route
            path="/settings"
            exact
            element={<Settings setProgress={setProgress} />}
          />
          <Route
            path="/cart"
            exact
            element={<Cart setProgress={setProgress} />}
          />
          <Route
            path="/checkout"
            exact
            element={<Checkout setProgress={setProgress} />}
          />
          <Route
            path="/wishlist"
            exact
            element={<Wishlist setProgress={setProgress} />}
          />
          <Route
            path="/forgotpassword"
            exact
            element={<ForgotPassword setProgress={setProgress} />}
          /><Route
            path="/resetpassword/:id/:token"
            exact
            element={<ResetPassword setProgress={setProgress} />}
          />
          <Route
            exact
            path="*"
            element={<PageNotFound setProgress={setProgress} />}
          />
        </Routes>
      </AnimatePresence>

      {/* Extra functionality Sections */}
      {/* Scroll Up Btn Functionality */}
      <ScrollToTop
        smooth={true}
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          outline: "none",
          boxShadow: "none",
          right: "1rem",
          bottom: "5rem",
          background: "black", // change the button styles
        }}
        component={<ScrollUpBtn />}
      />
      {/* Toast container to manage all toasts it act as parent container for toast calls */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Top Loading bar component */}
      <LoadingBar
        color={"#4F46E5"}
        height={3}
        progress={progress} // used to controll the bar
        onLoaderFinished={() => setProgress(0)}
      />
      {/* Reset Scroll On Route Change so that if user has scroll on other page it is  reset on route change */}
      <ResetScroll />
    </>
  );
};

export default App;
