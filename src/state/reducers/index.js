import { combineReducers } from "redux";
import products from "./productReducer";
import auth from "./authReducer";

const reducers = combineReducers({
	products,
	auth,
});

export default reducers;
