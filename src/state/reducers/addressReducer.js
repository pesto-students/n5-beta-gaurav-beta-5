import {
	GET_ADDRESSES,
	GET_ADDRESSES_SUCCESS,
	GET_ADDRESSES_FAILED,
	ADD_ADDRESS,
	ADD_ADDRESS_SUCCESS,
	ADD_ADDRESS_FAILED,
	UPDATE_ADDRESS,
	UPDATE_ADDRESS_SUCCESS,
	UPDATE_ADDRESS_FAILED,
	DELETE_ADDRESS,
	DELETE_ADDRESS_SUCCESS,
	DELETE_ADDRESS_FAILED,
	SET_CURRENT_ADDRESS,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	userAddresses: [],
	addedAddress: {},
	updatedAddress: {},
	deletedAddress: {},
	currentAddress: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ADDRESSES:
			return { ...state, isLoading: true };
			break;
		case GET_ADDRESSES_SUCCESS:
			return {
				...state,
				userAddresses: action.payload,
				isLoading: false,
			};
			break;
		case GET_ADDRESSES_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case ADD_ADDRESS:
			return { ...state, isLoading: true };
			break;
		case ADD_ADDRESS_SUCCESS:
			return {
				...state,
				addedAddress: action.payload,
				isLoading: false,
			};
			break;
		case ADD_ADDRESS_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case UPDATE_ADDRESS:
			return { ...state, isLoading: true };
			break;
		case UPDATE_ADDRESS_SUCCESS:
			return {
				...state,
				updatedAddress: action.payload,
				isLoading: false,
			};
			break;
		case UPDATE_ADDRESS_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case DELETE_ADDRESS:
			return { ...state, isLoading: true };
			break;
		case DELETE_ADDRESS_SUCCESS:
			return {
				...state,
				deletedAddress: action.payload,
				isLoading: false,
			};
			break;
		case DELETE_ADDRESS_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case SET_CURRENT_ADDRESS:
			return {
				...state,
				currentAddress: action.payload,
				isLoading: false,
			};
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
