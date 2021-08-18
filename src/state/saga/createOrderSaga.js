import { takeLatest, all, call, put } from "redux-saga/effects";

import { makeOrderSuccess, makeOrderFailed } from "../actions/orderAction";
import { createOrderApi } from "../../api/order/ordersApi";
import { ORDERS } from "../../constants/actionType";

function* createOrderSaga(payload) {
	try {
		const data = yield call(createOrderApi, payload);
		data.orderId = payload.payload.orderId;
		data.transactionStatus = payload.payload.transactionStatus;
		data.reason = payload.payload.reason || "";

		//	const orderData = [...data, ...payload];
		console.log("orders", data);
		yield put(makeOrderSuccess(data));
	} catch (error) {
		yield put(makeOrderFailed(error.message));
	}
}

function* createOrdersWatcher() {
	yield takeLatest(ORDERS, createOrderSaga);
}

export default function* createOrderRootSaga() {
	yield all([createOrdersWatcher()]);
}
