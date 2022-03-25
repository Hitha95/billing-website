import "./products-list.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({ filtertedProducts }) => {
  return (
    <div className="products-list">
      {filtertedProducts.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
