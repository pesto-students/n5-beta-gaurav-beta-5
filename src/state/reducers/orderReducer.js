import {
	ORDERS,
	ORDERS_SUCCESS,
	ORDERS_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	orderSuccess: "",
	orderFailed: "",
	orderList: null,
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

		default:
			return state;
			break;
	}
};

export default reducer;
