import "./add-edit-productmodal.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import {
  asyncCreateProduct,
  aysncUpdateProduct,
} from "../../../redux/actions/productActions";

const AddEditProductModal = ({ closeModal, text, previousData = {} }) => {
  const [formData, setFormData] = useState({
    name: previousData.name || "",
    price: previousData.price || "",
  });
  const [formErrors, setFormErrors] = useState({});
  let errors = {};
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  function runValidations() {
    if (formData.name.length === 0 || !validator.isAlpha(formData.name)) {
      errors.name = "please enter valid name";
    }
    if (formData.name.length < 3) {
      errors.name = "name should be atleast 3 characters long";
    }
    if (formData.price <= 0) {
      errors.price = "please enter a valid price";
    }
    if (formData.price.length === 0) {
      errors.price = "please enter price";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      if (text === "ADD") {
        console.log("add", formData);
        dispatch(asyncCreateProduct(formData));
      } else if (text === "EDIT") {
        dispatch(aysncUpdateProduct(formData, previousData._id));
      }
      closeModal();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{text} PRODUCT</h2>
      <div className="form-items">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={formData.name}
          name="name"
          onChange={handleInput}
        />

        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <div className="form-items">
        <label>price</label>
        <input
          type="number"
          placeholder="Enter product price"
          value={formData.price}
          name="price"
          onChange={handleInput}
        />
      </div>
      {formErrors.price && <span>{formErrors.price}</span>}
      <div className="form-items add-edit-actions">
        <button type="submit" value="addedit" className="btn secondary">
          {text}
        </button>
        <button className="btn cancel" onClick={closeModal}>
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default AddEditProductModal;
