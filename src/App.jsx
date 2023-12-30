import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/Orders";
// libraries
import ScrollUpBtn from "./components/ScrollUpBtn"; // UI for ScrollToTop
import ScrollToTop from "react-scroll-to-top"; // For ScrollToTop feature
import LoadingBar from "react-top-loading-bar"; // For Top Loading Bar
import { ToastContainer } from "react-toastify"; // For Toasts

const App = () => {
  const [progress, setProgress] = useState(0); // for controlling the top loaading bar
  return (
    <>
      <Router>
        <Routes>
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
            exact
            path="*"
            element={<PageNotFound setProgress={setProgress} />}
          />
        </Routes>

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
        <ToastContainer />

        {/* Top Loading bar component */}
        <LoadingBar
          color={"#4F46E5"}
          height={3}
          progress={progress} // used to controll the bar
          onLoaderFinished={() => setProgress(0)}
        />
      </Router>
    </>
  );
};

export default App;
