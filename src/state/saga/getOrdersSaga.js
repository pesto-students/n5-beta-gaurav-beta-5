import { takeLatest, all, call, put } from "redux-saga/effects";

import { orderListSuccess, orderListFailed } from "../actions/orderAction";
import { getOrdersApi } from "../../api/order/ordersApi";
import { ORDER_LIST } from "../../constants/actionType";

function* getOrdersSaga(payload) {
	try {
		const data = yield call(getOrdersApi, payload);
		console.log("get orders", data);
		yield put(orderListSuccess(data));
	} catch (error) {
		yield put(orderListFailed(error.message));
	}
}

function* getOrdersWatcher() {
	yield takeLatest(ORDER_LIST, getOrdersSaga);
}

export default function* getOrdersRootSaga() {
	yield all([getOrdersWatcher()]);
}
