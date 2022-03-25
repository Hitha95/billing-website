import { createStore, combineReducers, applyMiddleware } from "redux";
//import reducers
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { customersReducer } from "./reducers/customersReducer";
import { productsReducer } from "./reducers/productsReducer";
import { billsReducer } from "./reducers/billsReducer";
import { shopReducer } from "./reducers/shopReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  //reducerName: reducer
  user: userReducer,
  customers: customersReducer,
  products: productsReducer,
  bills: billsReducer,
  shop: shopReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
