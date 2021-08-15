import { combineReducers } from "redux";
import products from "./productsReducer";
import auth from "./authReducer";
import category from "./categoriesReducer";
import myCart from "./addToCartReducer";
import searchedLocation from "./locationSearchReducer";
import localGlobal from "./localGlobalReducer";
import userVendorDistance from "./getDistanceReducer";

const reducers = combineReducers({
	products,
	auth,
	category,
	myCart,
	searchedLocation,
	localGlobal,
	userVendorDistance,
});

export default reducers;
