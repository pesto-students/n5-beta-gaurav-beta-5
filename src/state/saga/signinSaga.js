import { takeLatest, all, call, put } from "redux-saga/effects";
import { SIGNIN } from "../../constants/actionType";

import { signInSuccess, signInFailed } from "../actions/authActions";
import { signInAPI } from "../../api/auth/signin";

function* signInSaga(payload) {
	try {
		const data = yield call(signInAPI, payload);
		console.log("signIn", data);
		localStorage.setItem("session", JSON.stringify(data));
		yield put(signInSuccess(data));
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

function* signInWatcher() {
	yield takeLatest(SIGNIN, signInSaga);
}

export default function* signInRootSaga() {
	yield all([signInWatcher()]);
}
