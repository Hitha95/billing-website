import "./shop.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductsList from "../../components/Products/ProductsList/ProductsList";

const Shop = () => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  console.log(selectedCustomer);
  return (
    <div className="shop-container">
      <div>
        <label>Select customer</label>
        <select
          value={selectedCustomer}
          onChange={(e) => {
            setSelectedCustomer(e.target.value);
          }}
        >
          <option value="">--none--</option>
          {customers.map((customer, i) => {
            return (
              <option key={i} value={customer.name}>
                {customer.name}
              </option>
            );
          })}
        </select>
      </div>
      {selectedCustomer === "" ? (
        <p>Please choose a customer on behalf of whom you are shopping!</p>
      ) : (
        <div>
          <p>Shopping for {selectedCustomer}</p>
          <ProductsList />
        </div>
      )}
    </div>
  );
};

export default Shop;
