import { takeLatest, all, call, put } from "redux-saga/effects";
import { UPDATE_ADDRESS } from "../../constants/actionType";

import {
	updateAddressSuccess,
	updateAddressFailed,
} from "../actions/addressAction";
import { updateAddressApi } from "../../api/address/updateAdressApi";

function* updateAddressSaga(payload) {
	try {
		const data = yield call(updateAddressApi, payload);
		console.log("updateAddress", data);

		yield put(updateAddressSuccess(data));
	} catch (error) {
		yield put(updateAddressFailed(error.message));
	}
}

function* updateAddressWatcher() {
	yield takeLatest(UPDATE_ADDRESS, updateAddressSaga);
}

export default function* updateAddressRootSaga() {
	yield all([updateAddressWatcher()]);
}
