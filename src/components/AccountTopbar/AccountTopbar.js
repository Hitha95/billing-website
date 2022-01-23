import "./account-topbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AccountTopbar = () => {
  const user = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();
  const accountSettingsDropdown = () => {
    let dropdown = document.getElementById("account-settings-dropdown");
    if (dropdown.style.visibility === "visible") {
      dropdown.style.visibility = "hidden";
    } else {
      dropdown.style.visibility = "visible";
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("billing-token");
    navigate("/signin");
    window.location.reload();
  };
  return (
    <div className="user-info-topbar">
      <div className="information">
        <div>
          <BsFillPersonFill />
        </div>
        {user && <div className="user-name">Hi {user.username}!</div>}
        <div className="account-settings" onClick={accountSettingsDropdown}>
          <IoSettingsOutline />
          <div
            id="account-settings-dropdown"
            className="account-settings-dropdown"
          >
            <Link to="/account">
              <p>PROFILE</p>
            </Link>
            <p onClick={handleLogout}>LOGOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTopbar;
