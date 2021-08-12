import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { UPDATE_USER_INFO } from "../../constants/actionType";

import {
	updateUserInfoSuccess,
	updateUserInfoFailed,
} from "../actions/authActions";

import { updateUserInfoApi } from "../../api/auth/updateUserInfo";

function* updateUserInfoSaga(payload) {
	try {
		const data = yield call(updateUserInfoApi, payload);
		console.log("USER INFO", data);

		yield put(updateUserInfoSuccess(data));
	} catch (error) {
		yield put(updateUserInfoFailed(error.message));
	}
}

function* updateUserInfoWatcher() {
	yield takeLatest(UPDATE_USER_INFO, updateUserInfoSaga);
}

export default function* updateUserInfoRootSaga() {
	yield all([updateUserInfoWatcher()]);
}
