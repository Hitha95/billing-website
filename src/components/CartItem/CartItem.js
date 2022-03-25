import "./cart-item.css";
import { useDispatch } from "react-redux";
import { incrementQuantity } from "../../redux/actions/shopActions";
import { decrementQuantity } from "../../redux/actions/shopActions";

const CartItem = ({ item }) => {
  const { product, quantity } = item;
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementQuantity(product));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(product));
  };
  return (
    <div className="cart-item-container">
      <h2>{product.name}</h2>
      <p>
        <i>Price: ₹</i>
        {product.price}
      </p>
      <div>
        <button
          className="cart-item-action"
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          -
        </button>
        Qty: {quantity}
        <button className="cart-item-action" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
