import {
	ORDERS,
	ORDERS_SUCCESS,
	ORDERS_FAILED,
	ORDER_LIST,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	orderSuccess: null,
	orderFailed: "",
	orderListArry: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ORDERS:
			return { ...state, isLoading: true };
			break;
		case ORDERS_SUCCESS:
			return {
				...state,
				orderSuccess: action.payload,
				isLoading: false,
			};
			break;
		case ORDERS_FAILED:
			return {
				...state,
				error: action.payload,
				orderFailed: action.payload,
				isLoading: false,
			};
			break;
		case ORDER_LIST:
			return { ...state, isLoading: true };
			break;
		case ORDER_LIST_SUCCESS:
			return {
				...state,
				orderListArry: action.payload,
				isLoading: false,
			};
			break;
		case ORDER_LIST_FAILED:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
			break;

		default:
			return state;
			break;
	}
};

export default reducer;
