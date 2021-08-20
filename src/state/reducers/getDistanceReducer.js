import {
	GET_DISTANCE,
	GET_DISTANCE_SUCCESS,
	GET_DISTANCE_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	uvDistance: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DISTANCE:
			return { ...state, isLoading: true };
			break;
		case GET_DISTANCE_SUCCESS:
			return { ...state, uvDistance: action.payload, isLoading: false };
			break;
		case GET_DISTANCE_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
