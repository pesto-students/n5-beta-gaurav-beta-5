import { combineReducers } from "redux";
import products from "./productsReducer";
import auth from "./authReducer";
import category from "./categoriesReducer";
import myCart from "./addToCartReducer";
import searchedLocation from "./locationSearchReducer";

const reducers = combineReducers({
	products,
	auth,
	category,
	myCart,
	searchedLocation,
});

export default reducers;
