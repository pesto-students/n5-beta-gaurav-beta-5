import {
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	cart: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, isLoading: true };
			break;
		case ADD_TO_CART_SUCCESS:
			return {
				...state,
				cart: [...state.cart, action.payload],
				isLoading: false,
			};
			break;
		case ADD_TO_CART_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
