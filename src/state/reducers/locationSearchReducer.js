import {
	LOCATION_SEARCH,
	LOCATION_SEARCH_SUCCESS,
	LOCATION_SEARCH_FAILED,
	SET_USER_LATLONG,
	SET_USER_LOCATION,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	locations: [],
	userSelectedLocation: {},
	userLatLong: {},
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOCATION_SEARCH:
			return { ...state, isLoading: true };
			break;
		case LOCATION_SEARCH_SUCCESS:
			return { ...state, locations: action.payload, isLoading: false };
			break;
		case LOCATION_SEARCH_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case SET_USER_LOCATION:
			console.log("action.payload", action.payload);
			return { ...state, userSelectedLocation: action.payload };
			break;
		case SET_USER_LATLONG:
			return { ...state, userLatLong: action.payload };
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
