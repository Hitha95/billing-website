import "./products.css";
import Modal from "react-modal";
import { useState } from "react";
import ProductsTable from "../../components/Products/ProductsTable/ProductsTable";
import AddEditProductModal from "../../components/Products/AddEditProductModal/AddEditProductModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const Products = () => {
  const [searchString, setSearchString] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.products.products);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="main-container">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="form-modal-container"
        contentLabel="Example Modal"
      >
        <AddEditProductModal closeModal={closeModal} />
      </Modal>
      <div className="main-container-action">
        <button className="btn secondary create-btn" onClick={openModal}>
          <AiOutlinePlus /> New Product
        </button>
        <input
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Enter product name"
        />
      </div>

      <ProductsTable products={products} />
      <div>
        <button disabled>Export to csv</button>
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
