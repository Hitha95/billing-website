import "./add-edit-cutomermodal.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import { asyncCreateCustomer } from "../../../redux/actions/customerActions";

const AddEditCustomerModal = ({ closeModal, text, previousData }) => {
  const [formData, setFormData] = useState({
    name: previousData.name || "",
    email: previousData.email || "",
    mobile: previousData.mobile || "",
  });
  const [formErrors, setFormErrors] = useState({});
  let errors = {};
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const runValidations = () => {
    if (
      formData.name.trim().length === 0 ||
      !validator.isAlpha(formData.name)
    ) {
      errors.name = "please enter valid name";
    }
    if (formData.name.trim().length < 3) {
      errors.name = "name should be atleast 3 characters long";
    }
    if (
      formData.email.trim().length !== 0 &&
      !validator.isEmail(formData.email)
    ) {
      errors.email = "please enter valid email";
    }
    if (
      formData.mobile.length !== 10 ||
      !validator.isNumeric(formData.mobile)
    ) {
      errors.mobile = "please enter a valid mobile number";
    }
    if (formData.mobile.trim().length === 0) {
      errors.mobile = "please enter your mobile number";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      if (text === "ADD") {
        console.log("add", formData);
        //dispatch(asyncCreateCustomer(formData));
      } else if (text === "EDIT") {
        console.log("edit", formData);
      }

      closeModal();
    } else {
      setFormErrors(errors);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{text} CUSTOMER</h2>
      <div className="form-items">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          name="name"
          onChange={handleInput}
        />

        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <div className="form-items">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={formData.email}
          name="email"
          onChange={handleInput}
        />

        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div className="form-items">
        <label>Mobile Number</label>

        <input
          type="text"
          placeholder="Enter your Mobile number"
          value={formData.mobile}
          name="mobile"
          onChange={handleInput}
        />

        {formErrors.mobile && <span>{formErrors.mobile}</span>}
      </div>

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

export default AddEditCustomerModal;
