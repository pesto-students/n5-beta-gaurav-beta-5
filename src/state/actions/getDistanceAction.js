import {
	GET_DISTANCE,
	GET_DISTANCE_SUCCESS,
	GET_DISTANCE_FAILED,
} from "../../constants/actionType";

export const getDistance = (payload) => ({
	type: GET_DISTANCE,
	payload,
});

export const getDistanceSuccess = (payload) => ({
	type: GET_DISTANCE_SUCCESS,
	payload,
});

export const getDistanceFailed = (payload) => ({
	type: GET_DISTANCE_FAILED,
	payload,
});
