import {
	GET_PRODUCT_LIST,
	GET_PRODUCT_LIST_SUCCESS,
	GET_PRODUCT_LIST_FAILED,
	SET_PRODUCT,
} from "../../constants";

let initialState = {
	isLoading: false,
	productList: [],
	product: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_LIST:
			return { ...state, isLoading: true };
			break;
		case GET_PRODUCT_LIST_SUCCESS:
			return { ...state, productList: action.payload, isLoading: false };
			break;
		case GET_PRODUCT_LIST_FAILED:
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
