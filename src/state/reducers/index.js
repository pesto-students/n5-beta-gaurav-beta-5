import { combineReducers } from "redux";
import products from "./productsReducer";
import auth from "./authReducer";
import category from "./categoriesReducer";
import myCart from "./addToCartReducer";

const reducers = combineReducers({
	products,
	auth,
	category,
	myCart,
});

export default reducers;
