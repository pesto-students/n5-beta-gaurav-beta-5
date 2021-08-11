import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { SIGNUP } from "../../constants/actionType";

import { signUp, signUpSuccess, signUpFailed } from "../actions/authActions";

import { signUpAPI } from "../../api/auth/signup";
import { userMeApi } from "../../api/auth/userme";

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
