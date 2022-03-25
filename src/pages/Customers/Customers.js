import "./customer.css";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import CustomersTable from "../../components/Customers/CustomersTable/CustomersTable";
import AddEditCustomerModal from "../../components/Customers/AddEditCustomerModal/AddEditCustomerModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllCustomers } from "../../redux/actions/customerActions";
import { CSVLink } from "react-csv";

const Customers = () => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const user = useSelector((state) => state.user);
  const [searchString, setSearchString] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [previousData, setPreviousData] = useState({});
  const dispatch = useDispatch();
  /*  if (user.token) {
    dispatch(asyncGetAllCustomers());
  } */

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

  const headerKeys = [
    "_id",
    "name",
    "mobile",
    "email",
    "createdAt",
    "updatedAt",
  ];

  const data = customers.map((customer) => {
    let row = {};
    row = headerKeys.map((key) => {
      if (key === "createdAt" || key === "updatedAt")
        return (row[key] = new Date(customer[key]).toLocaleString("en"));
      else {
        return (row[key] = customer[key]);
      }
    });
    return row;
  });

  data.unshift([
    "Customer ID",
    "Name",
    "Mobile",
    "Email",
    "Created At",
    "Last Updated",
  ]);
  console.log("data", data);

  /*  const csvData = {
    data: customers,
    headers: headersCSV,
    filename: "Customers_Report.csv",
  }; */

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
        openModal={openModal}
        setPreviousData={setPreviousData}
        setText={setText}
      />
      <div>
        <CSVLink data={data} filename={"Customers-file.csv"} target="_blank">
          <button className="btn secondary">Export to CSV</button>
        </CSVLink>
      </div>
    </div>
  );
};

export default Customers;
