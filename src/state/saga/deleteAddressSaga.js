import { takeLatest, all, call, put } from "redux-saga/effects";
import { DELETE_ADDRESS } from "../../constants/actionType";

import {
	deleteAddressSuccess,
	deleteAddressFailed,
} from "../actions/addressAction";
import { deleteAddressApi } from "../../api/address/deleteAddressApi";

function* deleteAddressSaga(payload) {
	try {
		const data = yield call(deleteAddressApi, payload);
		console.log("deleteAddress", data);

		yield put(deleteAddressSuccess(data));
	} catch (error) {
		yield put(deleteAddressFailed(error.message));
	}
}

function* deleteAddressWatcher() {
	yield takeLatest(DELETE_ADDRESS, deleteAddressSaga);
}

export default function* deleteAddressRootSaga() {
	yield all([deleteAddressWatcher()]);
}
