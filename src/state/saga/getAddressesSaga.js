import { takeLatest, all, call, put } from "redux-saga/effects";
import { GET_ADDRESSES } from "../../constants/actionType";

import {
	getAddressesSuccess,
	getAddressesFailed,
} from "../actions/addressAction";
import { getAddressesApi } from "../../api/address/getAddressesApi";

function* getAddressesSaga(payload) {
	try {
		const data = yield call(getAddressesApi, payload);
		console.log("getAddresses", data);

		yield put(getAddressesSuccess(data));
	} catch (error) {
		yield put(getAddressesFailed(error.message));
	}
}

function* getAddressesWatcher() {
	yield takeLatest(GET_ADDRESSES, getAddressesSaga);
}

export default function* getAddressesRootSaga() {
	yield all([getAddressesWatcher()]);
}
