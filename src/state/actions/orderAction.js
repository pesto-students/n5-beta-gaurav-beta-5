import {
	ORDERS,
	ORDERS_SUCCESS,
	ORDERS_FAILED,
	ORDER_LIST,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAILED,
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

export const orderList = (payload) => ({
	type: ORDER_LIST,
	payload,
});

export const orderListSuccess = (payload) => ({
	type: ORDER_LIST_SUCCESS,
	payload,
});

export const orderListFailed = (payload) => ({
	type: ORDER_LIST_FAILED,
	payload,
});
