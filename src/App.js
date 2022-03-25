import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import AccountTopbar from "./components/AccountTopbar/AccountTopbar";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllCustomers } from "./redux/actions/customerActions";
import { asyncGetAllProducts } from "./redux/actions/productActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let token = localStorage.getItem("billing-token") || "";
  /*   useEffect(() => {
    dispatch(asyncGetAllCustomers());
    dispatch(asyncGetAllProducts());
  }); */

  return (
    <>
      <Header />
      {token && <Navbar />}
      {token && <AccountTopbar />}
      {/* <Navbar />
      <AccountTopbar /> */}
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
