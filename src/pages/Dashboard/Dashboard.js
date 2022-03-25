import "./dashboard.css";
import { useSelector } from "react-redux";
import { RiBillFill } from "react-icons/ri";
import { BsPeopleFill, BsInboxesFill } from "react-icons/bs";

import CountCard from "../../components/Dashboard/CountCard/CountCard";
const Dashboard = () => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const products = useSelector((state) => state.products.allProducts);
  const transactions = useSelector((state) => state.bills.allBills);
  return (
    <div className="dashboard-container">
      <div className="count-cards">
        <div className="count-card">
          <div>
            <BsPeopleFill />
          </div>
          <p>
            <i>TOTAL CUSTOMERS</i>
          </p>
          <p>
            <b>{customers.length}</b>
          </p>
        </div>
        <div className="count-card">
          <div>
            <BsInboxesFill />
          </div>
          <p>
            <i>TOTAL PRODUCTS</i>
          </p>
          <p>
            <b>{products.length}</b>
          </p>
        </div>
        <div className="count-card">
          <div>
            <RiBillFill />
          </div>
          <p>
            <i>TOTAL TRANSACTIONS</i>
          </p>
          <p>
            <b>{transactions.length}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
