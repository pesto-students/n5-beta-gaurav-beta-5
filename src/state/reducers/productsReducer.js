import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILED,
	SET_PRODUCT,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	productList: [],
	product: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return { ...state, isLoading: true };
			break;
		case GET_PRODUCTS_SUCCESS:
			return { ...state, productList: action.payload, isLoading: false };
			break;
		case GET_PRODUCTS_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case SET_PRODUCT:
			return { ...state, product: action.payload };
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
