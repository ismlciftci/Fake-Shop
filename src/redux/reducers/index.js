import { combineReducers } from "redux";
import { buyProductReducer, productsReducer, selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  
});
export default reducers;