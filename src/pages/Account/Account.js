import "./account.css";
import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state) => state.user.userDetails);
  return (
    <div style={{ marginLeft: "200px" }}>
      {user.username && <p>{user.username}</p>}
    </div>
  );
};

export default Account;
