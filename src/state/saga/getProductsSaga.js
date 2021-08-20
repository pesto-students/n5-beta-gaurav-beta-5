import { takeLatest, all, call, put } from "redux-saga/effects";
import { GET_PRODUCTS } from "../../constants/actionType";

import {
	getProductsSuccess,
	getProductsFailed,
} from "../actions/getProductsAction";
import { getProductsApi } from "../../api/products/getProductsApi";

// import { select } from "redux-saga/effects";

export const obj = (state) => state.searchedLocation;

function* getProductsSaga(payload) {
	try {
		const data = yield call(getProductsApi, payload);
		console.log("getProducts", data);
		// let userLoc = yield select(obj);
		// let latLng = userLoc.userSelectedLocation
		// 	? userLoc.userSelectedLocation.center
		// 	: [];

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
