import "./shop.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import { selectCustomer } from "../../redux/actions/shopActions";

const Shop = () => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const products = useSelector((state) => state.products.allProducts);
  const customerId = useSelector((state) => state.shop.customerId);
  const customerName = useSelector((state) => state.shop.customerName);
  /*  const [selectedCustomer, setSelectedCustomer] = useState(
    JSON.parse(localStorage.getItem("Shop")).customerName || ""
  ); */
  const [selectedCustomer, setSelectedCustomer] = useState(customerId || "");
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const handleCustomer = (e) => {
    let id = e.target.value;
    console.log(id);
    let result = customers.find((cust) => {
      return id === cust._id;
    });
    setSelectedCustomer(id);
    dispatch(selectCustomer(result));
  };

  const filtertedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchString)
  );

  return (
    <div className="shop-container">
      <div>
        <div>
          <label>Select customer</label>
          <select value={selectedCustomer} onChange={handleCustomer}>
            <option value="">--none--</option>
            {customers.map((customer, i) => {
              return (
                <option key={i} value={customer._id}>
                  {customer.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            placeholder="search for products"
          />
        </div>
      </div>
      {selectedCustomer === "" ? (
        <>
          <p>Please choose a customer on behalf of whom you are shopping!</p>
          <img src={require("../../Data/Images/empty.png")} alt="empty" />
        </>
      ) : (
        <div>
          <p>Shopping for {customerName}</p>
          <ProductsList filtertedProducts={filtertedProducts} />
        </div>
      )}
    </div>
  );
};

export default Shop;
