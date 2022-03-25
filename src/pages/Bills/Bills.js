import "./bills.css";
import Modal from "react-modal";
import { useState } from "react";
import BillsTable from "../../components/Bills/BillsTable/BillsTable";
import AddEditCustomerModal from "../../components/Customers/AddEditCustomerModal/AddEditCustomerModal";
import { AiOutlinePlus } from "react-icons/ai";

const Bills = () => {
  const [searchString, setSearchString] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleGenerateBill = () => {
    console.log("hello");
  };
  return (
    <div className="main-container">
      <div className="main-container-action">
        <button
          className="btn secondary create-btn"
          onClick={handleGenerateBill}
        >
          <AiOutlinePlus /> GENERATE BILL
        </button>
      </div>
      <BillsTable />
      <div>
        <button disabled>Export to csv</button>
      </div>
    </div>
  );
};

export default Bills;
