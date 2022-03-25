import "./product-card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/shopActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  const inCart = cart.find((item) => item.product._id === product._id);
  //console.log("find", inCart);
  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addToCart(product));
  };
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>
        <i>Price: ₹</i>
        {product.price}
      </p>
      <button
        className={inCart ? "btn" : "btn secondary"}
        disabled={inCart}
        onClick={handleAddToCart}
      >
        {inCart ? "IN CART" : "ADD TO CART"}
      </button>
    </div>
  );
};

export default ProductCard;
