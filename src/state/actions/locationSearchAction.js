import {
	LOCATION_SEARCH,
	LOCATION_SEARCH_SUCCESS,
	LOCATION_SEARCH_FAILED,
	SET_USER_LATLONG,
	SET_USER_LOCATION,
} from "../../constants/actionType";

export const locationSearch = (payload) => ({
	type: LOCATION_SEARCH,
	payload,
});

export const locationSearchSuccess = (payload) => ({
	type: LOCATION_SEARCH_SUCCESS,
	payload,
});

export const locationSearchFailed = (payload) => ({
	type: LOCATION_SEARCH_FAILED,
	payload,
});

export const setUserLatLong = (payload) => ({
	type: SET_USER_LATLONG,
	payload,
});

export const setUserLocation = (payload) => ({
	type: SET_USER_LOCATION,
	payload,
});
