import { combineReducers } from "redux";
import products from "./productsReducer";
import auth from "./authReducer";
import category from "./categoriesReducer";
import myCart from "./addToCartReducer";
import searchedLocation from "./locationSearchReducer";
import localGlobal from "./localGlobalReducer";
import userVendorDistance from "./getDistanceReducer";
import map from "./showMapReducer";
import addressState from "./addressReducer";
import orderState from "./orderReducer";

const reducers = combineReducers({
	products,
	auth,
	category,
	myCart,
	searchedLocation,
	localGlobal,
	userVendorDistance,
	map,
	addressState,
	orderState,
});

export default reducers;
