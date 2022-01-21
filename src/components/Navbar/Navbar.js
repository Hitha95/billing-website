import "./navbar.css";
import { BsPeopleFill, BsInboxesFill } from "react-icons/bs";
import {
  RiBillFill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar-container">
      <Link to="/dashboard">
        <div
          className={
            location.pathname === "/dashboard"
              ? "active navbar-item"
              : "navbar-item"
          }
        >
          <RiDashboardFill />
          <div>DASHBOARD</div>
        </div>
      </Link>
      <Link to="/shop">
        <div
          className={
            location.pathname === "/shop" ? "active navbar-item" : "navbar-item"
          }
        >
          <RiShoppingBag3Fill />
          <div>SHOP</div>
        </div>
      </Link>

      <Link to="/customers">
        <div
          className={
            location.pathname === "/customers"
              ? "active navbar-item"
              : "navbar-item"
          }
        >
          <BsPeopleFill />
          <div>CUSTOMERS</div>
        </div>
      </Link>

      <Link to="/products">
        <div
          className={
            location.pathname === "/products"
              ? "active navbar-item"
              : "navbar-item"
          }
        >
          <BsInboxesFill />
          <div>PRODUCTS</div>
        </div>
      </Link>

      <Link to="/bills">
        <div
          className={
            location.pathname === "/bills"
              ? "active navbar-item"
              : "navbar-item"
          }
        >
          <RiBillFill />
          <div>BILLS</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
