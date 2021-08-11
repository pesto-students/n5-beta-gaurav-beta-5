import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { RESET_PASSWORD } from "../../constants/actionType";

import {
	resetPassword,
	resetPasswordSuccess,
	resetPasswordFailed,
} from "../actions/authActions";

import { passwordResetApi } from "../../api/auth/passwordReset";
import { userMeApi } from "../../api/auth/userme";

function* resetPasswordSaga(payload) {
	try {
		const data = yield call(passwordResetApi, payload);
		console.log("reset password", data);

		yield put(resetPasswordSuccess(data));
	} catch (error) {
		yield put(resetPasswordFailed(error.message));
	}
}

function* resetPasswordWatcher() {
	yield takeLatest(RESET_PASSWORD, resetPasswordSaga);
}

export default function* resetPasswordRootSaga() {
	yield all([resetPasswordWatcher()]);
}
