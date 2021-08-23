import {
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	UPDATE_TO_CART_SUCCESS,
	ADD_TO_CART_FAILED,
	DELETE_TO_CART_SUCCESS,
	ADD_SHIPPING_CHARGE,
} from "../../constants/actionType";
import { toast } from "react-toastify";

let initialState = {
	isLoading: false,
	cart: [],
	totalShippingCharge: 0,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, isLoading: true };
			break;
		case ADD_TO_CART_SUCCESS:
			toast.success("Product added to Cart");
			return {
				...state,
				cart: [...state.cart, action.payload],
				isLoading: false,
			};
			break;
		case UPDATE_TO_CART_SUCCESS:
			//console.log("state", action.payload);
			const productIndex = state.cart.findIndex(
				(p) => p.objectId === action.payload.objectId
			);
			if (productIndex >= 0) {
				state.cart[productIndex] = action.payload;
			}
			// console.log("state.cart", state);,
			toast.success("Product Quantity updated");
			return {
				...state,
				isLoading: false,
			};
			break;
		case DELETE_TO_CART_SUCCESS:
			//toast.success("Product Deleted");
			console.log("delete payload red", action.payload);
			return {
				...state,
				cart: [...action.payload],
				isLoading: false,
			};
			break;

		case ADD_TO_CART_FAILED:
			toast.error("Something went wrong");
			return { ...state, error: action.payload, isLoading: false };
			break;
		case ADD_SHIPPING_CHARGE:
			return {
				...state,
				totalShippingCharge: action.payload,
				isLoading: false,
			};
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
