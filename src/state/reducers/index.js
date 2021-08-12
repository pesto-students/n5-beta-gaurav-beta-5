import { combineReducers } from "redux";
import products from "./productsReducer";
import auth from "./authReducer";
import category from "./categoriesReducer";

const reducers = combineReducers({
	products,
	auth,
	category,
});

export default reducers;
