import Navigationbar from "./component/navbar.component";
import InvoiceGenerator from "./component/invoice/invoice.generator"
//import Home from "./component/Home/home.component";
import Login from "./component/SignIn/Login.component";
import SignUp from "./component/SignUp/signup.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
//import "./App.styles.scss"

const App = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="body">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<InvoiceGenerator />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
