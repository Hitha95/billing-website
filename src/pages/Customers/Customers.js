import "./customer.css";
import Modal from "react-modal";
import { useState } from "react";
import CustomersTable from "../../components/Customers/CustomersTable/CustomersTable";
import AddEditCustomerModal from "../../components/Customers/AddEditCustomerModal/AddEditCustomerModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const Customers = () => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const [searchString, setSearchString] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [previousData, setPreviousData] = useState({});
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleAdd = () => {
    openModal();
    setText("ADD");
    setPreviousData({});
  };

  let filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchString.toLocaleLowerCase()) ||
      customer.mobile.includes(searchString)
    );
  });
  return (
    <div className="main-container">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="form-modal-container"
        contentLabel="Example Modal"
      >
        <AddEditCustomerModal
          closeModal={closeModal}
          text={text}
          previousData={previousData}
        />
      </Modal>
      <div className="main-container-action">
        <button className="btn secondary create-btn" onClick={handleAdd}>
          <AiOutlinePlus /> New customer
        </button>
        <input
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Enter name or phone number to search"
        />
      </div>

      <CustomersTable
        filteredCustomers={filteredCustomers}
        closeModal={closeModal}
        openModal={openModal}
        setPreviousData={setPreviousData}
        setText={setText}
      />
      <div>
        <button disabled>Export to csv</button>
      </div>
    </div>
  );
};

export default Customers;
