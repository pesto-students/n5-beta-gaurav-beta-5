import {
	ORDERS,
	ORDERS_SUCCESS,
	ORDERS_FAILED,
} from "../../constants/actionType";

export const makeOrder = (payload) => ({
	type: ORDERS,
	payload,
});

export const makeOrderSuccess = (payload) => ({
	type: ORDERS_SUCCESS,
	payload,
});

export const makeOrderFailed = (payload) => ({
	type: ORDERS_FAILED,
	payload,
});
