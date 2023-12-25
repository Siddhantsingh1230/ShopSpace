import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={<Home/>} />
          <Route path="/login" exact Component={<Login/>} />
          <Route path="/signup" exact Component={<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
