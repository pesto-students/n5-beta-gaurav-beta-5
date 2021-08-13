import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { ADD_TO_CART } from "../../constants/actionType";

import { addToCartSuccess, addToCartFailed } from "../actions/addToCartActions";

function* addToCartSaga(data) {
	console.log("addto cart saga", data.payload);
	try {
		yield put(addToCartSuccess(data.payload));
	} catch (error) {
		yield put(addToCartFailed(error.message));
	}
}

function* addToCartWatcher() {
	yield takeLatest(ADD_TO_CART, addToCartSaga);
}

export default function* addToCartRootSaga() {
	yield all([addToCartWatcher()]);
}
