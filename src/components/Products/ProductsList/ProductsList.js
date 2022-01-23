import "./products-list.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products.allProducts);
  return (
    <div className="products-list">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
