import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { GET_PRODUCTS } from "../../constants/actionType";

import {
	getProductsSuccess,
	getProductsFailed,
} from "../actions/getProductsAction";
import { getProductsApi } from "../../api/products/getProductsApi";

function* getProductsSaga(payload) {
	try {
		const data = yield call(getProductsApi, payload);
		console.log("getProducts", data);

		yield put(getProductsSuccess(data));
	} catch (error) {
		yield put(getProductsFailed(error.message));
	}
}

function* getProductsWatcher() {
	yield takeLatest(GET_PRODUCTS, getProductsSaga);
}

export default function* getProductsRootSaga() {
	yield all([getProductsWatcher()]);
}
