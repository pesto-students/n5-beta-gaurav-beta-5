import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import { GET_PRODUCT_LIST, SET_PRODUCT } from "../../constants";

import {
	getProductListSuccess,
	getProductListFailed,
	setProduct,
} from "../actions";
import { getProductListApi } from "../../api/products/getProductsApi";

function* getProductsSaga() {
	try {
		const data = yield call(getProductListApi);
		console.log("saga", data);
		yield put(getProductListSuccess(data));
	} catch (error) {
		yield put(getProductListFailed(error.message));
	}
}

function* getProductsWatcher() {
	yield takeEvery(GET_PRODUCT_LIST, getProductsSaga);
}

export default function* productsSaga() {
	yield all([getProductsWatcher()]);
}
