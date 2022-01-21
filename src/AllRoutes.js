import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Account from "./pages/Account/Account";
import Bills from "./pages/Bills/Bills";
import Customers from "./pages/Customers/Customers";
import Products from "./pages/Products/Products";
import Shop from "./pages/Shop/Shop";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default AllRoutes;
