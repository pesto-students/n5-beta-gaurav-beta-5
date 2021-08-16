import { SHOW_MAP } from "../../constants/actionType";

let initialState = {
	isLoading: false,
	isMapView: false,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MAP:
			return { ...state, isMapView: action.payload, isLoading: false };
			break;

		default:
			return state;
			break;
	}
};

export default reducer;
