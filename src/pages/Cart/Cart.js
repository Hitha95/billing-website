import "./cart.css";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <img
          src={require("../../Data/Images/empty_cart.png")}
          alt="empty cart"
        />
      ) : (
        <>
          {" "}
          <div>Your Cart :</div>
          <h2>You have shopped!</h2>
          <div className="cart-items-list">
            {cart.map((item) => {
              return <CartItem item={item} />;
            })}
          </div>
        </>
      )}

      <div className="suggestions"></div>
    </div>
  );
};
export default Cart;
