import { takeLatest, all, call, put } from "redux-saga/effects";
import { ADD_ADDRESS } from "../../constants/actionType";

import { addAddressSuccess, addAddressFailed } from "../actions/addressAction";
import { addAddressApi } from "../../api/address/addAddressApi";

function* addAddressSaga(payload) {
	try {
		const data = yield call(addAddressApi, payload);
		console.log("addAddress", data);

		yield put(addAddressSuccess(data));
	} catch (error) {
		yield put(addAddressFailed(error.message));
	}
}

function* addAddressWatcher() {
	yield takeLatest(ADD_ADDRESS, addAddressSaga);
}

export default function* addAddressRootSaga() {
	yield all([addAddressWatcher()]);
}
