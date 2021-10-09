import { takeLatest, all, call, put } from "redux-saga/effects";
import { SIGNUP } from "../../constants/actionType";

import { signUpSuccess, signUpFailed } from "../actions/authActions";

import { signUpAPI } from "../../api/auth/signup";

function* signUpSaga(payload) {
	try {
		const data = yield call(signUpAPI, payload);
		console.log("signUp", data);

		localStorage.setItem("signUpSession", JSON.stringify(data));
		yield put(signUpSuccess(data));
	} catch (error) {
		yield put(signUpFailed(error.message));
	}
}

function* signUpWatcher() {
	yield takeLatest(SIGNUP, signUpSaga);
}

export default function* signUpRootSaga() {
	yield all([signUpWatcher()]);
}
