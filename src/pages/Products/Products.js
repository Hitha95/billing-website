import "./products.css";
import Modal from "react-modal";
import { useState } from "react";
import ProductsTable from "../../components/Products/ProductsTable/ProductsTable";
import AddEditProductModal from "../../components/Products/AddEditProductModal/AddEditProductModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllProducts } from "../../redux/actions/productActions";
import { CSVLink } from "react-csv";

const Products = () => {
  const [searchString, setSearchString] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [previousData, setPreviousData] = useState({});
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  // dispatch(asyncGetAllProducts());
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAdd = () => {
    openModal();
    setText("ADD");
    setPreviousData({});
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchString);
  });

  const headerKeys = ["_id", "name", "price", "createdAt", "updatedAt"];

  const data = products.map((product) => {
    let row = {};
    row = headerKeys.map((key) => {
      if (key === "createdAt" || key === "updatedAt")
        return (row[key] = new Date(product[key]).toLocaleString("en"));
      else {
        return (row[key] = product[key]);
      }
    });
    return row;
  });

  data.unshift(["Product ID", "Name", "Price", "Created At", "Last Updated"]);

  return (
    <div className="main-container">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="form-modal-container"
        contentLabel="Example Modal"
      >
        <AddEditProductModal
          closeModal={closeModal}
          text={text}
          previousData={previousData}
        />
      </Modal>
      <div className="main-container-action">
        <button className="btn secondary create-btn" onClick={handleAdd}>
          <AiOutlinePlus /> New Product
        </button>
        <input
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Search by product name"
        />
      </div>

      <ProductsTable
        filteredProducts={filteredProducts}
        openModal={openModal}
        setPreviousData={setPreviousData}
        setText={setText}
      />
      <div>
        <CSVLink data={data} filename={"Products-file.csv"} target="_blank">
          <button className="btn secondary">Export to CSV</button>
        </CSVLink>
      </div>
    </div>
  );
};

export default Products;

{
  /* <div style={{ marginLeft: "200px" }}>
<div>Add new products button</div>
<div>search</div>
<div>products table with pagination</div>
<div>button to export products data</div>
</div>
 */
}
