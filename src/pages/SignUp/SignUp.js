import "./sign-up.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import validator from "validator";
import { asyncRegisterUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    address: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setformErrors] = useState({});
  let errors = {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const runValidations = () => {
    if (formData.username.trim().length === 0) {
      errors.username = "name cannont be blank";
    }
    if (formData.username.trim().length < 4) {
      errors.username = "username must be minimum 4 characters long ";
    }
    if (formData.email.trim().length === 0) {
      errors.email = "email cannot be blank";
    }
    if (!validator.isEmail(formData.email)) {
      errors.email = "invalid email";
    }
    if (formData.password.trim().length <= 7) {
      errors.password = "password should be minimum 8 characters";
    }
    if (formData.businessName.trim().length === 0) {
      errors.businessName = "business name is required";
    }
    if (formData.address.trim().length === 0) {
      errors.address = "business address is required";
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setformErrors({});
      dispatch(asyncRegisterUser(formData, setformErrors, navigate));
      //console.log(errors);
      //setformErrors(errors);
    } else {
      setformErrors(errors);
    }
  };
  return (
    <form onSubmit={handleSignUp} className="form-container">
      <h2>SIGN UP</h2>
      <div className="form-items">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.username}
          name="username"
          onChange={handleInput}
        />

        {formErrors.username && <span>{formErrors.username}</span>}
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
        <label>Password</label>
        <div className="form-password">
          <input
            id="id-password"
            // type="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={formData.password}
            name="password"
            onChange={handleInput}
          />
          <div
            className="form-password-eye-svg"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>

        {formErrors.password && <span>{formErrors.password}</span>}
      </div>
      <div className="form-items">
        <label>Business Name</label>

        <input
          type="text"
          placeholder="Enter your business name"
          value={formData.businessName}
          name="businessName"
          onChange={handleInput}
        />

        {formErrors.businessName && <span>{formErrors.businessName}</span>}
      </div>
      <div className="form-items">
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          value={formData.address}
          name="address"
          onChange={handleInput}
        />
        {formErrors.address && <span>{formErrors.address}</span>}
      </div>
      <div className="form-items">
        <button type="submit" value="signup" className="btn secondary">
          SIGN UP
        </button>
      </div>
      <div className="form-items">
        <p>Already a user?</p>
        <p>
          Login{" "}
          <Link to="/signin">
            <i style={{ color: "green" }}>HERE</i>
          </Link>{" "}
          to continue!
        </p>
      </div>
    </form>
  );
};

export default SignUp;
