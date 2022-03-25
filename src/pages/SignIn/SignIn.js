import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import validator from "validator";
import {
  asyncGetUserInformation,
  asyncLoginUser,
} from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncGetAllCustomers } from "../../redux/actions/customerActions";
import { asyncGetAllProducts } from "../../redux/actions/productActions";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (formData.email.trim().length === 0) {
      errors.email = "email cannot be blank";
    }
    if (!validator.isEmail(formData.email)) {
      errors.email = "invalid email";
    }
    if (formData.password.trim().length <= 7) {
      errors.password = "password should be minimum 8 characters";
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setformErrors({});
      dispatch(asyncLoginUser(formData, setformErrors, navigate));
      //window.location.reload();
      if (Object.keys(formErrors).length === 0) {
        dispatch(asyncGetAllCustomers());
        dispatch(asyncGetAllProducts());
        dispatch(asyncGetUserInformation());
        navigate("/dashboard");
      }
    } else {
      setformErrors(errors);
      console.log(errors);
      //login dispatch along weith errors object to set unregisteres email and wrong password
    }
  };
  return (
    <form onSubmit={handleSignUp} className="form-container">
      <h2>SIGN IN</h2>
      {formErrors.serverErrors && (
        <span style={{ display: "flex", justifyContent: "center" }}>
          {formErrors.serverErrors}
        </span>
      )}
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
        <button type="submit" value="signup" className="btn secondary">
          SIGN IN
        </button>
      </div>
      <div className="form-items">
        <p>Not a registered user? </p>
        <p>
          Sign up{" "}
          <Link to="/signup">
            <i style={{ color: "green" }}>HERE</i>
          </Link>{" "}
          to get started!
        </p>
      </div>
    </form>
  );
};

export default SignUp;
