import "./account-topbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const AccountTopbar = () => {
  const user = useSelector((state) => state.user.userDetails);
  return (
    <div className="user-info-topbar">
      <div className="information">
        <div>
          <BsFillPersonFill />
        </div>
        {user && <div className="user-name">Hi {user.username}!</div>}
        <div>
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  );
};

export default AccountTopbar;
